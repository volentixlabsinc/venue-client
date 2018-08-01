<template>
  <div>
    <img v-if="imageNumber==1" src="~assets/onboarding/bitcointalk/step1a_alt.png" >
    <img v-if="imageNumber==2" src="~assets/onboarding/bitcointalk/step1b_alt.png" >
    <div v-if="imageNumber==3">
      <label class="label">{{ $t('bct_onboarding.paste_id') }}:</label>
      <OnboardingInputUserProfileId @verified="$emit('verified', $event)"/>
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
  }
};
</script>
