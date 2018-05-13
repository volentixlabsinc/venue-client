<template>
<div class="main-section">
    <div v-if="action==='login'" class="card log-in-section">
        <log-in @cancel="action=null"/>
    </div>
    <div v-else-if="action==='signup'" class="card log-in-section-large">
        <sign-up @cancel="action=null"/>
    </div>
    
     <div v-else class="card log-in-section">
        <div class="presentation-text">
            <p>Autonomous signature campaign tracking</p>
            <p>Venue tracks and displays sophisticated user rankings and accurate payout information live.</p>
         </div>
        
        <button 
        @click="action='login'"
        :action="action"
        class="btn login">log in</button>
        <button 
        @click="action='signup'"
        :action="action"
        class="btn signup">sign up</button>
    </div>
    <div v-if="data" class="card campaigns">
        <h2 class="section-title">Ongoing campaign</h2>
        <!-- <p class="available-tokens">{{data.sitewide.available_tokens}} VTX</p> -->
        <campaigns v-if="data.rankings" :rankings="data.rankings" :sitewide="data.sitewide"/>
    </div>

     <!-- <div class="card my-news-div">
      <div v-for= "news in newsList" :key="news" class="card my-news">
      <h2>{{news}}</h2>
      </div>
      </div> -->
    
  </div>
</template>

<script>
import logIn from './logIn.vue';
import signUp from './signUp.vue';
import campaigns from '../../components/leaderboard/index.vue'
import { getLeaderBoardData } from '../../service/leaderboard'; 
import { checkForUsername, checkForEmail } from '../../service/account'; 


export default {
  name: 'home',
  data() {
      return {
          action: null,
          data: null,
      }
  },
  mounted(){
    getLeaderBoardData()
      .then(response => {
          this.data = response;
          console.log('this.data: ', this.data);
      })
      .catch(ex => {
        console.error(ex);
      });
  },
  components: {
    logIn,
    signUp,
    campaigns
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

.card {
    box-shadow: none;
    width: 100%;
}

.log-in-section{
    background-image: linear-gradient(to top,  rgb(48, 49, 64, 0), #303140);
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    flex-grow: 0;
    padding: 30px;
    min-height: 40%;
}

.log-in-section-large{
    background-image: linear-gradient(to top,  rgb(48, 49, 64, 0), #303140);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:flex-start;
    height: auto; 
    padding: 30px;
}


.campaigns{
    width: 95%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    height: auto;

}
.section-title {
    margin: 0px;
    padding: 0px;
}
.available-tokens{
    margin: 0px;
    padding: 0px;
    font-size: 16px;
    color:#85449A;
    text-shadow: 1px 1px 1px black;
}
.presentation-text {
    width: 90%;
    font-size: 18px;
    }

button {
  width: 70%;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid #9B68CD;
  color: rgb(176, 176, 176);
}

.login {
     background-color: #5B4C6C;
     border: 1px solid #9B68CD;
     color: white;
}

.my-news-div {
    display: none;
}

@media only screen and (min-width: 800px) {
.main-section {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; 
    width: 90%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.campaigns, .log-in-section, .log-in-section-large{
    width: 100%;
    justify-content: center;
    align-items: center;
}


.card {
    width: 45%;
    min-height:50%;
    flex-shrink: 0;
    flex-grow: 0;
}
}
</style>
