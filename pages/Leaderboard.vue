<template>
  <TwoColumnLayout>
    <div slot="left">
      <h2 class="title">BITCOINTALK LEADERBOARD</h2>
      <LeaderboardStats v-if="$store.state.leaderboard.sitewide.total_users>0" />
      <leaderboard />
    </div>
    <div slot="right">
      <h2 class="title">MY CAMPAIGN ACTIVITY</h2>
      <forum-chart v-if="isAuthenticated" :width="450" :height="300" class="chart"/>
      <UserStats />
      <LeaderboardMyCurrentRewards />
      <a v-if="isAuthenticated" class="button is-outlined is-fullwidth m-t-lg" @click="onClickSignature">
        <span class="icon"><i class="far fa-edit"/></span><span>Edit signature</span>
      </a>
    </div>
  </TwoColumnLayout>
</template>
  
<script>
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import leaderboard from "~/components/leaderboard/index.vue";
import ForumChart from "~/components/ForumChart.vue";
import UserStats from "~/components/UserStats.vue";
import LeaderboardMyCurrentRewards from "~/components/LeaderboardMyCurrentRewards.vue";
import LeaderboardStats from "~/components/LeaderboardStats.vue";

export default {
  components: {
    TwoColumnLayout,
    leaderboard,
    ForumChart,
    LeaderboardStats,
    UserStats,
    LeaderboardMyCurrentRewards
  },
  data() {
    return {
      isAuthenticated: this.$store.state.user.isAuthenticated
    };
  },
  methods: {
    onClickSignature() {
      this.$router.push("/editSignature");
    }
  }
};
</script>
}
<style scoped>
.chart {
  width: 100%;
  height: 40vh;
}
</style>
