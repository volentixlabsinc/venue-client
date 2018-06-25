<template>
  <div id="navigation">
    <nav class="menu p-md">
      <ul>
        <li v-if="(isAuthenticated() && hasCampaignData())">
          <nav-link name="DASHBOARD" route="/dashboard" icon="fas fa-tachometer-alt prefix" />
        </li>
        <li v-if="(isAuthenticated() && !hasCampaignData())">
          <nav-link name="JOIN CAMPAIGN" route="/onboarding/bitcointalk" icon="fas fa-signature prefix" />
        </li>
        <li>
          <nav-link name="LEADERBOARD" route="/leaderboard" icon="fas fa-rocket prefix" />
        </li>
        <li v-if="isAuthenticated()">
          <nav-link name="MY PROFILE" route="/profile" icon="far fa-user prefix" />
        </li>
        <li v-if="!isAuthenticated()">
          <nav-link name="LOG IN" route="/login" icon="fas fa-sign-in-alt prefix" />
        </li>
        <li v-if="!isAuthenticated()">
          <nav-link name="SIGN UP" route="/signup" icon="fas fa-user-plus prefix" />
        </li>
        <li v-if="isAuthenticated()">
          <nav-link name="LOG OUT" route="/logout" icon="fas fa-sign-out-alt prefix" />
        </li>
      </ul>
    </nav>
    <div class="has-text-centered">
      <a target="_blank" href="https://twitter.com/Volentix">
        <span class="icon m-md"><i class="fab fa-twitter fa-2x"/></span>
      </a>
      <a target="_blank" href="https://medium.com/@marketing_33515">
        <span class="icon m-md"><i class="fab fa-medium fa-2x"/></span>
      </a>
      <a target="_blank" href="https://t.me/volentix">
        <span class="icon m-md"><i class="fab fa-telegram fa-2x"/></span>
      </a>
    </div>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  components: {
    NavLink
  },
  methods: {
    isAuthenticated() {
      return this.$store.state.user.isAuthenticated;
    },
    hasCampaignData() {
      return this.$store.state.userStats.hasCampaignData;
    }
  }
};
</script>

<style scoped lang="scss">
#navigation {
  background-color: #e6d9ea;
  height: 100vh;
}

a:hover {
  color: #42214d;
}
</style>
