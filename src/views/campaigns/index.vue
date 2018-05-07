<template>
  <div class="main-section">
      <h1>Campaign</h1>
      <div class="card summary">
          <h2>Forum Activity</h2>
          <p>{{this.myRanking}}</p>
          <p>{{this.totalUsers}}</p>
          <p>{{this.totalPosts}}</p>
          <p>{{this.myActivity}}</p>
         
      </div>
      <div class="card forum">
          <h2>Forum Activity</h2>
          <forum-activity :chart-data="datacollection"   />
          <forum-activity :chart-data="datacollection" :option="myoption"  />
      </div>
      <div class="card leaderboard">
           <h2>Leaderboard</h2>
          <campaigns v-if="data.rankings" :rankings="data.rankings" :sitewide="data.sitewide"/>
      </div>
  </div>
</template>

<script>
import forumActivity from '../../components/forumActivity/forumStats.js';
import campaigns from '../../components/campaigns/index.vue';
import { getLeaderBoardData } from '../../service/leaderboard'; 



export default {
  data() {
      return {
          data: {},
          datacollection:{},
          myRanking:'',
          totalUsers:'',
          totalPosts: '',
          myActivity: '',
      }
  },
mounted(){
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
      fillData () {
          let labels = [];
          let data = [];
          let backgroundColor = [];

          for (var i =0; i < this.data.forumstats.posts.length; i++){
            labels.push(this.data.forumstats.posts[i].forumSite);
            data.push(this.data.forumstats.posts[i].value);
            backgroundColor.push(this.data.forumstats.posts[i].color);
          }

        this.datacollection = {
            labels:labels,
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
      },
      
    },
  components: {
    campaigns,
    forumActivity
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
     justify-content: center;
      align-items: flex-start;
}
 .card {
    width: 80% ;
    height: auto;
    padding: 20px;
}
h1{
    width: 100%;
}
.summary {
    width: 30% ;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

 .forum {
    width: 50% ;
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