<template>
  <my-profile-setting :coming-soon="true" title="Language" description="Set the site language" button="Set Language"/>
  <!-- <b-dropdown class="card-footer-item" >
    <button slot="trigger" class="button is-white">
      <span>Languages</span>
      <i class="fas fa-caret-down" style="padding-left: 5px"/>
    </button>
    <b-dropdown-item v-for="(ln, index) in languages" :key="index" @click="onSelectLanguage(ln)">{{ ln.text }}</b-dropdown-item>
  </b-dropdown> -->
</template>

<script>
import MyProfileSetting from "~/components/MyProfileSetting.vue";

export default {
  components: {
    MyProfileSetting
  }
  // TODO Support changing languages
  // methods: {
  //   async onSelectLanguage(ln) {
  //     const result = await this.$axios.$put("/manage/change-language/", {
  //       language: ln.value
  //     });
  //     if (result.success) {
  //       this.showSuccess = { success: true, newLanguage: ln.text };
  //     }
  //   }
  // }
};
</script>
