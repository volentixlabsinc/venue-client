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
        const [cognitoUser, bttUser] = await Promise.all([
          this.loadCognitoUser(),
          this.loadBttUser()
        ]);

        const user = Object.assign({}, cognitoUser, { token: bttUser.token });

        console.log("authenticated user", user);

        await this.$store.commit("user/authenticated", user);
        await loadUserData(this.$store.commit, this.$axios);

        this.redirect();
      } catch (err) {
        logAxiosError("login", err);
        if (err.response && err.response.data && err.response.data.error_code) {
          const errorCode = err.response.data.error_code;
          this.displayErrorMessage(errorCode);
        } else {
          this.displayErrorMessage(err);
        }
        // if (err.code === "UserNotFoundException") {
        //   // TODO Put a dialog telling users that we are migrating
        //   const resp = await API.post("MigrateUser", "", {
        //     body: {
        //       // If the BASE_URL isn't set, I believe it is localhost (need to validate)
        //       authServerUrl:
        //         process.env.BASE_URL || "https://venue-dev.volentix.io",
        //       username: this.username,
        //       password: this.password
        //     }
        //   });
        //   console.log("Response from MigrateUser", resp);
        //   if (resp.message === "RETRY") {
        //     user = await Auth.signIn(this.username, this.password);
        //   } else {
        //     // user was not found
        //     this.showMessageError.message = this.$t("auth.err_password");
        //     return;
        //   }
        // } else {
        //   this.showMessageError.error = true;
        //   if (err.code === "NotAuthorizedException") {
        //     this.showMessageError.message = this.$t("auth.err_password");
        //   }
        // }
      }
    },
    async loadCognitoUser() {
      let awsUser = await Auth.signIn(this.username, this.password);
      if (!awsUser.attributes) {
        awsUser = await Auth.currentAuthenticatedUser();
      }
      console.log("awsUser", awsUser);
      // Note that user.username can never be changed, which is why we use preferred_username
      return {
        userId: awsUser.attributes["custom:legacy_id"],
        username: awsUser.attributes.preferred_username,
        language: awsUser.attributes.locale,
        referral_code: awsUser.attributes["custom: referral_code"]
      };
    },
    async loadBttUser() {
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
