<template>
  <div>
    <h1>enable</h1>
    <h2 class="subtitile">{{ bodyText[0] }}</h2>
    <qr-code :text="uri" :size="220"/>
  </div>
</template>

<script>
export default {
  props: {
    bodyText: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      uri: undefined
    };
  },
  mounted() {
    this.fetchRequest();
  },
  methods: {
    async fetchRequest() {
      const response = await this.$axios.$post(
        "/manage/enable-two-factor-auth"
      );
      this.uri = response.uri;
    }
  }
};
</script>
