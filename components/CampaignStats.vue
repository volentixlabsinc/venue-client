<template>
  <div class="level is-white box">
    <div v-for="stat in data" :key="stat.id" class="level-item">
      <p class="heading">{{ stat.label }}</p>
      <h1 class="title is-1">
        <ICountUp
          v-if="stat.value !== undefined"
          :start-val="stat.startAt || 0"
          :end-val="stat.value"
          :duration="2.5"
          :options="options"
      /><span v-else>N/A</span></h1>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";

export default {
  components: {
    ICountUp
  },
  data() {
    const isAuthenticated = this.$store.state.user.isAuthenticated;
    return {
      data: [
        {
          label: "PARTICIPANTS",
          value: isAuthenticated
            ? this.$store.state.leaderboard.sitewide.total_users
            : undefined
        },
        {
          label: "POSTS",
          value: isAuthenticated
            ? this.$store.state.leaderboard.sitewide.total_posts
            : undefined
        }
      ],
      options: {
        useEasing: true,
        useGrouping: false,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      }
    };
  },
  mounted() {
    console.log(" this.$store.state", this.$store.state);
  }
};
</script>

<style>
.level-item {
  flex-direction: column;
}

#trophy {
  height: 50px;
  transform: rotate(-10deg);
  margin: -50px 100px 0 -25px;
}
</style>
