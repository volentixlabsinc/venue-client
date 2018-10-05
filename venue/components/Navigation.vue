<template>
  <div>
    <span v-if="(isAuthenticated() && hasCampaignData())">
      <NavigationLink :name="$t('nav.dashboard')" route="/dashboard" icon="fa-tachometer-alt" @click="$emit('click')"/>
    </span>
    <span v-if="(isAuthenticated() && !hasCampaignData())">
      <NavigationLink :name="$t('nav.join_campaign')" route="/onboarding/bitcointalk" icon="fa-signature" @click="$emit('click')"/>
    </span>
    <span>
      <NavigationLink :name="$t('nav.leaderboard')" route="/leaderboard" icon="fa-rocket" @click="$emit('click')"/>
    </span>
    <span v-if="isAuthenticated()">
      <NavigationLink :name="$t('nav.my_profile')" route="/profile" icon="fa-user" @click="$emit('click')"/>
    </span>
    <span v-if="!isAuthenticated()">
      <NavigationLink :name="$t('nav.log_in')" route="/login" icon="fa-sign-in-alt" @click="$emit('click')" />
    </span>
    <span v-if="!isAuthenticated()">
      <NavigationLink :name="$t('nav.sign_up')" route="/signup" icon="fa-user-plus" @click="$emit('click')" />
    </span>
    <span v-if="isAuthenticated()">
      <NavigationLink :name="$t('nav.invite_friend')" route="/invitefriend" icon="fa-gift" @click="$emit('click')" />
    </span>
    <span v-if="isAuthenticated()">
      <NavigationLink :name="$t('nav.log_out')" route="/logout" icon="fa-sign-out-alt" @click="$emit('click')" />
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

<style scoped>
.navheader {
  color: #98a5ae;
}
</style>
