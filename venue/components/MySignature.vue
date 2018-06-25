<template>
  <div>
    <div class="is-size-5">Current Signature</div>
    <img id="signature" :src="image">
    <button v-if="showChangeButton" class="button is-primary is-outlined is-pulled-right" @click="onClickSignature">CHANGE</button>
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
      image: this.$store.state.signature
        ? this.$store.state.signature.image
        : ""
    };
  },
  methods: {
    onClickSignature() {
      this.$router.push("/editSignature");
    }
  }
};
</script>
