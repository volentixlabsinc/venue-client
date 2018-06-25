<template>
  <div style="min-height:300px" class="is-vcentered">
    <div v-if="imageNumber==1" class="userId-form">
      <h3>Click on profile</h3>
      <img src="/img/onboarding/bitcointalk/step1a_alt2.png" >
    </div>
    <img v-if="imageNumber==2" src="/img/onboarding/bitcointalk/step1b_alt.png" >
    <div v-if="imageNumber==3" class="userId-form">
      <h1 style="margin:0px">Step 3</h1>
      <h3>Paste your USERID below:</h3>
      <br>
      <footer>
        <OnboardingInputUserProfileId @userIdConfirmed="userIdConfirmed"/>
      </footer>
    </div>
    
  </div>
</template>

<script>
import OnboardingInputUserProfileId from "~/components/OnboardingInputUserProfileId.vue";
export default {
  components: {
    OnboardingInputUserProfileId
  },
  props: {
    imageNumber: {
      type: Number,
      default: 1
    }
  },
  methods: {
    userIdConfirmed(profileData) {
      this.$emit("userIdConfirmed", profileData);
    }
  }
};
</script>
