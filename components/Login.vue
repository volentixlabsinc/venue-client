<template>
<div class="log-in-element">
  <h3>LOGIN</h3>
    <form method="POST" @submit="authenticateLogin($event)">
        <input v-validate="'required'" name="username" placeholder="username or email" v-model="username"/>
        <span class="venue-text">{{ errors.first('username') }}</span>
        <input v-validate="'required|regex:[^]*'" type="password" name="password" placeholder="password" v-model="password"/>
        <span class="venue-text">{{ errors.first('password') }}</span>
        <span v-if="loginError" class="venue-text">Authentication Error: Wrong credentials</span>
        <button 
        type="submit" 
        class="btn">Log In</button>
        <a 
        @click="$emit('cancel')"
        class="cancel">CANCEL</a>
    </form>
  </div>
</template>


<script>
import {authenticate} from  '~/services/auth';
import {writeToCookie} from '~/services/utils/browser-storage';

export default {
  props: {
    action: {
      type: String,
    }
  },
  data(){
    return{
      logged: false,
      loginError: false,
      username: '',
      password: ''
    }
  },
  mounted(){
    console.log('logIn');
  },
  methods: {
    authenticateLogin: function(event) {
      event.preventDefault()
      this.loginError = false
      authenticate(this.username, this.password)
      .then(response => {
        if(response.status === 200) {
          return response.json()
        } else {
          //Handle Login Error here 
          console.log('wrong credentials')
          var message = 'something went wrong'
          this.loginError = true
          return message
        }
      }).then(data=> {
          if (data.success) {
              writeToCookie(data.token)
              this.$store.commit('user/authenticated', {
                userId: data.user_profile_id,
                language: data.language 
              })
              this.$router.push('/dashboard')
          }
      })
    }
  }
}
</script>

<style scoped>
.log-in-element{
  background-color: transparent;
  display: flex ;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

}

button {
  width: 80%;
  height: 10%;
  background-color: #5B4C6C;
     border: 1px solid #9B68CD;
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


input{
  background-color: inherit;
  width: 80%;
  margin:10px;
  border: none;
  border-bottom: 1px solid rgb(176, 176, 176);
  font-size: 16px;
  font-weight: 100;
  color: whitesmoke;
}

textarea:focus, input:focus{
    outline: none;
}

::placeholder {
    color: rgb(176, 176, 176);
    opacity: 1;
}

.venue-text{
  color: rgb(210, 1, 1);
  font-size: 16px;
  width: 80%;
  text-align: left;
  display: inline-block;
}
</style>
