<template>
  <div>
    <div v-if="imageNumber==1" class="userId-form">
      <h3>1) Click on Forum Profile Information inside the Profile Tab</h3>
      <img src="/img/onboarding/bitcointalk/sigPaste1.png" >
    </div>
    <div v-if="imageNumber==2" class="userId-form">
      <h3>2) Scroll down to Signature and paste the code in the Text Area</h3>
      <img v-if="imageNumber==2" id="signature-container" src="/img/onboarding/bitcointalk/sigPaste2.png" >
    </div>
            
    <div v-if="imageNumber==3" class="userId-form">
      <h3>3) Scroll down and accept the changes</h3>
      <img v-if="imageNumber==3" id="signature-container" src="/img/onboarding/bitcointalk/sigPaste3.png" >
                
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
