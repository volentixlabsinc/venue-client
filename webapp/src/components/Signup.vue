<template>
  <div>
    <h3 class="title text-transform-uppercase">{{ $t('nav.sign_up') }}</h3>
    <form method="POST" @submit.prevent="registerUser">
      <b-field :type="emailFieldType" :message="emailMessage" :label="$t('labels.email')">
        <b-input v-model="email" type="email" name="email" required @blur="checkEmail()"/>
      </b-field>
      <b-field :type="usernameFieldType" :message="usernameMessage" :label="$t('labels.username')">
        <b-input v-model="username" name="username" maxlength="25" required @blur="checkUsername()" />
      </b-field>
      <b-field :label="$t('settings.password')">
        <b-input v-model="password" minlength="6" type="password" name="password" required password-reveal/>
      </b-field>
      <div class="field" v-html="$t('auth.msg_policies', ['https://volentix.io/privacy.html', '/terms'])"/>
      <div>
        <label class="checkbox">
          <input v-model="stmt1Agreed" type="checkbox">
          {{ $t("auth.msg_accept_1") }}
        </label>
        <label class="checkbox">
          <input v-model="stmt2Agreed" type="checkbox">
          {{ $t("auth.msg_accept_2") }}
        </label>
      </div>
      <b-field>
        <button :disabled="!(stmt1Agreed && stmt2Agreed)" class="button is-primary m-t-md" type="submit">{{ $t('nav.sign_up') }}</button>
      </b-field>
    </form>
    <b-modal :active.sync="isSuccessModalActive" @close="$router.push(localizedRoute('/', $i18n.locale))">
      <div class="modal-card">
        <div class="modal-card-body">
          <p>
            {{ $t('auth.msg_email_verification') }}
          </p>
          <br>
          <p>
            {{ $t('auth.msg_email_check_spam_folder') }}
          </p>
        </div>
        <div class="modal-card-foot">
          <button class="button" type="button" @click="isSuccessModalActive = false; $router.push(localizedRoute('/', $i18n.locale))">{{ $t('buttons.btn_close') }}</button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";

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
      newsletter: true,
      isSuccessModalActive: false,
      referral_code: "",
      stmt1Agreed: false,
      stmt2Agreed: false
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
      try {
        const result = await this.signUpCognito();
        // const result = await Promise.all([
        //   this.signUpCognito(),
        //   this.signUpLegacy()
        // ]);
        console.log("signUp result", result);
        this.isSuccessModalActive = true;
      } catch (err) {
        // TODO show error to user
        console.error(err);
      }
    },
    signUpCognito() {
      return Auth.signUp({
        username: this.username,
        password: this.password,
        attributes: {
          email: this.email,
          locale: "en"
        }
      });
    }
    // signUpLegacy() {
    //   return this.$axios.$post("create/user/", {
    //     email: this.email,
    //     username: this.username,
    //     password: this.password,
    //     language: "en",
    //     receive_emails: this.newsletter,
    //     referral_code: this.$route.query.code
    //   });
    // }
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
