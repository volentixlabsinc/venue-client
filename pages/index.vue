<template>
  <div>
    <div class="level" >
      <div class="level-item has-text-centered" style="width:15%!important">
        <p class="title">Follow on:</p>
      </div>
      <a target="_blank" href="https://medium.com/@marketing_33515" class="level-item has-text-centered" style="width:15%!important ">
        <img src="~/static/img/logos/Medium.png">
      </a>
      <a target="_blank" href="https://twitter.com/Volentix" class="level-item has-text-centered" style="width:15%!important">
        <img src="~/static/img/logos/twitter.png">
      </a>
      <a target="_blank" href="https://t.me/volentix" class="level-item has-text-centered" style="width:15%!important">
        <img src="~/static/img/logos/telegram.png">
      </a>
    </div>
    <div class="level">
      <div class="columns">
        <div class="column is-8">
          <div class="level">
            <leaderboard :shortened-leaderboard="true" :limit="6"/>
            <div class="level-item">
              <Stats :data-source="'campaign'"/>
              <availableRewards/>
            </div>
          </div>
        </div>
        <div class="column is-4 ">
          <indexJoinCampaign v-if="(!isAuthenticated)"/>
          <index-logged-in v-else/>
        </div>
      </div>
    </div>
    <div v-for="(el, index) in contents" :key="index">
      <index-sections :title="el.title" :content="el.content"/>
    </div>
    <!-- <feedbackModal v-if="ready" @feedbackEmits="recieveAction"/> -->
  </div>
</template>

<script>
import feedbackModal from "~/components/feedbackModal.vue";
import leaderboard from "~/components/leaderboard/index.vue";
import indexSections from "~/components/indexSections.vue";
import indexJoinCampaign from "~/components/indexJoinCampaign.vue";
import indexLoggedIn from "~/components/indexLoggedIn.vue";
import CampaignRightPanelTopSection from "~/components/CampaignRightPanelTopSection.vue";
import Stats from "~/components/Stats.vue";
import availableRewards from "~/components/availableRewards.vue";

export default {
  components: {
    feedbackModal,
    leaderboard,
    indexSections,
    indexJoinCampaign,
    CampaignRightPanelTopSection,
    Stats,
    availableRewards,
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
              linkText: "Join"
            },
            {
              text: "Facebook",
              linkText: "Coming Soon"
            },
            {
              text: "Reddit",
              linkText: "Coming Soon"
            },
            {
              text: "Twitter",
              linkText: "Coming Soon"
            }
          ]
        },

        {
          title: "Bounties",
          content: [
            {
              text: "Volentix",
              linkText: "Coming Soon"
            },
            {
              text: "Venue",
              linkText: "Coming Soon"
            },
            {
              text: "VDX",
              linkText: "Coming Soon"
            },
            {
              text: "Vespucci",
              linkText: "Coming Soon"
            }
          ]
        },

        {
          title: "Proposals",
          content: [
            {
              text: "Vlabs",
              linkText: "Coming Soon"
            },
            {
              text: "Public",
              linkText: "Coming Soon"
            },
            {
              text: "Accepted",
              linkText: "Coming Soon"
            },
            {
              text: "Completed",
              linkText: "Coming Soon"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.ready = true;
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
  margin: 20px !important;
}
</style>
