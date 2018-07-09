<template>
  <div>
    <h3 class="title">SIGNUP</h3>
    <form method="POST" @submit.prevent="registerUser">
      <ul>
        <li v-for="error in errors" :key="error.id" class="help is-danger">{{ error[0] ? error[0].msg: '' }}</li>
      </ul>
      <b-field label="Email">
        <b-input v-model="email" type="email" icon-pack="fas" name="email" required/>
      </b-field>
      <b-field label="Username">
        <b-input v-model="username" icon-pack="fas" name="username" required />
      </b-field>
      <b-field label="Password">
        <b-input v-model="password" minlength="6" maxlength="25" type="password" name="password" icon-pack="fas" !has-counter required reveal-password/>
      </b-field>
      <div class="field">
        <b-checkbox v-model="newsletter" icon-pack="fas">Also add me to your newsletter distribution list</b-checkbox>
      </div>
      <div class="field">
        By signing up, you agree to the Volentix <a href="https://www.volentix.io/privacy.html" target="_blank">privacy policy</a> and <a href="https://www.volentix.io/terms.html" target="_blank">terms of use</a>.
      </div>
      <b-field>
        <button class="button is-primary" type="submit">Sign Up</button>
      </b-field>
    </form>
    <FeedbackModal v-if="ready" @feedbackEmits="recieveAction"/>
  </div>
</template>

<script>
import FeedbackModal from "~/components/FeedbackModal.vue";
export default {
  components: {
    FeedbackModal
  },
  data() {
    return {
      ready: false,
      email: "",
      username: "",
      password: "",
      signUpError: false,
      newsletter: false
    };
  },
  mounted() {
    this.ready = true;
  },
  methods: {
    // TODO Call this after username is entered
    async checkEmail() {
      const params = {
        email: this.email
      };
      const data = await this.$axios.$get("check/email-exists/", { params });
      if (data.email_exists) {
        this.$modal.show("FeedbackModal", {
          type: "error",
          title: "Error",
          message: "This email account already exists",
          buttonText: "CLOSE",
          sendActionToFeedback: false
        });
      } else {
        this.registerUser();
      }
    },
    async registerUser() {
      this.signUpError = false;
      const result = await this.$axios.$post("create/user/", {
        email: this.email,
        username: this.username,
        password: this.password,
        language: "en",
        receive_emails: this.newsletter
      });

      if (result.status !== "success") {
        this.signUpError = true;
      } else {
        this.$modal.show("FeedbackModal", {
          type: "success",
          title: "Success!",
          message:
            "Please click the email verification link we've just emailed to you to activate your Venue account.",
          buttonText: "CLOSE",
          sendActionToFeedback: true
        });
      }
    },
    recieveAction() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
input {
  max-width: 30rem;
}

a {
  text-decoration: underline;
}
</style>
