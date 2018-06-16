<template>
  <div>
    <h3 class="subtitle">Current Signature</h3>
    <img id="signature" :src="image">
    <button v-if="showChangeButton" class="button is-small is-primary" @click="onClickSignature">CHANGE</button>
  </div>  
</template>

<script>
export default {
  props: {
    showChangeButton: {
      type: Boolean,
      default: true
    }
  },
  data() {
    // TODO Signature needs to be passed in when we support multiple campaigns
    return {
      image: this.$store.state.signature.image
    };
  },
  methods: {
    onClickSignature() {
      console.log("click");
      this.$router.push("/editSignature");
    }
  }
};
</script>
