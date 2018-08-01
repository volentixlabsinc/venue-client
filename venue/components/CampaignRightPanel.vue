<template>
  <div :class="[columns ? columnsLayout[0]: rowsLayout]">
    <CampaignInfoCard :class="[columns ? columnsLayout[1]: rowsLayout]" :columns="columns"/>
    <LeaderboardCard class="m-t-lg"/>
  </div>
</template>

<script>
import LeaderboardCard from "~/components/LeaderboardCard.vue";
import CampaignInfoCard from "~/components/CampaignInfoCard.vue";

export default {
  components: {
    CampaignInfoCard,
    LeaderboardCard
  },
  props: {
    columns: {
      type: Boolean,
      default: false
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
