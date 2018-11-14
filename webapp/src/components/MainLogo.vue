<template>
  <div>
    <a @click="onClickLogo">
      <img class="image is-image-centered" src="~assets/venue-white-accent-beta.png">
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLogo() {
      this.$router.push(this.localizedRoute("/", this.$i18n.locale));
    }
  }
};
</script>
