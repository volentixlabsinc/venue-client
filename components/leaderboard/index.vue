<template>
  <div class=" leaderboard">
    <table v-for="(elements, key) in rankings" :key="key">
      <short-leaderboard-entry v-if="shortenedLeaderboard" :elements="elements" :sitewide="sitewide" :my-rank="myRank"/>
      <leaderboard-entry v-else :elements="elements" :sitewide="sitewide" :my-rank="myRank"/> 
    </table>
  </div>
</template>

<script>
import leaderboardEntry from "./leaderboardEntry";
import shortLeaderboardEntry from "./shortLeaderboardEntry";

export default {
  components: {
    leaderboardEntry,
    shortLeaderboardEntry
  },
  props: {
    shortenedLeaderboard: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      rankings: this.$store.state.leaderboard.rankings,
      sitewide: this.$store.state.leaderboard.sitewide,
      myRank: this.$store.state.userStats.user_level
        ? this.$store.state.userStats.user_level.overall_rank
        : 0
    };
  }
};
</script>


<style scoped>
.leaderboard {
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
  scrollbar-face-color: #367cd2;
  scrollbar-shadow-color: #ffffff;
  scrollbar-highlight-color: #ffffff;
  scrollbar-3dlight-color: #ffffff;
  scrollbar-darkshadow-color: #ffffff;
  scrollbar-track-color: #ffffff;
  scrollbar-arrow-color: #ffffff;
}

.leaderboard::-webkit-scrollbar {
  width: 0px;
}

/* Track */
.leaderboard::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
  -webkit-border-radius: 0px;
  border-radius: 0px;
  background-clip: content-box;
}

/* Handle */
.leaderboard::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.3);
}

table {
  width: 100%;
  display: table;
  border-spacing: 0px;
  text-align: left;
}
</style>
