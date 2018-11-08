<template>
  <div>
    <ProfileCard 
      :title="$t('settings.username')" 
      :description="$t('settings.desc_username')" 
      :button="$t('settings.btn_username')"
      @clicked="isModalActive = true"/>
    <b-modal :active.sync="isModalActive" has-modal-card>
      <ProfileUsernameForm :value="this.$auth.user.username"/>
    </b-modal>
  </div>
</template>

<script>
import ProfileCard from "~/components/ProfileCard.vue";
import ProfileUsernameForm from "~/components/ProfileUsernameForm.vue";

export default {
  components: {
    ProfileCard,
    ProfileUsernameForm
  },
  data() {
    return {
      isModalActive: false
    };
  }
};
</script>
