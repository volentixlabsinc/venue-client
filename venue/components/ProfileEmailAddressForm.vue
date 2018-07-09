<template>
  <div>
    <form method="POST" @submit.prevent="changeEmail">
      <div class="modal-card">
        <header class="modal-card-head" >
          <div class="modal-card-title">Change email address</div>
        </header>
        <section class="modal-card-body">
          <b-field>
            <span class="has-text-weight-bold">Current:&nbsp;</span>
            <span>{{ value }}</span>
          </b-field>
          <b-field label="New email address">
            <b-input v-model="newValue" :placeholder="value" icon-pack="fas" type="email" required />
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$parent.close()">Cancel</button>
          <button class="button is-primary" type="submit">Change email</button>
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
