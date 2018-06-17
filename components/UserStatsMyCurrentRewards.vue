<template>
  <div>
    <div class="is-size-3 has-text-centered">
      <span v-if="isAuthenticated" class="is-size-3 has-text-centered">{{ myTokens }}</span>
      <span v-else>N/A</span> VTX
    </div>
    <span v-if="bonus > 0" style="width:100%; margin:5px">{{ forumUserRank }} Bonus: {{ bonus }} (included)</span>
    <div class="is-size-5 has-text-centered"><span class="icon"><i class="fas fa-star" style="color:#fbc02d"/></span>  MY CURRENT REWARDS</div>
    <div v-if="isAuthenticated" class="view-details">
      <a class="button is-info is-outlined" @click="onClickDetails">
        <span>View details</span><span class="icon"><i class="fas fa-search"/></span>
      </a>
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
    if (this.$store.state.user.isAuthenticated) {
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
