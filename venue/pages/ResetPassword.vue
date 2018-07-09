<template>
  <OneColumnLayout>
    <h1 class="title">Reset password</h1>
    <form method="POST" @submit.prevent="resetPassword">
      <b-field label="Enter your new password">
        <b-input v-model="password" placeholder="Password" minlength="6" type="password" icon-pack="fas" required password-reveal/>
      </b-field>
      <b-field>
        <div class="control">
          <button 
            type="submit" 
            class="button is-primary">Reset password</button>
        </div>
      </b-field>
    </form>
  </OneColumnLayout>
</template>

<script>
import OneColumnLayout from "~/components/OneColumnLayout.vue";
export default {
  components: {
    OneColumnLayout
  },
  data() {
    return {
      password: ""
    };
  },
  methods: {
    async resetPassword() {
      const response = await this.$axios.$post("/manage/reset-password/", {
        action: "change",
        code: this.$route.query.code,
        password: this.password
      });
      if (response.success === true) {
        this.$router.push("/login");
      }
    }
  }
};
</script>
