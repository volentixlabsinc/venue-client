<template>
  <div>
    <h2 class="title">BITCOINTALK CAMPAIGN</h2>
    <Stats :data="stats" />
    <div>
      <div class="is-size-3 has-text-centered">{{ availableTokens }} VTX</div>
      <div class="is-size-5 has-text-centered"><span class="icon"><i class="fas fa-star" style="color:#fbc02d"/></span>AVAILABLE REWARDS</div>
    </div>
    <div class="section">
      <h3 class="subtitle is-5" @click="onClickLeaderboard">LEADERBOARD <i class="fas fa-chevron-right"/></h3>
      <leaderboard :shortened-leaderboard="true" />
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";

import leaderboard from "~/components/leaderboard/index.vue";
import Stats from "~/components/Stats.vue";

export default {
  components: {
    ICountUp,
    leaderboard,
    Stats
  },
  data() {
    return {
      stats: [
        {
          label: "PARTICIPANTS",
          value: this.$store.state.leaderboard.sitewide.total_users
        },
        {
          label: "TOTAL POSTS",
          value: this.$store.state.leaderboard.sitewide.total_posts
        }
      ],

      availableTokens: this.$store.state.leaderboard.sitewide.available_tokens,
      options: {
        useEasing: true,
        useGrouping: false,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      }
    };
  },
  methods: {
    onClickLeaderboard() {
      this.$router.push("/leaderboard");
    }
  }
};
</script>
