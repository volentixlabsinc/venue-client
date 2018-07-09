<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">LEADERBOARD</div>
      <a class="card-header-icon" @click="onClickLeaderboard">
        <span class="icon"><i class="fas fa-chevron-right"/></span>
      </a>
    </header>
    <!-- TODO Determine the limit based on screen size -->
    <Leaderboard :limit="limit" :paginated="paginated" :per-page="perPage" class="card-content"/>
  </div> 
</template>

<script>
import Leaderboard from "~/components/Leaderboard.vue";

export default {
  components: {
    Leaderboard
  },
  props: {
    paginated: {
      type: Boolean,
      default: true
    },
    limit: {
      type: Number,
      default: undefined
    },
    perPage: {
      type: Number,
      default: 5
    }
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
