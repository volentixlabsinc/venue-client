<template>
  <ProfileCard
    :coming-soon="true"
    title="Two-Factor Authentication"
    description="Modify two-factor authentication"
    button="Enable 2FA"/>
</template>

<script>
import ProfileCard from "~/components/ProfileCard.vue";

export default {
  components: {
    ProfileCard
  }
};
</script>
