<template>
  <div>
    <YoutubeBountyCampaignDesktop class="is-hidden-mobile" />
    <YoutubeBountyCampaignMobile class="is-hidden-tablet" />
  </div>
</template>

<script>
import YoutubeBountyCampaignDesktop from "~/components/YoutubeBountyCampaignDesktop.vue";
import YoutubeBountyCampaignMobile from "~/components/YoutubeBountyCampaignMobile.vue";

export default {
  components: {
    YoutubeBountyCampaignDesktop,
    YoutubeBountyCampaignMobile
  },
  middleware: "auth"
};
</script>
