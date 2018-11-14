<template>
  <div>
    <div class="level is-marginless">
      <span class="level-left is-size-5 text-transform-uppercase">{{ $t('labels.my_current_rewards') }}</span>
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
      isAuthenticated: this.$auth.loggedIn,
      bonus: 0
    };

    const hasStats =
      this.$auth.loggedIn && this.$store.state.userStats.fresh === false;

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
      this.$router.push(
        this.localizedRoute("/PointsDetails", this.$i18n.locale)
      );
    }
  }
};
</script>
