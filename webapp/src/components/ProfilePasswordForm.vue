<template>
  <div>
    <form method="POST" @submit.prevent="changePassword">
      <div class="modal-card">
        <header class="modal-card-head" >
          <div class="modal-card-title">{{ $t('settings.btn_password') }}</div>
        </header>
        <section class="modal-card-body">
          <b-field :label="$t('settings.label_current_password')">
            <b-input v-model="currentValue" :placeholder="$t('settings.label_current_password')" type="password" required password-reveal/>
          </b-field>
          <b-field :label="$t('settings.label_new_password')">
            <b-input v-model="newValue" :placeholder="$t('settings.label_new_password')" type="password" required password-reveal/>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$parent.close()">{{ $t('buttons.btn_cancel') }}</button>
          <button class="button is-primary" type="submit">{{ $t('settings.btn_password') }}</button>
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
      currentValue: "",
      newValue: ""
    };
  },
  methods: {
    async changePassword() {
      if (this.newValue !== "") {
        try {
          const user = await Auth.currentAuthenticatedUser();
          await Auth.changePassword(user, this.currentValue, this.newValue);
          this.$parent.close();
        } catch (err) {
          console.log(err);
        }
      }
      this.$parent.close();
    }
  }
};
</script>
