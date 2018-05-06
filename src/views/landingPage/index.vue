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
        class="btn btn-sm login">log in</button>
        <button 
        @click="action='signup'"
        :action="action"
        class="btn btn-sm signup">sign up</button>
    </div>
    <div v-if="data" class="card campaigns">
        <h4 class="section-title">Ongoing campaign</h4>
        <p class="available-tokens">{{data.sitewide.available_tokens}} VTX</p>
        <campaigns :rankings="data.rankings" :sitewide="data.sitewide"/>
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
import campaigns from '../../components/campaigns/index.vue'
import { getLeaderBoardData } from '../../service/leaderboard'; 
import { checkForUsername, checkForEmail } from '../../service/account'; 


export default {
  name: 'home',
  data() {
      return {
          action: null,
          data: null,
          newsList: [
        'news 1', 'news 2', 'news 3', 'news 4', 'news 5'
      ]
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
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    flex-grow: 0;
}

.log-in-section-large{
    background-image: linear-gradient(to top,  rgb(48, 49, 64, 0), #303140);    min-height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items:center;
    flex-grow: 1;
}


.campaigns{
    width: 95%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    flex-shrink: 1;
}
.section-title {
    margin: 0px;
    padding: 0px;
}
.available-tokens{
    margin: 0px;
    padding: 0px;
    font-size: 14px;
    color:#85449A;
    text-shadow: 1px 1px 1px black;
}
.presentation-text {width: 90%;}

button {
  width: 70%;
  height: 10%;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid #9B68CD;
  color: rgb(176, 176, 176);
  flex-grow: 0px;
}

.login {
     background-color: #5B4C6C;
     border: 1px solid #9B68CD;
     color: white;
}

.my-news-div {
    display: none;
}

@media only screen and (min-width: 600px) {
.main-section {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; 
    width: 90%;
}


.campaigns .log-in-section .log-in-section-large{
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
}


.card {
    width: 45%;
    min-height:auto;
    flex-shrink: 0;
    flex-grow: 0;
}

.my-news {
  border: rgb(245, 245, 245, 0.3) 1px solid;
  color: black;
  margin-top: 10px;
  width: 300px;
  height: 200px;
  flex: 0 0 auto;
  margin: 10px;
  background-color: #303140;
}
 .my-news-div {
    display: inline;
   height: auto;
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: flex-start;
   flex-wrap: nowrap;
   overflow-x: auto;
  overflow-y: hidden;
   padding-top: 10px;
   padding-bottom: 10px;
    
    scrollbar-face-color: #367CD2;
    scrollbar-shadow-color: #FFFFFF;
    scrollbar-highlight-color: #FFFFFF;
    scrollbar-3dlight-color: #FFFFFF;
    scrollbar-darkshadow-color: #FFFFFF;
    scrollbar-track-color: #FFFFFF;
    scrollbar-arrow-color: #FFFFFF;
}

.my-news-div::-webkit-scrollbar {
    width: 10px;
}

/* Track */
.my-news-div::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px rgba(0,0,0,0.2); 
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2); 
    -webkit-border-radius: 0px;
    border-radius: 0px;
    background-clip: content-box;
}
 
/* Handle */
.my-news-div::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 25px rgba(0,0,0,0.3); 
}
}
</style>
