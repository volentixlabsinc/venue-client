<template>
  <TwoColumnLayout>
    <div slot="left">
      <h2 class="title">BITCOINTALK LEADERBOARD</h2>
      <top-stats v-if="$store.state.leaderboard.sitewide.total_users>0" />
      <leaderboard />
    </div>
    <div slot="right">
      <h2 class="title">MY CAMPAIGN ACTIVITY</h2>
      <user-stats />
      <a v-if="$store.state.userStats.profile_level" class="button is-outlined" @click="onClickSignature">
        <span class="icon"><i class="far fa-edit"/></span><span>Edit signature</span>
      </a>
    </div>
  </TwoColumnLayout>
</template>
  
<script>
import ICountUp from "vue-countup-v2";

import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import leaderboard from "~/components/leaderboard/index.vue";
import userStats from "~/components/userStats.vue";
import topStats from "~/components/topStats.vue";

export default {
  components: {
    TwoColumnLayout,
    leaderboard,
    ICountUp,
    userStats,
    topStats
  },
  methods: {
    onClickSignature() {
      this.$router.push("/editSignature");
    }
  }
};
</script>
