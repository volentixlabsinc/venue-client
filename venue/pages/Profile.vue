<template>
  <one-column-layout>
    <div>
      <h1 class="title is-2">{{ $t('settings.title_my_profile') }}</h1>
      <div class="columns">
        <div class="column">
          <ProfileWalletAddress/>
          <ProfilePassword class="m-t-lg"/>
        </div>
        <div class="column">
          <ProfileEmailAddress/>
          <ProfileLanguage class="m-t-lg"/>
        </div>
        <div class="column">
          <ProfileUsername/>
          <ProfileTwoFactor class="m-t-lg"/>
        </div>
      </div>
    </div>
  </one-column-layout>
    
</template>

<script>
import OneColumnLayout from "~/components/OneColumnLayout.vue";
import ProfileWalletAddress from "~/components/ProfileWalletAddress.vue";
import ProfilePassword from "~/components/ProfilePassword.vue";
import ProfileUsername from "~/components/ProfileUsername.vue";
import ProfileEmailAddress from "~/components/ProfileEmailAddress.vue";
import ProfileLanguage from "~/components/ProfileLanguage.vue";
import ProfileTwoFactor from "~/components/ProfileTwoFactor.vue";

export default {
  middleware: "authenticated",
  components: {
    OneColumnLayout,
    ProfileWalletAddress,
    ProfilePassword,
    ProfileUsername,
    ProfileEmailAddress,
    ProfileLanguage,
    ProfileTwoFactor
  }
};
</script>
