<template>
  <h2 style="color:white;">Logging out... </h2>
</template>


<script>
export default {
  mounted() {
    this.logout();
  },
  methods: {
    logout: async function() {
      await this.$store.dispatch("clearUserState");
      this.$router.push("/");
    }
  }
};
</script>
