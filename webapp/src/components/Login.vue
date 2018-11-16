<template>
  <div>
    <h3 class="title text-transform-uppercase">{{ $t('titles.login') }}</h3>
    <form method="POST" @submit="authenticateLogin($event)">
      <p v-show="showMessageError.error" class="is-size-6 has-text-danger">{{ showMessageError.message }}</p>
      <b-field label="Username">
        <b-input v-model="username" type="text" required/>
      </b-field>
      <b-field label="Password">
        <b-input v-model="password" type="password" required password-reveal/>
      </b-field>
      <b-field>
        <div class="control">
          <button
            type="submit"
            class="button is-primary">{{ $t('nav.log_in') }}</button>
        </div>
      </b-field>
      <a href="#" @click="isForgotPasswordModalActive = true">{{ $t('auth.forgot_password') }}</a>
    </form>

    <b-modal :active.sync="isForgotPasswordModalActive">
      <form class="card">
        <header class="card-header">
          <div class="card-header-title">{{ $t('auth.title_reset_password') }}</div>
        </header>
        <div class="card-content">
          <div class="content">
            <div>{{ $t('auth.msg_reset_password') }}</div>
            <b-field label="Email">
              <b-input v-model="email" type="email" required/>
            </b-field>
          </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item" @click="isForgotPasswordModalActive = false">{{ $t('buttons.btn_cancel') }}</a>
          <a class="card-footer-item" type="submit" @click="resetPassword">{{ $t('auth.title_reset_password') }}</a>
        </footer>
      </form>
    </b-modal>
  </div>
</template>


<script>
import { Auth } from "aws-amplify";
import { loadUserData, logAxiosError } from "~/assets/utils.js";

export default {
  data() {
    return {
      loginError: false,
      username: "",
      password: "",
      email: "",
      showMessageError: {
        error: true,
        message: "",
        authResponse: null
      },
      isForgotPasswordModalActive: false
    };
  },
  mounted() {
    if (this.$route.query.email_confirmed == 1) {
      this.$snackbar.open(this.$t("auth.msg_verified"));
    }
  },
  methods: {
    async authenticateLogin(event) {
      event.preventDefault();
      this.loginError = false;

      try {
        const user = await this.signInCognitoUser();
        console.log("authenticated user", user);

        await this.$store.commit("user/authenticated", user);

        this.redirect();
      } catch (err) {
        logAxiosError("Cognito login", err);
        if (err.response && err.response.data && err.response.data.error_code) {
          const errorCode = err.response.data.error_code;
          this.displayErrorMessage(errorCode);
        } else {
          this.displayErrorMessage(err);
        }
      }

      // Sign into the BTT server because now we have the username and password, but don't
      // gate proper signin on its success. Note that this must be done after the
      // signInCognitoUser function because it might migrate the user from BTT server into
      // User Pool, and since BTT server now uses that to authenticate, it must be done
      // before successful BTT authentication
      this.signInBttUser()
        .then(async user => {
          console.log("Successful signin to BTT");
          this.$store.commit("user/SET_BTT_TOKEN", user.token);

          try {
            await loadUserData(this.$store.commit, this.$axios);
          } catch (err) {
            logAxiosError("loadUserData", err);
          }
        })
        .catch(err => {
          logAxiosError("BTT login", err);
        });
    },
    async signInCognitoUser() {
      let awsUser = await Auth.signIn(this.username, this.password);
      if (!awsUser.attributes) {
        awsUser = await Auth.currentAuthenticatedUser();
      }
      // Note that user.username can never be changed, which is why we use preferred_username
      return {
        userId: awsUser.attributes["custom:legacy_id"],
        username: awsUser.attributes.preferred_username || awsUser.username,
        language: awsUser.attributes.locale,
        referral_code: awsUser.attributes["custom: referral_code"]
      };
    },
    async signInBttUser() {
      return await this.$axios.$post("/authenticate/", {
        username: this.username,
        password: this.password
      });
    },
    redirect() {
      let redirectPath;
      if (this.$route.query.redirect) {
        redirectPath = this.$route.query.redirect;
      } else if (this.$store.state.userStats.hasCampaignData) {
        redirectPath = "/dashboard";
      } else {
        redirectPath = "/";
      }
      this.$router.push(this.localizedRoute(redirectPath, this.$i18n.locale));
    },
    displayErrorMessage(error) {
      this.showMessageError.error = true;
      if (error === "wrong_credentials") {
        this.showMessageError.message = this.$t("auth.err_password");
      } else if (error === "email_verification_required") {
        this.showMessageError.message = this.$t("auth.msg_not_verified");
      } else if (error.message) {
        this.showMessageError.message = error.message;
      } else {
        this.showMessageError.message = error;
      }
    },
    async resetPassword() {
      const authResponse = await this.$axios.$post("/manage/reset-password/", {
        action: "request",
        email: this.email
      });
      if (authResponse.success === true) {
        this.isForgotPasswordModalActive = false;
      }
    }
  }
};
</script>

<style scoped>
form > a {
  text-decoration: underline;
}
</style>
