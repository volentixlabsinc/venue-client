<template>
  <div class="card">
    <header class="card-header">
      <h2 class="card-header-title subtitle text-transform-uppercase">{{ $t('titles.my_rewards') }}</h2>
    </header>
    <div class="card-content">
      <div class="level">
        <img src="~/assets/VTX-Token-icon-new.png" class="image is-64x64 media-left">
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
      myTokens: 0
    };
    const hasStats =
      this.$store.state.user.isAuthenticated &&
      this.$store.state.userStats.fresh === false;

    if (hasStats) {
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
