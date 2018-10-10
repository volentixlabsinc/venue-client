<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">{{ $t('titles.bitcointalk_signature_campaign') }}</div>
      <a class="card-header-icon has-text-light" @click="onClickLeaderboard">
        <span class="icon"><i class="fas fa-chevron-right"/></span>
      </a>
    </header>
    <!-- TODO Determine the limit based on screen size -->
    <Leaderboard :limit="limit" :paginated="paginated" :per-page="perPage" 
                 :detailed="detailed" class="card-content"/>
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
    },
    detailed: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClickLeaderboard() {
      this.$router.push(this.localizedRoute("/leaderboard", this.$i18n.locale));
    }
  }
};
</script>
