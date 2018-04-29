<template>
<div class="main-section">
     <div class="card log-in">
         <log-in/>
     </div>
    <div class="card campaigns">
        <p>campaign</p>
    </div>
  </div>
</template>

<script>
import logIn from './logIn.vue';
import { getLeaderBoardData } from '../../service/leaderboard'; 


export default {
  name: 'home',
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
    logIn
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

.log-in{
    height: 60%;
}

.campaigns{
    height: 40%;
    box-shadow: 0px 0px 0px black;
}
</style>
