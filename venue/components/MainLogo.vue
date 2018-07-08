<template>
  <div>
    <a @click="onClickLogo">
      <img class="image is-image-centered" src="~assets/venue-white-accent.png">
    </a>
  </div>
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

<style>
.image {
  max-width: 12rem;
}
</style>
