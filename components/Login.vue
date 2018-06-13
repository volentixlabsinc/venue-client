<template>
  <div>
    <h3 class="title">LOGIN</h3>
    <form method="POST" @submit="authenticateLogin($event)">
      <ul>
        <li v-for="error in errors" :key="error.id" class="help is-danger">{{ error[0] ? error[0].msg: '' }}</li>
      </ul>
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input v-validate="'required'" v-model="username" type="text" class="input" name="username">
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input v-validate="'required|regex:[^]*'" v-model="password" class="input" type="password" name="password">
        </div>
      </div>
      <button 
        type="submit" 
        class="button is-primary is-fullwidth">Log In</button>
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
