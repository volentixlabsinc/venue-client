<template>
  <div>
    <topSection/>
    <div class="section">
      <div class="is-size-4" @click="onClickLeaderboard">LEADERBOARD <i class="fas fa-chevron-right"/></div>
      <!-- TODO Determine the limit based on screen size -->
      <leaderboard :shortened-leaderboard="true" limit="8"/>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
import leaderboard from "~/components/leaderboard/index.vue";
import topSection from "~/components/CampaignRightPanelTopSection.vue";

export default {
  components: {
    ICountUp,
    leaderboard,
    topSection
  },

  methods: {
    onClickLeaderboard() {
      this.$router.push("/leaderboard");
    }
  }
};
</script>
