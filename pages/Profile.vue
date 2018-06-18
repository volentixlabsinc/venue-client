<template>
  <one-column-layout>
    <div>
      <h1 class="title is-2">MY PROFILE</h1>
      <div v-if="userInfo" class="tile is-ancestor is-multiline">
        <div class="tile">
          <wallet-address />
        </div>

        <div class="tile">
          <email-address :user-info="userInfo.email" @changeEmail="$modal.show('MyEmailModal')"/>
        </div>

        <div class="tile">
          <account-username :user-info="userInfo.username" @newUserData="refreshData"/>
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
    
      <div v-show="showError.error" class="columns is-desktop is-vcentered has-text-centered" style="width:100%; height:100%">
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title ">
                Ooops, Bad Request! 
              </h1>
              <!-- <h2 class="subtitle">
              {{ showError.message.stringify() }}
            </h2> -->
              <h2 class="subtitle">
                To have access to your profile you must be logged in.
              </h2>
            </div>
          </div>
        </section>
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
      request: null,
      userInfo: null,
      languages: null,
      showError: false
    };
  },
  mounted() {
    this.retrieveUserInfo();
    this.fetchLanguages();
  },
  methods: {
    async retrieveUserInfo() {
      await this.$axios
        .$get("/retrieve/user/")
        .then(result => {
          this.userInfo = result;
        })
        .catch(error => {
          this.showError = {
            error: true,
            message: error
          };
        });
    },
    async fetchLanguages() {
      const getLanguages = await this.$axios.$get("/retrieve/languages/");
      this.languages = getLanguages;
    },
    refreshData(data) {
      this.userInfo = data;
    }
  }
};
</script>

<style scoped>
.tile {
  margin: 3em 1em;
}
</style>
