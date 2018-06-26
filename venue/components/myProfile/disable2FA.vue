<template>
  <div>
    <div class="card-content">
      <h2 v-if="!disabled" class="card-header-title subtitile">{{ bodyText[0] }}</h2>
      <h2 v-else class="card-header-title subtitile">The two-factor authentication has been disabled!</h2>
      

    </div>
    <footer v-if="!disabled" class="card-footer">
      <div class="card-footer-item">
        <a class="button is-primary" @click="disable">Disabe 2FA</a>
      </div>
      <div class="card-footer-item">
        <a class="button is-primary" @click="close">Cancel</a>
      </div>
    </footer>

    <footer v-else class="card-footer">
      <div class="card-footer-item">
        <a class="button is-primary" @click="close">Close</a>
      </div>
    </footer>
    
  </div>
</template>

<script>
export default {
  props: {
    bodyText: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      disabled: false
    };
  },
  methods: {
    close() {
      this.$modal.hide("twoFactorAuthModal");
    },
    async disable() {
      const response = await this.$axios.$post(
        "/manage/disable-two-factor-auth/"
      );
      if (response.success) {
        this.disabled = true;
      }
    }
  }
};
</script>
