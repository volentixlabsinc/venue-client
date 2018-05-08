<template>
  <div class="main-section">
      <h1>Campaign</h1>
      <div class="top-left-panel">
      <div class="card summary">
           <h2>Overall stats</h2>
          <p>my position: {{this.myRanking}}</p>
          <p>total users: {{this.totalUsers}}</p>
          <p>total posts: {{this.totalPosts}}</p>
          <p>my posts: {{this.myActivity}}</p>
         
      </div>
      <div class="card forum">
          <h2>Forum Activity</h2>
          <forum-activity-posts :chart-data="datacollectionPosts"   />
          <forum-activity-users :chart-data="datacollectionUsers"  />
      </div>
      </div>
      <div class="card leaderboard">
           <h2>Leaderboard</h2>
          <campaigns v-if="data.rankings" :rankings="data.rankings" :sitewide="data.sitewide" :username="user.username"/>
      </div>
  </div>
</template>

<script>
import forumActivityPosts from '../../components/forumActivity/forumStatsPosts.js';
import forumActivityUsers from '../../components/forumActivity/forumStatsUsers.js';
import campaigns from '../../components/campaigns/index.vue';
import { getLeaderBoardData } from '../../service/leaderboard'; 
import {retrieveStats } from '../../service/dashboard';
import {retrieveUser } from '../../service/account';



export default {
  data() {
      return {
          data: {},
          datacollectionPosts:{},
          datacollectionUsers:{},
          user: {},
          userStats: {},
          campaignStats: {},
          myRanking:'',
          totalUsers:'',
          totalPosts: '',
          myActivity: '',
      }
  },
mounted(){
    retrieveUser()
    .then(response => {
        this.user = response
    });
    retrieveStats()
    .then(response => {
        this.userStats = response.stats.user_level;
        this.campaignStats = response.stats.sitewide;
    })
    .then( response => {
        this.populateUserData()
        });
    getLeaderBoardData()
      .then(response => {
          this.data = response;
        //   this.forumstatsPosts = response.forumstats.posts
          console.log('response: ', response);
      })
      .catch(ex => {
        console.error(ex);
      })
      .then(response => {
        this.fillData()
        })
    },
    methods: {
    populateUserData() {
        this.myRanking = this.userStats.overall_rank;
        this.totalUsers =  this.campaignStats.total_users;
        this.totalPosts =  this.campaignStats.total_posts;
        this.myActivity =  this.userStats.total_posts;

        },
      fillData () {
          let labels = [];
          let data = [];
          let backgroundColor = [];

          for (var i =0; i < this.data.forumstats.posts.length; i++){
            labels.push(this.data.forumstats.posts[i].forumSite);
            data.push(this.data.forumstats.posts[i].value);
            backgroundColor.push(this.data.forumstats.posts[i].color);
          }

        this.datacollectionPosts = {
            // labels:labels,
            datasets: [{
                data:data,
                backgroundColor:backgroundColor,
                borderColor:['#3D4152', '#3D4152'],
                borderWidth: 3,
                title: {
                    display: true,
                    position: 'bottom',
                    text: 'Custom Chart Title'
                }
            }],
           
        }

          let dataUsers = [];
          for (var i =0; i < this.data.forumstats.users.length; i++){
            labels.push(this.data.forumstats.users[i].forumSite);
            dataUsers.push(this.data.forumstats.users[i].value);
            backgroundColor.push(this.data.forumstats.users[i].color);
          }

        this.datacollectionUsers = {
            // labels:labels,
            datasets: [{
                data:dataUsers,
                backgroundColor:backgroundColor,
                borderColor:['#3D4152', '#3D4152'],
                borderWidth: 3,
                title: {
                    display: true,
                    position: 'bottom',
                    text: 'Custom Chart Title'
                }
            }],
           
        }
      },
      
    },
  components: {
    campaigns,
    forumActivityPosts,
    forumActivityUsers
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
  height: 100%;
  margin-bottom: 10px
}

campaigns {
    height: 100% !important;
}

@media only screen and (min-width: 600px) {
.main-section {
    flex-direction: row;
    flex-wrap: wrap;
     justify-content: space-evenly;
      align-items: center;
}
 .leaderboard {
    width: 40% ;
    height: 70%;
    padding: 10px;
}

.top-left-panel {
    width: 40%;
    height: 73%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
}

h1{
    width: 100%;
}
.summary {
    width: 100% ;
    height: 30%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}
.summary h2 {
    width: 100% !important;
}
.summary p {
    width: 50% !important;
}
 .forum {
    width: 100% ;
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}
.forum * {
    width: 50% !important;
}

.forum h2 {
    width: 100% !important;
}
 }
</style>