<template>
  <div class="main-section">
      <div class="card">
          <h1>MY PROFILE</h1>
      </div>
      <div class="my-id">
        <h3>EMAIL</h3>
        <h3>USER NAME</h3>
        <h3>LANGUAGE</h3>
      </div>
      <div class="my-id">

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
    .catch(error => {
      console.log('error fetching user data', error);
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
  width: 100%;
  height: 15%;
   display: flex;
   flex-direction: column;
  flex-direction: flex-start;
  justify-content: center;
  align-items: center;  
}
.my-id {
  height: 30%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 30px 0px 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
}

</style>