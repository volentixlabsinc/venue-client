<template>
  <section>
    <div class="card">
      <header class="card-header">
        <h2 class="card-header-title">{{ $t("labels.invite_form_header") }}</h2>
      </header>
      <div class="card-content has-text-left">
        <form method="POST" @submit.prevent="sendReferralEmail">
          <b-field>
            <b-input v-model="emails" :placeholder="$t('settings.emails_input')" expanded type="input"/>
            <p class="control">
              <button class="button is-venue-purple">{{ $t("buttons.btn_send_email") }}</button>
            </p>
          </b-field>
          <span class="is-size-7 has-text-grey"> {{ $t("messages.invite_friend_note") }} </span>
          <p v-show="message" class="is-size-6 has-text-success">{{ message }}</p>
        </form>
        <hr>
        <b-field>
          <b-input v-model="referralLink" expanded type="input"/>
          <button v-clipboard:copy="referralLink" class="button is-primary">{{ $t("buttons.btn_copy_link") }}</button>
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
      referralLink: "",
      emails: "",
      message: ""
    };
    const hasStats =
      this.$store.state.user.isAuthenticated &&
      this.$store.state.userStats.fresh === false;

    if (hasStats) {
      Object.assign(data, {
        referralCode: this.$store.state.user.referral_code
      });
    }
    return data;
  },
  mounted() {
    this.addReferralLink();
  },
  methods: {
    async sendReferralEmail() {
      let emailsList = this.emails.replace(" ", "");
      let referralEmails = emailsList.split(",");
      const result = await this.$axios.$post("/manage/send-referrals/", {
        emails: referralEmails
      });
      console.log(result);
      if (result.result === true) {
        this.displaySuccessMessage();
      }
      this.emails = "";
    },
    displaySuccessMessage() {
      this.message = this.$t("messages.email_is_sent");
    },
    async addReferralLink() {
      this.referralLink =
        "https://venue.volentix.io/signup?referer=" + this.referralCode;
    }
  }
};
</script>
