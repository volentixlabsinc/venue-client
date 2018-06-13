<template>
  <div class="log-in-element">
    <h3>LOGIN</h3>
    <form method="POST" @submit="authenticateLogin($event)">
      <ul>
        <li v-for="error in errors" :key="error.id" class="venue-text">{{ error[0] ? error[0].msg: '' }}</li>
      </ul>
      <input v-validate="'required'" v-model="username" name="username" placeholder="username or email">
      <input v-validate="'required|regex:[^]*'" v-model="password" type="password" name="password" placeholder="password">
      <button 
        type="submit" 
        class="btn">Log In</button>
      <a 
        class="cancel"
        @click="$emit('cancel')">CANCEL</a>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      logged: false,
      loginError: false,
      username: "",
      password: ""
    };
  },
  methods: {
    async authenticateLogin(event) {
      event.preventDefault();
      this.loginError = false;

      const authResponse = await this.$axios.$post("/authenticate/", {
        username: this.username,
        password: this.password
      });
      // if (authResponse.status !== 200) {
      //   //Handle Login Error here
      //   console.log('wrong credentials')
      //   var message = 'something went wrong'
      //   this.loginError = true
      //   return message
      // }

      await this.$store.commit("user/authenticated", {
        userId: authResponse.user_profile_id,
        language: authResponse.language,
        token: authResponse.token
      });

      const userStats = await this.$axios.$get("/retrieve/stats/");
      this.$store.commit("setUserStats", userStats.stats);

      this.$router.push("/dashboard");
    }
  }
};
</script>

<style scoped>
.log-in-element {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

button {
  width: 80%;
  height: 10%;
  background-color: #5b4c6c;
  border: 1px solid #9b68cd;
  color: white;
}

.cancel {
  border: 0px solid rgb(176, 176, 176);
  box-shadow: 0px 0px 0px white;
  background-color: inherit;
  text-decoration: underline !important;
  font-size: 16px;
  color: rgb(176, 176, 176);
  padding-top: 0.5rem;
  padding-right: 1.6rem;
  padding-bottom: 0.5rem;
  padding-left: 1.6rem;
}

.cancel:hover {
  border: 0px solid rgb(176, 176, 176);
  box-shadow: 0px 0px 0px white;
  background-color: inherit;
}

input {
  background-color: inherit;
  width: 80%;
  margin: 10px;
  border: none;
  border-bottom: 1px solid rgb(176, 176, 176);
  font-size: 16px;
  font-weight: 100;
  color: whitesmoke;
}

textarea:focus,
input:focus {
  outline: none;
}

::placeholder {
  color: rgb(176, 176, 176);
  opacity: 1;
}

.venue-text {
  color: rgb(210, 1, 1);
  font-size: 16px;
  width: 80%;
  text-align: left;
  display: inline-block;
}
</style>
