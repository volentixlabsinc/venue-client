<template>
<div class="log-in-element">
  <h3>SIGNUP</h3>
    <form method="POST" @submit="registerUser($event)">
        <ul>
          <li class="venue-text" v-for="error in errors" :key="error.id">{{ error[0] ? error[0].msg: '' }}</li>
        </ul>
        <input v-validate="'required|email'" name="email" placeholder="email" v-model="email"/>
        <input v-validate="'required'" name="username" placeholder="username" v-model="username"/>
        <input v-validate="'required|min:6'" type="password" name="password" placeholder="password" v-model="password"/>
        <input v-validate="{is: password}" type="password" name="confirmation" placeholder="confirm password" v-model="confirmation"/>
        <button
        class="btn">Sign Up</button>
        <div>
        <a 
        @click="$emit('cancel')"
        class="cancel">CANCEL</a>
        </div>
    </form>
  </div>
</template>


<script>
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
      const data = await this.$axios.$get('check/email-exists/', { email: this.email })
      if (data.email_exists) {
        // TODO Display error
      }
    },
    registerUser: async function(event) {
     event.preventDefault()
     this.signUpError = false

     const result = await this.$axios.$post('create/user/', {
       email: this.email, 
       username: this.username, 
       password: this.password,
       language: 'en'
     })

     if (result.status !== 'success') {
        console.error('There was an error: ', data)
        this.signUpError = true
     } else {
       console.log('SUCCESS!!! Click on registration link')
       // TODO Display success modal here
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
