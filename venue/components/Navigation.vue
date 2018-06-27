<template>
  <div>
    <span v-if="(isAuthenticated() && hasCampaignData())">
      <NavigationLink name="DASHBOARD" route="/dashboard" icon="fa-tachometer-alt" />
    </span>
    <span v-if="(isAuthenticated() && !hasCampaignData())">
      <NavigationLink name="JOIN CAMPAIGN" route="/onboarding/bitcointalk" icon="fa-signature" />
    </span>
    <span>
      <NavigationLink name="LEADERBOARD" route="/leaderboard" icon="fa-rocket" />
    </span>
    <span v-if="isAuthenticated()">
      <NavigationLink name="MY PROFILE" route="/profile" icon="fa-user" />
    </span>
    <span v-if="!isAuthenticated()">
      <NavigationLink name="LOG IN" route="/login" icon="fa-sign-in-alt" />
    </span>
    <span v-if="!isAuthenticated()">
      <NavigationLink name="SIGN UP" route="/signup" icon="fa-user-plus" />
    </span>
    <span v-if="isAuthenticated()">
      <NavigationLink name="LOG OUT" route="/logout" icon="fa-sign-out-alt" />
    </span>
  </div>
</template>

<script>
import NavigationLink from "~/components/NavigationLink.vue";

export default {
  components: {
    NavigationLink
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
