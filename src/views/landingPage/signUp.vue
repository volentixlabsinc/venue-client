<template>
<div class="log-in-element">
    <input v-validate="'required|email'" name="email" placeholder="email" v-model="email"/>
    <span class="venue-text">{{ errors.first('email') }}</span>
    <input v-validate="'required'" name="username" placeholder="username" v-model="username"/>
    <span class="venue-text">{{ errors.first('username') }}</span>
    <input v-validate="'required|min:6'" name="password" placeholder="password" v-model="password"/>
    <span class="venue-text">{{ errors.first('password') }}</span>
    <input v-validate="{is: password}" name="confirmation" placeholder="confirm password" v-model="confirmation"/>
    <span class="venue-text">{{ errors.first('confirmation') }}</span>
    <button 
    @click="$router.push('/dashboard')"
    class="btn btn-sm ">Sign Up</button>
    <button 
    @click="$emit('cancel')"
    class="btn btn-sm cancel">Cancel</button>
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
      confirmation: ''
    }
  }
}
</script>

<style scoped>
.log-in-element{
  display: flex ;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%
}

button {
  width: 80%;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(176, 176, 176);
  color: rgb(176, 176, 176);
  box-shadow: 0px 0px 0px white;
}

input{
  background-color: inherit;
  width: 80%;
  margin:10px;
  border: none;
  border-bottom: 1px solid rgb(176, 176, 176);
  font-size: 14px;
  font-weight: 100;
  color: whitesmoke;
}
.cancel {
  border: 0px solid rgb(176, 176, 176);
  box-shadow: 0px 0px 0px white;
  background-color: inherit;
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
  font-size: 12px;
  width: 80%;
  text-align: left;
}
</style>
