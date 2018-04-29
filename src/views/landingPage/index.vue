<template>
<div class="main-section">
    <div v-if="action==='login'" class="card log-in-section-large">
        <log-in @cancel="action=null"/>
    </div>
    <div v-else-if="action==='signup'" class="card log-in-section-large">
        <sign-up @cancel="action=null"/>
    </div>
    
     <div v-else class="card log-in-section">
        <p>Autonomous signature campaign tracking</p>
        <p>VENUE tracks and displays sophisticated user rankings and accurate payout information live.</p>
        <button 
        @click="action='login'"
        :action="action"
        class="btn btn-sm ">log in</button>
        <button 
        @click="action='signup'"
        :action="action"
        class="btn btn-sm ">sign up</button>
    </div>
    <div class="card campaigns">
        <p>campaign</p>
    </div>
  </div>
</template>

<script>
import logIn from './logIn.vue';
import signUp from './signUp.vue';
import { getLeaderBoardData } from '../../service/leaderboard'; 


export default {
  name: 'home',
  data() {
      return {
          action: null
      }
  },
    mounted(){
    getLeaderBoardData()
      .then(response => {
          console.log('hello', response)
      })
      .catch(ex => {
        console.error(ex);
      });
  },
  
  components: {
    logIn,
    signUp
    }
}
</script>

<style scoped>
.main-section {
    height: 100%;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.card{
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.log-in-section{
    min-height: 60%;
}

.log-in-section *{
    height: 100%;
}

.log-in-section-large{
    min-height: 90%;
}
.log-in-section-large *{
    height: 100%;
}

.campaigns{
    height: 40%;
    box-shadow: 0px 0px 0px black;
}

button {
  width: 80%;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(176, 176, 176);
  color: rgb(176, 176, 176);
}
</style>
