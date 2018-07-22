<template>
  <ProfileCard :coming-soon="true" :description="$t('settings.desc_language')" :button="$t('settings.btn_set_language')" title="Language"/>
  <!-- <b-dropdown class="card-footer-item" >
    <button slot="trigger" class="button is-white">
      <span>Languages</span>
      <i class="fas fa-caret-down" style="padding-left: 5px"/>
    </button>
    <b-dropdown-item v-for="(ln, index) in languages" :key="index" @click="onSelectLanguage(ln)">{{ ln.text }}</b-dropdown-item>
  </b-dropdown> -->
</template>

<script>
import ProfileCard from "~/components/ProfileCard.vue";

export default {
  components: {
    ProfileCard
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
