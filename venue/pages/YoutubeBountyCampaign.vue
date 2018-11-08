<template>
  <div>
    <div class="box m-l-xxl m-r-xxl m-t-lg p-l-none p-r-none">
      <img src="~/assets/youtube-campaign-banner.jpg">
      <div>
        <div class="has-text-centered">Welcome, please follow the steps</div>

        <div class="m-l-xxl m-r-xxl m-t-lg">
          <section class="m-t-lg m-b-lg">
            <div class="is-4 has-text-weight-bold">Step <span class="step-num">1</span> Read the rules</div>
            <hr>
            <b-collapse :open="showRules">
              <div class="content">                
                <!-- TODO Load HTML from separate file; I couldn't find how to do it this way -->
                <!-- {{ require("~/static/telegram-rules.html") }} -->
                
                <h4 class="title-4">General Rules</h4>
                <ul>
                  <li>ONLY DISCUSS BOUNTY-CAMPAIGNS IN VENUE TELEGRAM.</li>
                  <li>First week of the bounty campaign started on the 4th of September 2018.</li>
                  <li>Follower/Friend number cannot negatively/significantly change while campaign is running.</li>
                  <li>Volentix reserves the right to eliminate you if it is thought that you have not been honest with your work.</li>
                  <li>Volentix reserves the right to change bounty campaign rules at any time.</li>
                  <li>Reward system may change based on the number of users participating in the campaign.</li>
                </ul>
                <h4 class="title-4">DO NOT:</h4>
                <ul>
                  <li>Use multiple accounts.</li>
                  <li>Cheat in any way.</li>
                  <li>Use someone else to manage your participation.</li>
                  <li>Use spamming or other mass marketing.</li>
                  <li>Do any kind of unethical behavior when participating in any one of the campaigns, you will be disqualified from all bonuses.</li>
                </ul>
              </div>
            </b-collapse>
            <div class="has-text-centered">
              <a class="button is-success is-outlined is-rounded" @click="showRules = !showRules">
                <span>Rules</span>
                <span class="icon">
                  <i v-if="showRules" class="fas fa-chevron-up fa-1g"/>
                  <i v-else class="fas fa-chevron-down fa-1g"/>
                </span>
              </a>
            </div>
          </section>
          <section class="m-t-lg m-b-lg">
            <div class="is-4 has-text-weight-bold">Step <span class="step-num">2</span> Enter URL of user-generated content</div>
            <hr>
            <div class="field m-l-none m-r-none ">
              <div class="control has-text-centered">
                <input v-model="youtubeUrl" class="input is-success" type="url" placeholder="https://youtu.be/my-content">
              </div>
            </div>
          </section>
          <section class="m-t-lg m-b-lg">
            <div class="is-4 has-text-weight-bold">Step <span class="step-num">4</span> Submit the data</div>
            <hr>
            <div class="has-text-centered">
              <a class="button is-success is-outlined is-rounded" @click="submit">Submit</a>
            </div>
          </section>
          <div>{{ submitResponse }}
          </div>
        </div>
      </div>
    </div>
</div></template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      youtubeUrl: "",
      showRules: false,
      submitResponse: ""
    };
  },
  methods: {
    async submit() {
      const data = {
        sheetName: "Youtube/Article",
        row: [
          this.$auth.user.username,
          this.$store.state.userStats.hasCampaignData
            ? this.$store.state.userStats.profile_level[0].forumUserId
            : "",
          this.youtubeUrl,
          this.$auth.user.email
        ]
      };

      try {
        // TODO Show spinner
        const res = await this.$axios.post(
          // TODO Pull this from stack.json
          // Uncomment for dev stage
          "https://8m9tvoerie.execute-api.eu-central-1.amazonaws.com/dev/googlesheets/append",
          // "https://h98rl1d9wl.execute-api.eu-central-1.amazonaws.com/production/googlesheets/append",
          data
        );
        if (res.status === 200) {
          this.submitResponse =
            "You have been registered for the YouTube bounty campaign.";
        } else {
          this.submitResponse =
            "A failure occurred attempting to register; please send us a message on Telegram for support";
        }
        // TODO Handle error
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<style scoped>
.step-num {
  background: #84429a;
  border-radius: 0.8em;
  -moz-border-radius: 0.8em;
  -webkit-border-radius: 0.8em;
  color: white;
  display: inline-block;
  font-weight: bold;
  line-height: 1.6em;
  margin-right: 5px;
  text-align: center;
  width: 1.6em;
}

hr {
  margin: -0.4rem -4rem 1rem;
}

input.input {
  max-width: 20rem;
}
</style>
