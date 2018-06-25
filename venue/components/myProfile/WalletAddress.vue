<template>
  <my-profile-setting :coming-soon="true" title="VTX Wallet Address" description="VTX address where to send payouts" button="Set VTX Address"/>
</template>

<script>
import MyProfileSetting from "~/components/MyProfileSetting.vue";

export default {
  components: {
    MyProfileSetting
  }
};
</script>
