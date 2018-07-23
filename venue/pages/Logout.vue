<template>
  <h2 style="color:white;">{{ $t('auth.msg_logging_out') }}</h2>
</template>


<script>
export default {
  middleware: "authenticated",
  mounted() {
    this.logout();
  },
  methods: {
    logout: async function() {
      this.$axios.$get("/logout/");
      this.$store.dispatch("clearUserState");
      this.$router.push(this.localizedRoute("/", this.$i18n.locale));
    }
  }
};
</script>
