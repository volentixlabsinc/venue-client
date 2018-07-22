<template>
  <form @submit.prevent="checkProfile">
    <b-field :message="message" :type="type">
      <b-input v-model="forumUserId" :loading="loading" expanded placeholder="Your user id" required @input="clearWarnings()"/>
      <div class="control"><button :disabled="forumUserId.length === 0" class="button is-primary" type="submit">{{ $t('buttons.btn_verify') }}</button></div>
    </b-field>
  </form>
</template>

<script>
const BITCOINTALK_FORUM_ID = 1;

export default {
  data() {
    return {
      forumUserId: "",
      forumProfile: "",
      type: "",
      message: "",
      loading: false
    };
  },
  methods: {
    async checkProfile() {
      if (this.forumUserId.length > 0) {
        this.loading = true;
        const params = {
          forum_id: BITCOINTALK_FORUM_ID,
          forum_user_id: this.forumUserId
        };

        try {
          const profile = await this.$axios.$get("/check/profile/", { params });
          console.log("profile", profile);
          this.loading = false;
          if (profile.exists && !profile.own && profile.verified) {
            this.type = "is-danger";
            this.message = "This id is already attached to a Venue profile";
          } else if (!profile.position_allowed) {
            this.type = "is-danger";
            this.message =
              "You must be at least a bitcointalk full member to join this campaign";
          } else if (!profile.found) {
            this.type = "is-danger";
            this.message =
              "Profile not found; please verify that you copied the correct userid";
          } else {
            this.type = "is-success";
            this.message = "";
            this.$emit("verified", this.forumUserId);
            if (!profile.own) {
              profile.forum_profile_id = "";
            }
            this.$store.commit("setForumProfile", profile);
          }
        } catch (e) {
          this.loading = false;
          this.type = "is-danger";
          this.message = [
            "Profile not found.",
            "Please verify that you copied the correct userid"
          ];
        }
      } else {
        this.type = "is-danger";
      }
    },
    clearWarnings() {
      this.type = "";
      this.message = "";
    }
  }
};
</script>
