<template>
  <div>
    <form method="POST" @submit.prevent="changePassword">
      <div class="modal-card">
        <header class="modal-card-head" >
          <div class="modal-card-title">Change password</div>
        </header>
        <section class="modal-card-body">
          <b-field label="New password">
            <b-input v-model="newValue" placeholder="Enter password" icon-pack="fas" type="password" required password-reveal/>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$parent.close()">Cancel</button>
          <button class="button is-primary" type="submit">Change password</button>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newValue: ""
    };
  },
  methods: {
    async changePassword() {
      if (this.newValue !== "") {
        // TODO Check for errors
        const result = await this.$axios.$put("/manage/change-password/", {
          password: this.newValue
        });
        if (result.success === true) {
          this.$parent.close();
        }
      }
      this.$parent.close();
    }
  }
};
</script>
