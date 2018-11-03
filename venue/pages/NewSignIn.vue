<template>
  <TwoColumnLayout>
    <div slot="left">
      <amplify-authenticator :auth-options="authOptions"/>
      <amplify-sign-out/>
      <div class="field" v-html="$t('auth.msg_policies', ['https://volentix.io/privacy.html', '/terms'])"/>
    </div>
    <div slot="right">
      <article class="message m-r-lg">
        <div class="message-header">
          <div>
            <i class="fas fa-ban p-r-sm"/>
            <span>{{ $t('auth.no_us_header') }}</span>
          </div>
        </div>
        <div class="message-body">
          <div>{{ $t('auth.no_us_1') }}</div>
          <div class="p-t-md">{{ $t('auth.no_us_2') }}</div>
        </div>
      </article>
    </div>
  </TwoColumnLayout>
</template>

<script>
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";

export default {
  components: {
    TwoColumnLayout
  },
  data() {
    return {
      authOptions: {
        signInOptions: {
          header: "Log into Venue"
        },
        signUpOptions: {
          header: "Signup with Venue",
          signUpFields: ["phone_number", "photo"]
        }
      }
    };
  }
};
</script>
