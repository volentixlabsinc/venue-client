<template>
  <div class="main-section">
      <div class="card">
          <h1>Account</h1>
          <div class="md-form form-lg">
          <p>email</p>
          <input class="form-control"/>
          <p>username</p>
          <input class="form-control"/>
          <p>language</p>
          <input class="form-control"/>
          </div>
      </div>
  </div>
</template>



<script>
import {retrieveUser } from '../../service/account';

export default {
  Data () {
    return {
      user: {}
    }
  },
  mounted(){
    this.fetchUser();   
  },
  methods: {
    fetchUser() {
      retrieveUser()
    .then(response => {
      this.user = response;
      console.log('retrieveUser', response);
    })
    },
  }
}
</script>


<style scoped>
.main-section {
  width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: white;
}

.card {
  width: 95%;
  height: 80%;
}

.md-form {
  display: flex;
  flex-wrap: wrap;
}
p {
  width: 18%;
  margin-top: 20px
}
input{
  flex-grow: 0;
  width: 70%;
  margin-top: 20px;
  border: 0px solid white;
  border-bottom: 1px solid white;
}
</style>