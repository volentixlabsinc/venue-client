<template>
  <ProfileCard
    :coming-soon="true"
    :title="$t('settings.two_factor')"
    :description="$t('settings.desc_two_factor')"
    :button="$t('settings.btn_enable_2fa')"/>
</template>

<script>
import ProfileCard from "~/components/ProfileCard.vue";

export default {
  components: {
    ProfileCard
  }
};
</script>
