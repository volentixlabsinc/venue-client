<template>
  <div class="level is-white box">
    <div v-for="stat in data" :key="stat.id" class="level-item">
      <p class="heading">{{ stat.label }}</p>
      <img v-if="stat.trophy" id="trophy" src="/img/svg/trophy2.svg">
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
  props: {
    dataSource: {
      type: String,
      default: "user"
    }
  },
  data() {
    const isAuthenticated = this.$store.state.user.isAuthenticated;
    const data = {
      options: {
        useEasing: true,
        useGrouping: false,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      }
    };
    if (this.dataSource === "user") {
      Object.assign(data, {
        data: [
          {
            label: "MY POSTS",
            value: isAuthenticated
              ? this.$store.state.userStats.profile_level[0].numPosts
              : undefined
          },
          {
            label: "MY POINTS",
            value: isAuthenticated
              ? this.$store.state.userStats.profile_level[0].totalPoints
              : undefined
          }
        ]
      });
    } else if (this.dataSource === "campaign") {
      Object.assign(data, {
        data: [
          {
            label: "PARTICIPANTS",
            value: this.$store.state.leaderboard.sitewide.total_users
          },
          {
            label: "POSTS",
            value: this.$store.state.leaderboard.sitewide.total_posts
          }
        ]
      });
    }
    return data;
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
