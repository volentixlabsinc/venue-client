<template>
  <div>
    <ProfileCard
      title="Change Password" 
      description="Change your password" 
      button="Change Password"
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
