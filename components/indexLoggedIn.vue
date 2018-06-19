<template>
  <div class="card ">
    <header class="card-header ">
      <h1 class="title ">MY REWARDS</h1>
    </header>
    <div class="card-content">
      <div class=" level">
        <img src="~/static/img/logos/VTX-Token-icon-new.png" class="image is-64x64 media-right">
        <h1 class="title">{{ myTokens }} VTX</h1>
      </div>
      <div class="level">
        <h1 class="title">POINTS</h1>
        <h1 class="title">{{ userPoints }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import numeral from "numeral";

export default {
  data() {
    const data = {
      isAuthenticated: this.$store.state.user.isAuthenticated
    };
    if (this.$store.state.user.isAuthenticated) {
      Object.assign(data, {
        myTokens: numeral(
          this.$store.state.userStats.profile_level[0].VTX_Tokens
        ).format(),
        userPoints: this.$store.state.userStats.user_level.total_points
      });
    }
    return data;
  }
};
</script>
