<template>
  <section>
    <div class="card">
      <header class="card-header">
        <h2 class="card-header-title">{{ $t("labels.invite_form_header") }}</h2>
      </header>
      <div class="card-content has-text-left">
        <form method="POST" @submit.prevent="sendReferralEmail">
          <b-field>
            <b-input v-model="emails" :placeholder="$t('settings.emails_input')" expanded type="text"/>
            <p class="control">
              <button class="button is-venue-purple">{{ $t("buttons.btn_send_email") }}</button>
            </p>
          </b-field>
          <span class="is-size-6 has-text-grey"> {{ $t("messages.invite_friend_note") }} </span>
          <p v-show="message" :class="{ 'has-text-success' : isSuccess, 'has-text-danger' : hasError }">{{ message }}</p>
        </form>
        <hr>
        <b-field>
          <b-input v-model="referralLink" expanded type="text"/>
          <button v-clipboard:copy="referralLink" class="button is-venue-purple">{{ $t("buttons.btn_copy_link") }}</button>
        </b-field> 
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    let data = {
      referralCode: "",
      referralLink: "https://venue.volentix.io/signup?referer=",
      emails: "",
      message: "",
      isSuccess: true,
      hasError: false
    };
    const hasStats =
      this.$store.state.user.isAuthenticated &&
      this.$store.state.userStats.fresh === false;

    if (hasStats) {
      Object.assign(data, {
        referralCode: this.$store.state.user.referral_code
      });
    }
    data.referralLink += data.referralCode;
    return data;
  },
  methods: {
    async sendReferralEmail() {
      let emailsList = this.emails.replace(" ", "");
      let referralEmails = emailsList.split(",");
      try {
        const result = await this.$axios.$post("/manage/send-referrals/", {
          emails: referralEmails
        });
        if (result.result === true) {
          this.displaySuccessMessage();
        }
      } catch (error) {
        this.displayErrorMessage();
      }
      this.emails = "";
    },
    displaySuccessMessage() {
      this.message = this.$t("messages.email_is_sent");
      this.isSuccess = true;
      this.hasError = false;
    },
    displayErrorMessage() {
      this.message = this.$t("messages.incorrect_email_input");
      this.hasError = true;
      this.isSuccess = false;
    }
  }
};
</script>

<style>
.card-content {
  padding: 3.5rem;
  padding-bottom: 4rem;
}
form {
  max-width: none;
}
</style>
