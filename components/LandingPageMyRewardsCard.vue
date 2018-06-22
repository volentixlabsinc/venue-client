<template>
  <div class="card">
    <header class="card-header">
      <h2 class="card-header-title subtitle">MY REWARDS</h2>
    </header>
    <div class="card-content">
      <div class="level">
        <img src="~/static/img/logos/VTX-Token-icon-new.png" class="image is-64x64 media-left">
        <span class="is-size-3">{{ myTokens }} VTX</span>
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
        ).format()
      });
    }
    return data;
  }
};
</script>
