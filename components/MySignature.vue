<template>
  <div>
    <h3 class="subtitle">Current Signature</h3>
    <img id="signature" :src="image">
    <button class="button is-small is-primary">CHANGE</button>
  </div>  
</template>

<script>
export default {
  data() {
    // TODO Signature needs to be passed in when we support multiple campaigns
    return {
      image: "/img/onboarding/sig1.png"
    };
  }
};
</script>
