<template>
  <div class="box">
    <div class="box-content">
      <h2 class="title"> Language</h2>
      <footer class="box-footer">
        <div class="box-footer-item">
          <div class="rows">
            <h2 class="subtitle">Set the site language</h2>
            <b-dropdown v-if="languages=!undefined" hoverable>
              <button slot="trigger" class="button is-white">
                <span>{{ userInfo }}</span>
                <i class="fas fa-caret-down" style="padding-left: 5px"/>
              </button>
              <b-dropdown-item>en</b-dropdown-item>
              <b-dropdown-item>fr</b-dropdown-item>
              <b-dropdown-item>Something else</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
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
      const getLanguages = this.axios.get("/retrieve/languages/");
      this.languages = getLanguages;
    }
  }
};
</script>
