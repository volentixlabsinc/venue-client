<template>
<div class="log-in-element">
    <input v-validate="'required|username'" name="username" placeholder="username" v-model="username"/>
    <span class="venue-text">{{ errors.first('username') }}</span>
    <input v-validate="'required|password'" name="password" placeholder="password" v-model="password"/>
    <span class="venue-text">{{ errors.first('password') }}</span>
    <button 
    @click="$router.push('/dashboard')"
    class="btn btn-sm">Log In</button>
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
  display: flex ;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

button {
  width: 80%;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(176, 176, 176);
  color: rgb(176, 176, 176);
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
