<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">LEADERBOARD</div>
      <a class="card-header-icon" @click="onClickLeaderboard">
        <span class="icon"><i class="fas fa-chevron-right"/></span>
      </a>
    </header>
    <!-- TODO Determine the limit based on screen size -->
    <Leaderboard :shortened-leaderboard="true" :limit="7" class="card-content"/>
  </div> 
</template>

<script>
import Leaderboard from "~/components/leaderboard/index.vue";

export default {
  components: {
    Leaderboard
  },
  methods: {
    onClickLeaderboard() {
      this.$router.push("/leaderboard");
    }
  }
};
</script>

<style scoped>
a:hover {
  color: grey;
}
</style>
