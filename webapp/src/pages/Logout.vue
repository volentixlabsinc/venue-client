<template>
  <h2 style="color:white;">{{ $t('auth.msg_logging_out') }}</h2>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
  middleware: "auth",
  mounted() {
    this.logout();
  },
  methods: {
    logout: async function() {
      // locale gets wiped on logout; save it so that it doesn't get reset to English
      const savedLocale = this.$i18n.locale;
      if (this.$store.state.user.isAuthenticated) {
        // ignore errors
        await Promise.all([
          Auth.signOut().catch(() => {}),
          this.$axios.$get("/logout/").catch(() => {})
        ]);
      }
      this.$store.dispatch("clearUserState");
      this.$router.push(this.localizedRoute("/", savedLocale));
    }
  }
};
</script>
