<template>
<div class="log-in-element">
  <h3>SIGNUP</h3>
    <form method="POST" @submit="registerUser($event)">
        <input v-validate="'required|email'" name="email" placeholder="email" v-model="email"/>
        <span class="venue-text">{{ errors.first('email') }}</span>
        <input v-validate="'required'" name="username" placeholder="username" v-model="username"/>
        <span class="venue-text">{{ errors.first('username') }}</span>
        <input v-validate="'required|min:6'" type="password" name="password" placeholder="password" v-model="password"/>
        <span class="venue-text">{{ errors.first('password') }}</span>
        <input v-validate="{is: password}" type="password" name="confirmation" placeholder="confirm password" v-model="confirmation"/>
        <span class="venue-text">{{ errors.first('confirmation') }}</span>
        <span class="venue-text" v-if="signUpError">Sign Up Error</span>
        <button
        class="btn">Sign Up</button>
        <a 
        @click="$emit('cancel')"
        class="cancel">CANCEL</a>
    </form>
  </div>
</template>


<script>
import { checkForEmail, checkForUsername, createUser } from '~/services/account';

export default {
  props: {
    action: {
      type: String,
    }
  },
  data(){
    return{
      email: '',
      username: '',
      password: '',
      confirmation: '',
      signUpError: false
    }
  },

  methods: {
    // TODO Call this to verify a unique email address, before pressing the register button
    checkEmail: async function(email) {
      const { data } = await checkForEmail(this.email)
      if (data.email_exists) {
        // TODO Display error
      }
    },
    registerUser: async function(event) {
     event.preventDefault()
     this.signUpError = false

     const result = await createUser(this.email, this.username, this.password)

     if (result.status !== 200) {
        console.error('There was an error: ', data)
        this.signUpError = true
     } else {
       this.$emit('sucessfulRegistration'); 
     }
    }
  }
}
</script>

<style scoped>
.log-in-element{
  background-color: transparent;
  display: flex ;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

button {
  width: 80%;
  
  box-shadow: 0px 0px 0px white;
  background-color: #5B4C6C;
  border: 1px solid #9B68CD;
  color: white;
}

input{
  padding-bottom: 5px;
  background-color: inherit;
  width: 80%;
  margin:10px;
  border: none;
  border-bottom: 1px solid rgb(176, 176, 176);
  font-size: 16px;
  font-weight: 100;
  color: whitesmoke;
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

h3 {justify-self: flex-start;}

@media only screen and (min-width: 800px) {
  .log-in-element{
    margin-top: 0px;
  }
}
</style>
