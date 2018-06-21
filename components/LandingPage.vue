<template>
  <div>
    <div class="level" >
      <div class="level-item has-text-centered m-r-lg">
        <p class="title">Follow on:</p>
      </div>
      <a target="_blank" href="https://medium.com/@marketing_33515" class="level-item has-text-centered m-r-lg">
        <img src="~/static/img/logos/Medium.png">
      </a>
      <a target="_blank" href="https://twitter.com/Volentix" class="level-item has-text-centered m-r-lg">
        <img src="~/static/img/logos/twitter.png">
      </a>
      <a target="_blank" href="https://t.me/volentix" class="level-item has-text-centered m-r-lg">
        <img src="~/static/img/logos/telegram.png">
      </a>
    </div>
    <div class="columns">
      <div class="level">
        <div class="column is-7 border-column">
          <campaign-right-panel :columns="true" :limit="5"/>
        </div>
        <div class="column is-4 m-r-lg">
          <indexJoinCampaign v-if="(!isAuthenticated)"/>
          <index-logged-in v-else/>
        </div>
      </div>
    </div>
    <div v-for="(el, index) in contents" :key="index">
      <index-sections :title="el.title" :content="el.content" :is-authenticated="isAuthenticated"/>
    </div>
  </div>
</template>

<script>
import leaderboard from "~/components/leaderboard/index.vue";
import indexSections from "~/components/indexSections.vue";
import indexJoinCampaign from "~/components/indexJoinCampaign.vue";
import indexLoggedIn from "~/components/indexLoggedIn.vue";
import CampaignRightPanel from "~/components/campaignRightPanel.vue";

export default {
  components: {
    leaderboard,
    indexSections,
    indexJoinCampaign,
    CampaignRightPanel,
    indexLoggedIn
  },
  data() {
    return {
      ready: false,
      isAuthenticated: this.$store.state.user.isAuthenticated,
      contents: [
        {
          title: "Campaigns",
          content: [
            {
              text: "Bitcointalk",
              linkText: "Join",
              disabled: false
            },
            {
              text: "Facebook",
              linkText: "Coming Soon",
              disabled: true
            },
            {
              text: "Reddit",
              linkText: "Coming Soon",
              disabled: true
            },
            {
              text: "Twitter",
              linkText: "Coming Soon",
              disabled: true
            }
          ]
        },

        {
          title: "Bounties",
          content: [
            {
              text: "Volentix",
              linkText: "Coming Soon",
              disabled: true
            },
            {
              text: "Venue",
              linkText: "Coming Soon",
              disabled: true
            },
            {
              text: "VDX",
              linkText: "Coming Soon",
              disabled: true
            },
            {
              text: "Vespucci",
              linkText: "Coming Soon",
              disabled: true
            }
          ]
        },

        {
          title: "Proposals",
          content: [
            {
              text: "VLabs",
              linkText: "Coming Soon",
              disabled: true
            },
            {
              text: "Public",
              linkText: "Coming Soon",
              disabled: true
            },
            {
              text: "Accepted",
              linkText: "Coming Soon",
              disabled: true
            },
            {
              text: "Completed",
              linkText: "Coming Soon",
              disabled: true
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.showConfirmationMessage();
  },
  methods: {
    //TODO
    // find another solution the modal is not rendered, may be a lifecycle problem
    showConfirmationMessage() {
      const hash = this.$route.hash;
      if (hash === "#/?email_confirmed=1") {
        this.$modal.show("feedbackModal", {
          type: "success",
          title: "Verified!",
          message: "You can now log in",
          buttonText: "Log In",
          sendActionToFeedback: true
        });
      }
    },
    recieveAction() {
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
.level-item {
  width: 15% !important;
}
.border-column {
  border: 1px solid grey;
}
</style>
