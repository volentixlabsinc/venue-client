<template>
  <div>
    <div class="is-size-5">{{ $t('edit_signature.current_signature') }}</div>
    <img id="signature" :src="image">
    <button v-if="showChangeButton" class="button is-primary is-outlined is-pulled-right" @click="onClickSignature">{{ $t('buttons.btn_change') }}</button>
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
      this.$router.push(this.localizedRoute("/editSignature", this.$i18n.locale));
    }
  }
};
</script>
