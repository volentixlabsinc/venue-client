<template>
  <div>
    <div class="level">
      <div class="level-item has-text-centered">
        <p class="title">Follow on:</p>
      </div>
      <div class="level-item has-text-centered">
        <p class="title">Medium</p>
      </div>
      <div class="level-item has-text-centered">
        <p class="title">Twitter</p>
      </div>
      <div class="level-item has-text-centered">
        <p class="title">Telegram</p>
      </div>
    </div>
    <div class="level">
      <div class="columns">
        <div class="column is-three-fifths">
          <leaderboard :shortened-leaderboard="true" :limit="5"/>
        </div>
        <div class="column is-one-third">
          <indexJoinCampaign/>
          
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

export default {
  components: {
    feedbackModal,
    leaderboard,
    indexSections,
    indexJoinCampaign
  },
  data() {
    return {
      ready: false,
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
