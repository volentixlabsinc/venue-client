<template>
  <OneColumnLayout>
    <div slot="content">
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-one">MY PROFILE</h1>
          </div>
        </div>
      </section>
      <div class="columns is-multiline">
        <div class="column is-3">
          <wallet-address />
        </div>

        <div class="column is-3">
          <email-address/>
        </div>

        <div class="column is-3">
          <account-username/>
        </div>

        <div class="column is-3">
          <account-password/>
        </div>

        <div class="column is-3">
          <language/>
        </div>

        <div class="column is-3">
          <two-factor/>
        </div>

      </div>
    </div>
  </OneColumnLayout>
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
  }
};
</script>
