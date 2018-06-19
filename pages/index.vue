<template>
  <div>
    <feedbackModal v-if="ready" @feedbackEmits="recieveAction"/>
  </div>
</template>

<script>
import feedbackModal from "~/components/feedbackModal.vue";
export default {
  components: {
    feedbackModal
  },
  data() {
    return {
      ready: false
    };
  },
  mounted() {
    this.showConfirmationMessage();

    this.ready = true;
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
