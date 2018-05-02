<template>
<div class="log-in-element">
  <h3>LOGIN</h3>
    <input v-validate="'required|username'" name="username" placeholder="username" v-model="username"/>
    <span class="venue-text">{{ errors.first('username') }}</span>
    <input v-validate="'required|password'" name="password" placeholder="password" v-model="password"/>
    <span class="venue-text">{{ errors.first('password') }}</span>
    <button 
    @click="$router.push('/dashboard')"
    class="btn btn-sm">Log In</button>
    <a 
    @click="$emit('cancel')"
    class="cancel">CANCEL</a>
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
      logged: false,
      username: '',
      password: ''
    }
  },
  mounted(){
    console.log('logIn');
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
  height: 100%;
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
  font-size: 0.64rem;
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
  font-size: 14px;
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
  font-size: 12px;
  width: 80%;
  text-align: left;
}
</style>
