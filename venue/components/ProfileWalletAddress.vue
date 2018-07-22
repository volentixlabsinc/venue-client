<template>
  <ProfileCard :coming-soon="true" :title="$t('settings.vtx_wallet')" :description="$t('settings.desc_vtx_wallet')" :button="$t('settings.btn_vtx_wallet')"/>
</template>

<script>
import ProfileCard from "~/components/ProfileCard.vue";

export default {
  components: {
    ProfileCard
  }
};
</script>
