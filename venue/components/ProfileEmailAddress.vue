<template>
  <div>
    <ProfileCard 
      :title="$t('settings.title_email')" 
      :description="$t('settings.desc_email')" 
      :button="$t('settings.btn_email')"
      @clicked="isModalActive = true"/>
    <b-modal :active.sync="isModalActive" has-modal-card>
      <ProfileEmailAddressForm :value="this.$auth.user.email"/>
    </b-modal>
  </div>
</template>

<script>
import ProfileCard from "~/components/ProfileCard.vue";
import ProfileEmailAddressForm from "~/components/ProfileEmailAddressForm.vue";

export default {
  components: {
    ProfileCard,
    ProfileEmailAddressForm
  },
  data() {
    return {
      isModalActive: false
    };
  }
};
</script>
