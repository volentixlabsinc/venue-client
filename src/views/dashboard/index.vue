<template>
    <div class="main-section">
      <div class="card my-campaign">
         <h4 v-if="data">{{data.rankings[0].rank}}</h4>
         <h4 v-if="data">{{data.rankings[0].username}}</h4>
         <h4 v-if="data">{{data.rankings[0].total_posts}}</h4>
         <h4 v-if="data">{{data.rankings[0].total_tokens}}</h4>
      </div>
      <div class=" my-activity">
        <div class="forum forum1">
          <h4>Forum 1 Activity</h4>
        </div>
        <div class="forum forum2">
          <h4>Forum 2 Activity</h4>
        </div>
      </div>
      <div class="card all-campaigns">
        <h4>All Campaigns</h4>
      </div>
      </div>
</template>

<script>
import {retrieveStats } from '../../service/dashboard';
import {retrieveNotifications } from '../../service/notifications';
import {retrieveUser } from '../../service/account';
import { getLeaderBoardData } from '../../service/leaderboard'; 


export default {

  name: 'dashboard',
  data () {
    return {
      newsList: [
        'news 1', 'news 2', 'news 3', 'news 4', 'news 5'
      ],
      data:null,
    }
  },
  mounted(){
    retrieveStats(); 
    retrieveNotifications();
    retrieveUser(); 
  
    getLeaderBoardData()
      .then(response => {
          this.data = response;
          console.log('this.data: ', this.data);
      })
      .catch(ex => {
        console.error(ex);
      });
  },

}
</script>

<style scoped>

.main-section {
  width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: white;
    flex-wrap: no-wrap;   
}


.my-campaign{
 padding-top: 10%;
}

.card {
  box-shadow: none;
  min-height:27%;
  width: 100%;
  background-color: #303140;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #303140;

}
.forum {
  border: rgb(245, 245, 245, 0.3) 1px solid;
  color: black;
  width: 100%;
  height: 100%;
  flex: 0 0 auto;
  margin: 0px;
  background-color: gray;
}
 .my-activity {
   height: 200px;
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
   flex-wrap: nowrap;
   overflow-x: auto;
  overflow-y: hidden;
    
    scrollbar-face-color: #367CD2;
    scrollbar-shadow-color: #FFFFFF;
    scrollbar-highlight-color: #FFFFFF;
    scrollbar-3dlight-color: #FFFFFF;
    scrollbar-darkshadow-color: #FFFFFF;
    scrollbar-track-color: #FFFFFF;
    scrollbar-arrow-color: #FFFFFF;
}

.my-activity::-webkit-scrollbar {
    width: 5px;
}

/* Track */
.my-activity::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px rgba(0,0,0,0.2); 
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2); 
    -webkit-border-radius: 0px;
    border-radius: 0px;
    background-clip: content-box;
}
 
/* Handle */
.my-activity::-webkit-scrollbar-thumb {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 25px rgba(0,0,0,0.3); 
}


@media only screen and (min-width: 600px) {

.main-section {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    flex-wrap: wrap;
}
.card {
  height:49%;
  width: 49%;
}
.my-campaign{
  order:1;
  padding-top: 0px;
}
.all-campaigns{
  order:2
}
.my-activity{
  order:3;
   height: 49%;
   justify-content: space-between;
}

.forum {
  width: 49%;
  height: 100%;
  flex: 0 0 auto;
  margin: 0px;
  background-color: gray;
}

}

</style>

