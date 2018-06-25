<template>
  <div class="leaderboard">
    <table v-for="(elements, key) in rankings" :key="key">
      <short-leaderboard-entry v-if="shortenedLeaderboard" :elements="elements" :sitewide="sitewide" :my-rank="myRank"/>
      <leaderboard-entry v-else :elements="elements" :sitewide="sitewide" :my-rank="myRank"/> 
    </table>
  </div>
</template>

<script>
import LeaderboardEntry from "./LeaderboardEntry";
import ShortLeaderboardEntry from "./ShortLeaderboardEntry";

export default {
  components: {
    LeaderboardEntry,
    ShortLeaderboardEntry
  },
  props: {
    shortenedLeaderboard: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: -1
    }
  },
  data() {
    let rankings = this.$store.state.leaderboard.rankings;
    if (rankings && this.limit >= 0) {
      // TODO Remove the users around the current user
      rankings = rankings.slice(0, this.limit);
    }

    return {
      rankings,
      sitewide: this.$store.state.leaderboard.sitewide,
      myRank: this.$store.state.userStats.user_level
        ? this.$store.state.userStats.user_level.overall_rank
        : 0
    };
  }
};
</script>
