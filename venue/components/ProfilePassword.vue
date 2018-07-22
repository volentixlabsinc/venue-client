<template>
  <div>
    <ProfileCard
      :title="$t('settings.btn_password')" 
      :description="$t('settings.desc_password')" 
      :button="$t('settings.btn_password')"
      @clicked="isModalActive = true"/>
    <b-modal :active.sync="isModalActive" has-modal-card>
      <ProfilePasswordForm/>
    </b-modal>
  </div>
</template>

<script>
import ProfileCard from "~/components/ProfileCard.vue";
import ProfilePasswordForm from "~/components/ProfilePasswordForm.vue";

export default {
  components: {
    ProfileCard,
    ProfilePasswordForm
  },
  data() {
    return {
      isModalActive: false
    };
  }
};
</script>
