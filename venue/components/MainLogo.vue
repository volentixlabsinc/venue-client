<template>
  <a class="venue-logo" @click="onClickLogo">
    <img id="venue-logo" class="image" src="/img/logos/venue-volentix-dark.png">
  </a>
</template>

<script>
export default {
  methods: {
    onClickLogo() {
      this.$router.push("/");
    }
  }
};
</script>
