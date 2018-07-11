<template>
  <div>
    <h3 class="title">SIGN UP</h3>
    <form method="POST" @submit.prevent="registerUser">
      <b-field :type="emailFieldType" :message="emailMessage" label="Email">
        <b-input v-model="email" type="email" name="email" required @blur="checkEmail()"/>
      </b-field>
      <b-field :type="usernameFieldType" :message="usernameMessage" label="Username">
        <b-input v-model="username" name="username" maxlength="25" required @blur="checkUsername()" />
      </b-field>
      <b-field label="Password">
        <b-input v-model="password" minlength="6" type="password" name="password" required password-reveal/>
      </b-field>
      <div class="field">
        <b-checkbox v-model="newsletter">Also add me to your newsletter distribution list</b-checkbox>
      </div>
      <div class="field">
        By signing up, you agree to the Volentix <a href="https://www.volentix.io/privacy.html" target="_blank">privacy policy</a> and <a href="https://www.volentix.io/terms.html" target="_blank">terms of use</a>.
      </div>
      <b-field>
        <button class="button is-primary" type="submit">Sign Up</button>
      </b-field>
    </form>
    <b-modal :active.sync="isSuccessModalActive" @close="$router.push('/')">
      <div class="modal-card">
        <div class="modal-card-body">
          Please click the email verification link we've just emailed to you to activate your Venue account.
        </div>
        <div class="modal-card-foot">
          <button class="button" type="button" @click="isSuccessModalActive = false; $router.push('/')">Close</button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ready: false,
      email: "",
      emailFieldType: "",
      emailMessage: "",
      username: "",
      usernameFieldType: "",
      usernameMessage: "",
      password: "",
      newsletter: false,
      isSuccessModalActive: false
    };
  },
  mounted() {
    this.ready = true;
  },
  methods: {
    async checkEmail() {
      if (this.email.length > 0 && this.email.includes("@")) {
        const params = { email: this.email };
        const data = await this.$axios.$get("check/email-exists/", { params });
        if (data.email_exists) {
          this.emailFieldType = "is-danger";
          this.emailMessage = "This email account already exists";
        } else {
          this.emailFieldType = "is-success";
          this.emailMessage = "";
        }
      } else {
        this.emailFieldType = "is-danger";
      }
    },
    async checkUsername() {
      if (this.username.length > 0) {
        const params = { username: this.username };
        const data = await this.$axios.$get("check/username-exists/", {
          params
        });
        if (data.username_exists) {
          this.usernameFieldType = "is-danger";
          this.usernameMessage = "This username has already been claimed";
        } else {
          this.usernameFieldType = "is-success";
          this.usernameMessage = "";
        }
      } else {
        this.usernameFieldType = "is-danger";
      }
    },
    async registerUser() {
      const result = await this.$axios.$post("create/user/", {
        email: this.email,
        username: this.username,
        password: this.password,
        language: "en",
        receive_emails: this.newsletter
      });

      if (result.success) {
        this.isSuccessModalActive = true;
      }
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
