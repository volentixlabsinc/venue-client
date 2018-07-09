<template>
  <div>
    <ProfileCard 
      title="Username" 
      description="Change your username" 
      button="Change Username"
      @clicked="isModalActive = true"/>
    <b-modal :active.sync="isModalActive" has-modal-card>
      <ProfileUsernameForm :value="$store.state.user.username"/>
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
