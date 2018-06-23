<template>
  <modal :resizable="true" :adaptive="true" height="auto" name="twoFactorAuthModal" @before-open="beforeOpen">
    <div class="card" style="height:100%">
      <header class="card-header" >
        <h1 class="card-header-title title has-text-white"> {{ title }}</h1>
        <a class="button card-header-icon is-primary is-outlined" style="width:auto" @click="$modal.hide('twoFactorAuthModal')">X</a>
      </header>
      <enable2FA v-if="enable" :body-text="bodyText" :response="response"/>
      <disable2FA v-else :body-text="bodyText"/>
    </div>
  </modal>
</template>

<script>
import enable2FA from "~/components/myProfile/Enable2FA.vue";
import disable2FA from "~/components/myProfile/Disable2FA.vue";
export default {
  name: "TwoFactorAuthModal",
  components: {
    enable2FA,
    disable2FA
  },
  data: function() {
    return {
      response: null,
      enable: "",
      bodyText: "",
      title: "",
      userData: null
    };
  },
  methods: {
    beforeOpen(event) {
      this.title = event.params.title;
      this.enable = event.params.enable;
      this.bodyText = event.params.bodyText;
      this.response = event.params.response;
    }
  }
};
</script>
