<template>
  <div class="box">
    <h1 class="title has-text-centered text-transform-uppercase">{{ $t('points_details.title') }}</h1>
    <hr >
    <div v-show="loaded" class="has-text-centered">
      <h1 v-for="(bonus_level, index) in bonus" :key="index" v-html="postsSitewideText(bonus_level)" />
      <div class="is-size-3 m-md">{{ $t('points_details.points_sitewide').replace("{ count }", totalPoints) }}</div>
      <div class="subtitle" v-html="vtxPerPointText()"/>
            
      <div class="box">
        <div class="is-size-5" v-html="totalPostsText()"/>
        <div class="is-size-5" v-html="totalPointsText()"/>
      </div>

      <div class="has-text-left is-size-6">
        <span class="icon has-text-warning is-medium">
          <i class="fas fa-exclamation-triangle fa-lg"/>
        </span>
        {{ $t('messages.signature_warning_1') }}
        <strong>{{ $t('messages.signature_warning_2') }}</strong>{{ $t('messages.signature_warning_3') }}
      </div>
    </div>
  </div>
</template>

<script>
import numeral from "numeral";

export default {
  data() {
    const data = {
      totalPostPoints: 0,
      totalBonusPoints: 0,
      totalPoints: 0,
      vtxPerPoint: 0,
      myPoints: 0,
      myVTX: 0,
      multiplier: 0,
      totalPosts: 0,
      position: "",
      bonus: 0,
      myTokens: -1,
      availableTokens: -1,
      loaded: false
    };
    const hasStats =
      this.$store.state.user.isAuthenticated &&
      this.$store.state.userStats.fresh === false;

    if (hasStats) {
      Object.assign(data, {
        myTokens: numeral(
          this.$store.state.userStats.profile_level[0].VTX_Tokens
        ).format(),
        availableTokens: numeral(
          this.$store.state.leaderboard.sitewide.available_tokens
        ).format()
      });
    }
    return data;
  },
  mounted() {
    this.fetchPointsBreakDown();
  },
  methods: {
    async fetchPointsBreakDown() {
      const pointsBreakdown = await this.$axios.$get(
        "/retrieve/points-breakdown/"
      );
      let availableRewardsNumber = parseFloat(
        this.availableTokens.replace(",", "")
      );
      this.multiplier = pointsBreakdown.settings.post_points_multiplier;
      this.totalPostPoints = pointsBreakdown.sitewide_stats.total_post_points;
      this.totalBonusPoints = pointsBreakdown.sitewide_stats.total_bonus_points;
      this.totalPointsNum = this.totalPostPoints + this.totalBonusPoints;
      this.totalPoints = numeral(this.totalPointsNum).format();
      this.totalPosts = pointsBreakdown.sitewide_stats.total_posts;
      this.vtxPerPoint = (availableRewardsNumber / this.totalPointsNum).toFixed(
        2
      );
      this.myPoints = pointsBreakdown.user_stats.total_post_points;
      this.bonus = pointsBreakdown.sitewide_stats.bonus_points;
      this.loaded = true;
    },
    postsSitewideText(bonus_level) {
      return this.$t("points_details.posts_sitewide_text")
        .replace("{ num_posts }", bonus_level.num_posts)
        .replace("{ bonus_percentage }", 100 + bonus_level.bonus_percentage)
        .replace(
          "{ total_points }",
          bonus_level.num_posts * (100 + bonus_level.bonus_percentage)
        );
    },
    vtxPerPointText() {
      return this.$t("points_details.vtx_per_point_text")
        .replace("{ availableTokens }", this.availableTokens)
        .replace("{ totalPoints }", 100 + this.totalPoints)
        .replace("{ vtxPerPoint }", 100 + this.vtxPerPoint);
    },
    totalPostsText() {
      return this.$t("points_details.total_posts_text")
        .replace("{ multiplier }", this.multiplier)
        .replace("{ myPoints }", this.myPoints);
    },
    totalPointsText() {
      return this.$t("points_details.total_points_text")
        .replace("{ vtxPerPoint }", this.vtxPerPoint)
        .replace("{ myTokens }", this.myTokens);
    }
  }
};
</script>

<style scoped>
div.box div.box {
  background-color: #e0e5e9;
}
</style>
