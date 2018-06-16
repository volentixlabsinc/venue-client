<template>
  <div class="card">
    <div class="card-content">
      <h2 class="title"> Language</h2>
      <h2 class="subtitle">Set the site language</h2>
      <footer class="card-footer">
            
        <b-dropdown class="card-footer-item" >
          <button slot="trigger" class="button is-white">
            <span>Languages</span>
            <i class="fas fa-caret-down" style="padding-left: 5px"/>
          </button>
          <b-dropdown-item v-for="(ln, index) in languages" :key="index" @click="onSelectLanguage(ln)">{{ ln.text }}</b-dropdown-item>
        </b-dropdown>
      </footer>
      <h2 v-show="showSuccess.success" class="has-text-success">The site language was successfully changed to {{ showSuccess.newLanguage }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: String,
      default: undefined
    },
    languages: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {
      showSuccess: {
        success: false,
        newLanguage: ""
      }
    };
  },
  mounted() {
    console.log("userInfo", this.languages);
  },
  methods: {
    async onSelectLanguage(ln) {
      const result = await this.$axios.$put("/manage/change-language/", {
        language: ln.value
      });
      if (result.success) {
        this.showSuccess = { success: true, newLanguage: ln.text };
      }
    }
  }
};
</script>
