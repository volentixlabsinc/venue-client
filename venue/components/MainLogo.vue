<template>
  <div>
    <a @click="onClickLogo">
      <img class="image is-image-centered" src="~assets/venue-volentix.png">
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
  max-width: 8rem;
}
</style>
