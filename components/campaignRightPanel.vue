<template>
  <div :class="[columns ? columnsLayout[0]: rowsLayout]">
    <topSection :class="[columns ? columnsLayout[1]: rowsLayout]" :columns="columns"/>
    <div :class="[columns ? columnsLayout[2]: rowsLayout]" class="section">
      <div class="is-size-4" @click="onClickLeaderboard">LEADERBOARD <i class="fas fa-chevron-right"/></div>
      <!-- TODO Determine the limit based on screen size -->
      <leaderboard :shortened-leaderboard="true" :limit="limit"/>
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
  props: {
    columns: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 8
    }
  },
  data() {
    return {
      columnsLayout: [
        "columns reverse-row-order",
        "column is-4",
        "column is-7"
      ],
      rowsLayout: ""
    };
  },
  methods: {
    onClickLeaderboard() {
      this.$router.push("/leaderboard");
    }
  }
};
</script>

<style>
.reverse-row-order {
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
}
</style>
