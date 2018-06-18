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
    <<<<<<< HEAD
    <feedbackModal @feedbackEmits="closedFeedback"/>
    =======
    <feedbackModal/>
    >>>>>>> 5985ad57eb65640d0eef2f6aa5f4c4cadbb68fdb
  </div>
</template>

<script>
import feedbackModal from "~/components/feedbackModal.vue";
export default {
  components: {
    feedbackModal
  },
  data() {
    return {
      email: "",
      username: "",
      password: "",
      confirmation: "",
      signUpError: false,
      newsletter: false,
      getActionFromFeedback: true
    };
  },

  methods: {
    // TODO Call this to verify a unique email address, before pressing the register button
    checkEmail: async function(event, email) {
      event.preventDefault();
      const data = await this.$axios.$get("check/email-exists/", { email });
      if (data.email_exists) {
        this.$modal.show("feedbackModal", {
          type: "error",
          title: "Error",
          message: "This email account already exists",
          getActionFromFeedback: false
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
        this.$modal.show("feedbackModal", {
          type: "success",
          title: "Success!",
          message:
            "Please click the email verification link we've just emailed to you to activater your Venue account.",
          getActionFromFeedback: true
        });
      }
    },
    closedFeedback() {
      this.$router.push("/");
    }
  }
};
</script>
