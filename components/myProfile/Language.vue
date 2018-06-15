<template>
  <div class="card">
    <div class="card-content">
      <h2 class="title"> Language</h2>
      <h2 class="subtitle">Set the site language</h2>
      <footer class="card-footer">
            
        <b-dropdown v-if="languages=!undefined" class="card-footer-item" hoverable>
          <button slot="trigger" class="button is-white">
            <span>Languages</span>
            <i class="fas fa-caret-down" style="padding-left: 5px"/>
          </button>
          <b-dropdown-item>fr</b-dropdown-item>
          <b-dropdown-item>Something else</b-dropdown-item>
        </b-dropdown>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      isActive: false,
      languages: undefined
    };
  },
  mounted() {
    this.fetchLanguages();
  },
  methods: {
    async fetchLanguages() {
      const getLanguages = await this.$axios.$get("/retrieve/languages/");
      this.languages = getLanguages;
      console.log("this.languages: ", this.languages[0].text);
    }
  }
};
</script>
