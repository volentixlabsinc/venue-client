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
import { Auth } from "aws-amplify";

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
        try {
          const user = await Auth.currentAuthenticatedUser();
          await Auth.updateUserAttributes(user, {
            locale: this.language
          });
          this.$router.push(this.switchLocalePath(this.language));
          this.$parent.close();
        } catch (err) {
          console.log(err);
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
