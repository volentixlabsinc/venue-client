<template>
  <div>
    <TelegramBountyCampaignDesktop class="is-hidden-mobile" />
    <TelegramBountyCampaignMobile class="is-hidden-tablet" />
  </div>
</template>

<script>
import TelegramBountyCampaignDesktop from "~/components/TelegramBountyCampaignDesktop.vue";
import TelegramBountyCampaignMobile from "~/components/TelegramBountyCampaignMobile.vue";

export default {
  components: {
    TelegramBountyCampaignDesktop,
    TelegramBountyCampaignMobile
  },
  middleware: "auth"
};
</script>
