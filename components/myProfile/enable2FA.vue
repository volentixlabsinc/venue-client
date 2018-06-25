<template>
  <div>
    <div v-if="!success" class="card-content">
      <h2 class="card-header-title subtitile">{{ bodyText[0] }}</h2>
      <div v-if="response!==undefined" class="columns">
        <div class="column">
          <qriously :size="200" :value="response.uri" />
        </div>
        <div class="column is-7">
          <h2 class="card-header-title subtitile">Or enter these details manually:</h2>
          <p class="venue-text is-size-6">
            <strong>Service:</strong>
            {{ response.service }}</p>
          <p class="venue-text is-size-6"> <strong>Account:</strong>
            {{ response.account }}</p>
          <p class="venue-text is-size-6"><strong>Key:</strong>
            {{ response.key }}
          </p>
        </div>
      </div>
      <hr>
      <h2 class="card-header-title">{{ bodyText[1] }}</h2>
      <li v-for="error in errors" :key="error.id" class="help is-danger">{{ error[0] ? error[0].msg: '' }}</li>
      <input v-validate="'required'" v-model.trim="OTPcode" class="input" placeholder="OTP code from authenticator app" name="Code">
      <p v-show="showError.show" class="is-size-7 has-text-danger">{{ showError.message }}</p>
    </div>
    <div v-else class="card-content">
      <h2 class="subtitle">The two-factor authentication has been successfully enabled!</h2>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        <a v-if="!success" class="button is-primary" @click="verifyOtpCode" @keyup.enter="verifyOtpCode">Submit</a>
        <a v-else class="button is-primary" @click="close">Close</a>
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
    },
    response: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      OTPcode: null,
      showError: {
        show: false,
        message: ""
      },
      success: false
    };
  },
  methods: {
    async verifyOtpCode() {
      const scope = this;
      event.preventDefault();
      const response = await scope.$axios.$post("/manage/verify-otp-code/", {
        otpCode: scope.OTPcode,
        enable_2fa: true
      });
      if (response.verified) {
        scope.success = true;
      } else {
        this.showError = {
          show: true,
          message: "You entered a wrong or expired OTP code"
        };
      }
    },
    close() {
      this.$modal.hide("twoFactorAuthModal");
    }
  }
};
</script>
