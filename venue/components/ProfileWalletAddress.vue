<template>
  <ProfileCard :coming-soon="true" title="VTX Wallet Address" description="VTX address where to send payouts" button="Set VTX Address"/>
</template>

<script>
import ProfileCard from "~/components/ProfileCard.vue";

export default {
  components: {
    ProfileCard
  }
};
</script>
