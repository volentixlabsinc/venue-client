<template>
    <div class="main-section">
      <div class="card my-campaign">
        <h4>My Campaign</h4>
      </div>
      <div class="card my-campaign">
        <h4>Forum Activity</h4>
      </div>
      <div class="card my-campaign">
        <h4>All Campaigns</h4>
      </div>
       <div class="card my-news-div">
      <div v-for= "news in newsList" :key="news" class="card my-news">
      <h2>{{news}}</h2>
      </div>
      </div>
      </div>
</template>

<script>
import {retrieveStats } from '../../service/dashboard';
import {retrieveNotifications } from '../../service/notifications';
import {retrieveUser } from '../../service/account';


export default {

  name: 'dashboard',
  data () {
    return {
      newsList: [
        'news 1', 'news 2', 'news 3', 'news 4', 'news 5'
      ]
    }
  },
  mounted(){
    retrieveStats(); 
    retrieveNotifications();
    retrieveUser(); 
  }

}
</script>

<style scoped>
.main-section {
  width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    flex-wrap: wrap;
}

.my-campaign{
  min-height:40%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: none;
  background-color: #303140;
}

.card {
  box-shadow: none;
}
.my-news {
  border: rgb(245, 245, 245, 0.3) 1px solid;
  color: black;
  margin-top: 10px;
  width: 30%;
  height: 75%;
  flex: 0 0 auto;
  margin: 10px;
  background-color: #303140;
}
 .my-news-div {
   height: 40%;
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

@media only screen and (min-width: 800px) {
  
}
</style>

