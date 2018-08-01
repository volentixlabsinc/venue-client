<template>
  <div>
    <div v-if="imageNumber==1">
      <h3 class="subtitle">{{ $t('bct_onboarding.help_signature_1') }}</h3>
      <img src="~assets/onboarding/bitcointalk/sigPaste1.png" >
    </div>
    <div v-if="imageNumber==2">
      <h3 class="subtitle">{{ $t('bct_onboarding.help_signature_2') }}</h3>
      <img v-if="imageNumber==2" src="~assets/onboarding/bitcointalk/sigPaste2.png" >
    </div>       
    <div v-if="imageNumber==3">
      <h3 class="subtitle">{{ $t('bct_onboarding.help_signature_3') }}</h3>
      <img v-if="imageNumber==3" src="~assets/onboarding/bitcointalk/sigPaste3.png" >        
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageNumber: {
      type: Number,
      default: 1
    }
  }
};
</script>
