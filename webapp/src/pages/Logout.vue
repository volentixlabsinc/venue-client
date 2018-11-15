<template>
  <h2 style="color:white;">{{ $t('auth.msg_logging_out') }}</h2>
</template>


<script>
export default {
  // middleware: "auth",
  mounted() {
    this.logout();
  },
  methods: {
    logout: async function() {
      // locale gets wiped on logout; save it so that it doesn't get reset to English
      const savedLocale = this.$i18n.locale;
      if (this.$store.state.user.isAuthenticated) {
        try {
          await this.$axios.$get("/logout/");
        } catch (err) {
          // Ignore errors
        }
      }
      this.$store.dispatch("clearUserState");
      this.$router.push(this.localizedRoute("/", savedLocale));
    }
  }
};
</script>
