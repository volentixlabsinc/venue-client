<template>
  <div class="panel">
    <my-profile-setting
      :coming-soon="false"
      :button="buttonText"
      title="Two-Factor Authentication"
      description="Modify two-factor authentication"
      @activateModal="showModal"/>
    <two-factor-auth-modal v-show="loadModal"/>
  </div>
</template>

<script>
import MyProfileSetting from "~/components/MyProfileSetting.vue";
import TwoFactorAuthModal from "~/components/myProfile/TwoFactorAuthModal.vue";

export default {
  components: {
    MyProfileSetting,
    TwoFactorAuthModal
  },
  props: {
    userInfo: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    const data = {
      buttonText: "",
      bodyText: "",
      loadModal: false
    };
    if (this.userInfo) {
      Object.assign(data, {
        buttonText: "Disable 2FA",
        bodyText: [
          "Are you sure you want to disable two-factor authentication?"
        ]
      });
    } else {
      Object.assign(data, {
        buttonText: "Enable 2FA",
        bodyText: [
          "Step 1: Scan this with your authenticator app",
          "Step 2: Enter the displayed OTP code"
        ]
      });
    }
    return data;
  },
  mounted() {
    if (!this.userInfo) {
      this.fetchRequest();
    }
  },
  methods: {
    showModal() {
      this.$modal.show("twoFactorAuthModal", {
        enable: !this.userInfo,
        title: this.buttonText,
        bodyText: this.bodyText,
        response: this.response
      });
      this.loadModal = true;
    },
    async fetchRequest() {
      this.response = await this.$axios.$post(
        "/manage/enable-two-factor-auth/"
      );
    }
  }
};
</script>
