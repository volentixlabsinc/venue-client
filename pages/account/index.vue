<template>
  <div style="width:100%; height:100%">
    <div v-if="userInfo" class="tile is-ancestor is-multiline">
      <div class="tile">
        <wallet-address />
      </div>

      <div class="tile">
        <email-address :user-info="userInfo.email" @changeEmail="$modal.show('MyEmailModal')"/>
      </div>

      <div class="tile">
        <account-username :user-info="userInfo.username"/>
      </div>
    </div>
    <div v-if="userInfo" class="tile is-ancestor is-multiline">
      <div class="tile">
        <account-password/>
      </div>

      <div class="tile">
        <language :user-info="userInfo.language" :languages="languages"/>
      </div>

      <div class="tile">
        <two-factor/>
      </div>
    </div>
    
    <div v-else class="columns is-desktop is-vcentered has-text-centered" style="width:100%; height:100%">
      
      <h1 class="title ">
        Ooops! You have to be logged in to see your profile
      </h1>
      
    </div>
  </div>
    
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
      request: null,
      userInfo: null,
      languages: null
    };
  },
  mounted() {
    this.retrieveUserInfo();
    this.fetchLanguages();
  },
  methods: {
    async retrieveUserInfo() {
      this.userInfo = await this.$axios.$get("/retrieve/user/");
      console.log("forumProfiles: ", this.userInfo);
    },
    async fetchLanguages() {
      const getLanguages = await this.$axios.$get("/retrieve/languages/");
      this.languages = getLanguages;
    }
  }
};
</script>

<style scoped>
.tile {
  margin: 3em 1em;
}
</style>
