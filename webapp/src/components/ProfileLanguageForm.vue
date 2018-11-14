<template>
  <div>
    <form method="POST" @submit.prevent="changeLanguage">
      <div class="modal-card">
        <header class="modal-card-head" >
          <div class="modal-card-title">{{ $t('settings.btn_language') }}</div>
        </header>
        <section class="modal-card-body language-container">
          <b-dropdown class="card-footer-item">
            <div slot="trigger" class="button is-white">
              <span>{{ currentLocale }}</span>
              <i class="fas fa-caret-down" style="padding-left: 5px"/>
            </div>
            <b-dropdown-item v-for="(ln, index) in $i18n.locales" :key="index" @click="onSelectLanguage(ln)">
              {{ ln.name }}
            </b-dropdown-item>
          </b-dropdown>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$parent.close()">
            {{ $t('buttons.btn_cancel') }}
          </button>
          <button class="button is-primary" type="submit">{{ $t('settings.btn_language') }}</button>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: this.$i18n.locale
    };
  },
  computed: {
    currentLocale() {
      return this.$i18n.locales.filter(
        locale => locale.code === this.language
      )[0].name;
    }
  },
  methods: {
    async changeLanguage() {
      if (this.language !== "") {
        // TODO Check for errors
        const result = await this.$axios.$put("/manage/change-language/", {
          language: this.language
        });
        if (result.success === true) {
          console.log("switching path to " + this.language);
          this.$parent.close();
          this.$router.push(this.switchLocalePath(this.language));
        }
      }
      this.$parent.close();
    },
    async onSelectLanguage(ln) {
      this.language = ln.code;
    }
  }
};
</script>
