<template>
  <div>
    <topSection/>
    <div class="section">
      <h3 class="subtitle is-5" @click="onClickLeaderboard">LEADERBOARD <i class="fas fa-chevron-right"/></h3>
      <leaderboard :shortened-leaderboard="true" />
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
import leaderboard from "~/components/leaderboard/index.vue";
import topSection from "~/components/rightPanelTopSection.vue";

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
