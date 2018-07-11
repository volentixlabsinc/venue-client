<template>
  <div>
    <span v-if="(isAuthenticated() && hasCampaignData())">
      <NavigationLink name="DASHBOARD" route="/dashboard" icon="fa-tachometer-alt" @click="$emit('click')"/>
    </span>
    <span v-if="(isAuthenticated() && !hasCampaignData())">
      <NavigationLink name="JOIN CAMPAIGN" route="/onboarding/bitcointalk" icon="fa-signature" @click="$emit('click')"/>
    </span>
    <span>
      <NavigationLink name="LEADERBOARD" route="/leaderboard" icon="fa-rocket" @click="$emit('click')"/>
    </span>
    <span v-if="isAuthenticated()">
      <NavigationLink name="MY PROFILE" route="/profile" icon="fa-user" @click="$emit('click')"/>
    </span>
    <span v-if="!isAuthenticated()">
      <NavigationLink name="LOG IN" route="/login" icon="fa-sign-in-alt" @click="$emit('click')" />
    </span>
    <span v-if="!isAuthenticated()">
      <NavigationLink name="SIGN UP" route="/signup" icon="fa-user-plus" @click="$emit('click')" />
    </span>
    <span v-if="isAuthenticated()">
      <NavigationLink name="LOG OUT" route="/logout" icon="fa-sign-out-alt" @click="$emit('click')" />
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
