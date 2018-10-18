<template>
  <div>
    <ul class="m-l-lg">
      <li><a class="is-size-6" target="_blank" href="https://volentix.io/">Volentix.io</a></li>
      <li><a class="is-size-6" target="_blank" href="https://venue.ninja/rules/">{{ $t("nav.rules") }}</a></li>
      <li><a class="is-size-6" target="_blank" href="https://valoro.io/">{{ $t("nav.valoro") }}</a></li>
      <li><a class="is-size-6" target="_blank" href="https://venue.ninja/telegram-campaign-rules/">{{ $t("nav.telegram") }}</a></li>
      <li><a class="is-size-6" target="_blank" href="https://github.com/Volentix/documentation/blob/master/VDexWhitePaper-v0.1.3.pdf">{{ $t("nav.whitepaper") }}</a></li>
      <li><a class="is-size-6" target="_blank" href="https://volentix.io/vtx-whitelist/">{{ $t("nav.whitelist") }}</a></li>
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
li a {
  color: #e0e5e9;
}

li a:hover {
  color: white;
}
</style>
