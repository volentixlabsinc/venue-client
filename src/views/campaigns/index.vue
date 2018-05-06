<template>
  <div class="main-section">
      <div class="card">
          <h1>Campaign</h1>
          <campaigns :rankings="data.rankings" :sitewide="data.sitewide"/>
      </div>
  </div>
</template>

<script>
import campaigns from '../../components/campaigns/index.vue';
import { getLeaderBoardData } from '../../service/leaderboard'; 


export default {
  data() {
      return {
          data: null,
      }
  },
mounted(){
    getLeaderBoardData()
      .then(response => {
          console.log('response: ', response);
          this.data = response;
      })
      .catch(ex => {
        console.error(ex);
      });
  },
  components: {
    campaigns
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
}

campaigns {
    height: 100% !important;
}
</style>