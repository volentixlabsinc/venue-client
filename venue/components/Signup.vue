<template>
  <div class="log-in-element">
    <h3 class="title">SIGNUP</h3>
    <form method="POST" @submit="checkEmail($event)">
      <ul>
        <li v-for="error in errors" :key="error.id" class="help is-danger">{{ error[0] ? error[0].msg: '' }}</li>
      </ul>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input v-validate="'required|email'" v-model="email" class="input" type="email" name="email">
        </div>
      </div>
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input v-validate="'required'" v-model="username" class="input" name="username">
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input v-validate="'required|min:6'" v-model="password" class="input" type="password" name="password">
        </div>
      </div>
      <div class="field">
        <label class="label">Confirm password</label>
        <div class="control">
          <input v-validate="{is: password}" v-model="confirmation" class="input" type="password" name="confirmation">
        </div>
      </div>
      <label class="checkbox">
        <input type="checkbox" name="newsletter">
        Also add me to your newsletter distribution list
      </label>
      <button class="button is-primary is-fullwidth m-t-lg">Sign Up</button>
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
      email: "",
      username: "",
      password: "",
      confirmation: "",
      signUpError: false,
      newsletter: false,
      ready: false,
      getActionFromFeedback: true
    };
  },
  mounted() {
    this.ready = true;
  },
  methods: {
    checkEmail: async function(event) {
      event.preventDefault();
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
    registerUser: async function() {
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
