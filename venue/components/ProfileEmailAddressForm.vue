<template>
  <div>
    <form method="POST" @submit.prevent="changeEmail">
      <div class="modal-card">
        <header class="modal-card-head" >
          <div class="modal-card-title">{{ $t('settings.label_change_email') }}</div>
        </header>
        <section class="modal-card-body">
          <b-field>
            <span class="has-text-weight-bold">{{ $t('labels.current') }}:&nbsp;</span>
            <span>{{ value }}</span>
          </b-field>
          <b-field :label="$t('settings.label_new_email')">
            <b-input v-model="newValue" :placeholder="value" type="email" required />
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$parent.close()">{{ $t('buttons.btn_cancel') }}</button>
          <button class="button is-primary" type="submit">{{ $t('settings.btn_email') }}</button>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      newValue: ""
    };
  },
  methods: {
    async changeEmail() {
      if (this.newValue !== this.value) {
        // TODO Check for errors
        const result = await this.$axios.$post("/manage/change-email/", {
          email: this.newValue
        });
        if (result.success === true) {
          this.$store.commit("user/updateEmail", this.newValue);
          this.$parent.close();
        }
      }
      this.$parent.close();
    }
  }
};
</script>
