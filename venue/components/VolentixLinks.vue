<template>
  <div>
    <div class="navheader is-size-6 m-l-md m-b-sm">{{ $t("nav.volentix_pages") }}</div>
    <ul>
      <li><a target="_blank" href="https://venue.ninja/rules/">{{ $t("nav.rules") }}</a></li>
      <li><a target="_blank" href="https://valoro.io/">{{ $t("nav.valoro") }}</a></li>
      <li><a target="_blank" href="https://venue.ninja/telegram-campaign-rules/">{{ $t("nav.telegram") }}</a></li>
      <li><a target="_blank" href="">{{ $t("nav.whitepaper") }}</a></li>
      <li><a target="_blank" href="">{{ $t("nav.whitelist") }}</a></li>
    </ul>
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

li {
  padding-left: 2rem;
}

li a {
  color: #e0e5e9;
}

li a:hover {
  color: white;
}
</style>
