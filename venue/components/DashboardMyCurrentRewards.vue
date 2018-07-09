<template>
  <div>
    <div class="level is-marginless">
      <span class="level-left is-size-5">MY CURRENT REWARDS</span>
      <div class="level-right">
        <span class="is-size-3">{{ myTokens }} VTX</span>
        <a class="button is-info is-outlined" @click="onClickDetails">
          <span class="icon p-l-sm"><i class="fas fa-info-circle"/></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import numeral from "numeral";

export default {
  data() {
    const data = {
      isAuthenticated: this.$store.state.user.isAuthenticated,
      bonus: 0
    };

    const hasStats =
      this.$store.state.user.isAuthenticated &&
      this.$store.state.userStats.fresh === false;

    if (hasStats) {
      Object.assign(data, {
        myTokens: numeral(
          this.$store.state.userStats.profile_level[0].VTX_Tokens
        ).format(),
        forumUserRank: this.$store.state.userStats.profile_level[0]
          .forumUserRank
      });
    }
    return data;
  },
  methods: {
    onClickDetails() {
      this.$router.push("/PointsDetails");
    }
  }
};
</script>
