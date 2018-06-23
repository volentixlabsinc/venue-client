<template>
  <one-column-layout>
    <div>
      <h1 class="title is-2">MY PROFILE</h1>
      <div v-if="userInfo" class="columns">
        <div class="column">
          <wallet-address/>
          <account-password/>
        </div>
        <div class="column">
          <email-address :user-info="userInfo.email"/>
          <language />
        </div>
        <div class="column">
          <account-username :user-info="userInfo.username"/>
          <two-factor :user-info="userInfo.enabled_2fa" />
        </div>
      </div>
    </div>
  </one-column-layout>
    
</template>

<script>
import OneColumnLayout from "~/components/OneColumnLayout.vue";
import WalletAddress from "~/components/myProfile/WalletAddress.vue";
import AccountPassword from "~/components/myProfile/AccountPassword.vue";
import AccountUsername from "~/components/myProfile/AccountUsername.vue";
import EmailAddress from "~/components/myProfile/EmailAddress.vue";
import Language from "~/components/myProfile/Language.vue";
import TwoFactor from "~/components/myProfile/TwoFactor.vue";

export default {
  components: {
    OneColumnLayout,
    WalletAddress,
    AccountPassword,
    AccountUsername,
    EmailAddress,
    Language,
    TwoFactor
  },
  data() {
    return {
      userInfo: null
    };
  },
  async asyncData({ app }) {
    const userInfo = await app.$axios.$get("/retrieve/user/");
    return { userInfo };
  }
};
</script>
