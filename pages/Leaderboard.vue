<template>
  <TwoColumnLayout>
    <div slot="left">
      <h2 class="title">BITCOINTALK LEADERBOARD</h2>
      <LeaderboardStats v-if="$store.state.leaderboard.sitewide.total_users>0" />
      <leaderboard />
    </div>
    <div slot="right">
      <h2 class="title">MY CAMPAIGN ACTIVITY</h2>
      <user-stats />
      <a v-if="$store.state.user.isAuthenticated" class="button is-outlined is-fullwidth m-t-lg" @click="onClickSignature">
        <span class="icon"><i class="far fa-edit"/></span><span>Edit signature</span>
      </a>
    </div>
  </TwoColumnLayout>
</template>
  
<script>
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import leaderboard from "~/components/leaderboard/index.vue";
import userStats from "~/components/userStats.vue";
import LeaderboardStats from "~/components/LeaderboardStats.vue";

export default {
  components: {
    TwoColumnLayout,
    leaderboard,
    userStats,
    LeaderboardStats
  },
  methods: {
    onClickSignature() {
      this.$router.push("/editSignature");
    }
  }
};
</script>
