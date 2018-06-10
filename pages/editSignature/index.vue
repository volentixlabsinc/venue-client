<template>
  <main class="main">
    <div class="container">
      <h3>CURRENT SIGNATURE</h3>
      <!-- <img :src="currentSignatureImg" /> -->
      <h2>AVAILABLE BITCOIN SIGNATURES</h2>
      <AvailableSignatures />
    </div>
    <div class="right-panel">
    <campaignRightPanel />
    </div>  
  </main>
</template>

<script>
  import AvailableSignatures from "~/components/AvailableSignatures.vue"
  import campaignRightPanel from "~/components/campaignRightPanel.vue";
  import axios from 'axios'

  export default {
    components: {
      AvailableSignatures,
      campaignRightPanel
    },
  async fetch ({ store }) {
    // TODO Merge copied code between dashboard & leaderboard
      const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token aa931858af5571bd2daf1836a3a9cc9177668c90'
      }

      const { data: leaderboardData } = await axios.get('http://localhost:8000/api/retrieve/leaderboard-data/', { headers })
      const { data: userStats } = await axios.get('http://localhost:8000/api/retrieve/stats/', { headers })

      store.commit('setLeaderboardData', leaderboardData)
      store.commit('setUserStats', userStats.stats)
  },
  }
</script>

<style scoped>

h2 {
  text-align: left;
}

h3 {
  text-align: left;
}

.main {
    display: flex;
    flex-direction: row;
    width: 100%;
    color: white;
    align-items: center;
}
.container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align:inherit;
}

.right-panel{
  width: 50%;
}
</style>
