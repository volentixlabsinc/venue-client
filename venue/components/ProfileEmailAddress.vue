<template>
  <div>
    <ProfileCard 
      title="Email Address" 
      description="Change your registered email address" 
      button="Change Email"
      @clicked="isModalActive = true"/>
    <b-modal :active.sync="isModalActive" has-modal-card>
      <ProfileEmailAddressForm :value="$store.state.user.email"/>
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
