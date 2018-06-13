<template>
  <div class="log-in-element">
    <h3 class="title">SIGNUP</h3>
    <form method="POST" @submit="registerUser($event)">
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
      <button class="button is-primary is-fullwidth">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      confirmation: "",
      signUpError: false
    };
  },

  methods: {
    // TODO Call this to verify a unique email address, before pressing the register button
    checkEmail: async function(email) {
      const data = await this.$axios.$get("check/email-exists/", { email });
      if (data.email_exists) {
        // TODO Display error
      }
    },
    registerUser: async function(event) {
      event.preventDefault();
      this.signUpError = false;

      const result = await this.$axios.$post("create/user/", {
        email: this.email,
        username: this.username,
        password: this.password,
        language: "en"
      });

      if (result.status !== "success") {
        console.error("There was an error: ", result);
        this.signUpError = true;
      } else {
        console.log("SUCCESS!!! Click on registration link");
        // TODO Display success modal here
      }
    }
  }
};
</script>
