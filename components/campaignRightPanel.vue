<template>
  <div>
    <h2 class="title">BITCOINTALK CAMPAIGN</h2>
    <div class="campaigns-numbers-container" @click="onClickLeaderboard">
      <div class="campaigns-number-card">
        <h1 class="dashboard-numbers"><ICountUp
          :start-val="0"
          :end-val="totalUsers"
          :decimals="0"
          :duration="2.5"
          :options="options"
        /></h1>
        <h4 class="info-subtitles">PARTICIPANTS</h4>
      </div>
      <div class="campaigns-number-card">
        <h1 class="dashboard-numbers">
          <ICountUp
            :start-val="0"
            :end-val="totalPosts"
            :decimals="0"
            :duration="2.5"
            :options="options"
        /></h1>
        <h4 class="info-subtitles">TOTAL POSTS</h4>
      </div>
    </div>
    <div>
      <div class="is-size-3 has-text-centered">{{ availableTokens }} VTX</div>
      <div class="is-size-5 has-text-centered"><span class="icon"><i class="fas fa-star" style="color:#fbc02d"/></span>AVAILABLE REWARDS</div>
    </div>
    <div class="section">
      <h3 class="subtitle is-5" @click="onClickLeaderboard">LEADERBOARD <i class="fas fa-chevron-right"/></h3>
      <leaderboard :shortened-leaderboard="true" />
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
import leaderboard from "~/components/leaderboard/index.vue";
export default {
  components: {
    ICountUp,
    leaderboard
  },
  data() {
    return {
      totalUsers: this.$store.state.leaderboard.sitewide.total_users,
      totalPosts: this.$store.state.leaderboard.sitewide.total_posts,
      availableTokens: this.$store.state.leaderboard.sitewide.available_tokens,
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
  methods: {
    onClickLeaderboard() {
      this.$router.push("/leaderboard");
    }
  }
};
</script>

<style scoped>
.all-campaigns {
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding-top: 10px;
  padding-bottom: 30px;
  margin-bottom: 10%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), #494b5e);
}

.all-campaigns:hover {
  cursor: pointer;
}
.leaderboard-container {
  display: none;
}

.campaigns-numbers-container {
  display: flex;
  flex-direction: row;
}

.campaigns-number-card {
  width: 50%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 1px;
  background-color: rgba(252, 248, 248, 0.05);
  border-radius: 3px;
  padding: 2px;
}
.dashboard-numbers {
  color: rgba(255, 255, 255, 0.541);
  width: 100%;
  font-weight: bolder;
  font-size: 50px;
  padding: 0px;
  padding-top: 5px;
  margin: 0px;
  line-height: 1;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  text-shadow: 2px 2px 2px black;
}
</style>
