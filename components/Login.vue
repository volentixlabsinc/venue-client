<template>
  <div>
    <h3 class="title">LOGIN</h3>
    <form method="POST" @submit="authenticateLogin($event)">
      <p v-show="showMessageError.error" class="is-size-6 has-text-danger">{{ showMessageError.message }}</p>
      <ul>
        <li v-for="error in errors" :key="error.id" class="help is-danger">{{ error[0] ? error[0].msg: '' }}</li>
      </ul>
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input v-validate="'required'" v-model="username" type="text" class="input" name="username">
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input v-validate="'required|regex:[^]*'" v-model="password" class="input" type="password" name="password">
        </div>
      </div>
      <button 
        type="submit" 
        class="button is-primary is-fullwidth m-t-lg">Log In</button>
    </form>

    <FeedbackModal v-show="ready"/>
  </div>
</template>


<script>
import { loadUserData } from "~/assets/utils.js";
import FeedbackModal from "~/components/FeedbackModal.vue";

export default {
  components: {
    FeedbackModal
  },
  data() {
    return {
      ready: false,
      logged: false,
      loginError: false,
      username: "",
      password: "",
      showMessageError: {
        error: true,
        message: "",
        authResponse: null
      }
    };
  },
  mounted() {
    this.checkConfirmation();
  },
  methods: {
    checkConfirmation() {
      const emailConfirmed = this.$route.query.email_confirmed;
      if (emailConfirmed == 1) {
        this.showConfirmationMessage();
        this.ready = true;
      }
    },
    showConfirmationMessage() {
      this.$modal.show("FeedbackModal", {
        type: "success",
        title: "Email Verified!",
        message: "You can now log in",
        buttonText: "Close",
        sendActionToFeedback: false
      });
    },
    async authenticateLogin(event) {
      event.preventDefault();
      this.loginError = false;

      try {
        this.authResponse = await this.$axios.$post("/authenticate/", {
          username: this.username,
          password: this.password
        });

        await this.$store.commit("user/authenticated", {
          userId: this.authResponse.user_profile_id,
          language: this.authResponse.language,
          token: this.authResponse.token
        });

        await loadUserData(this.$store.commit, this.$axios);

        this.$router.push(
          this.$store.state.userStats.hasCampaignData
            ? "/dashboard"
            : "/onboarding/bitcointalk"
        );
      } catch (error) {
        const errorCode = error.response.data.error_code;
        this.displayErrorMessage(errorCode);
      }
    },
    displayErrorMessage(error) {
      this.showMessageError.error = true;
      if (error === "wrong_credentials") {
        this.showMessageError.message = "Incorrect username or password.";
      } else if (error === "email_verification_required") {
        this.showMessageError.message =
          "Your email address has not been verified. Please check your email account.";
      }
    }
  }
};
</script>
