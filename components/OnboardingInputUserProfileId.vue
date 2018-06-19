<template>
  <div class="columns is-multiline">
    <div class="column">
      <input id="userid" v-model="forumUserId" type="text" placeholder="Your user id" class="input ">
      <p v-show="showMessageError.error" class="is-size-7 has-text-danger">{{ showMessageError.message }}</p>
    </div>
    <div class="column">
      <button class="button is-primary" @click="submitUserId">NEXT</button>
    </div>
              
  </div>
</template>

<script>
import { registerForumUser } from "~/assets/utils";

export default {
  data() {
    return {
      forumUserId: null,
      forumProfile: null,
      forumId: 1,
      showMessageError: {
        error: true,
        message: ""
      }
    };
  },
  methods: {
    submitUserId: async function() {
      try {
        this.forumProfile = await registerForumUser(
          this,
          this.forumId,
          this.forumUserId
        );
        if (this.forumProfile.success) {
          this.$emit("userIdConfirmed", this.forumProfile);
        } else {
          this.displayError();
        }
      } catch (error) {
        this.showMessageError = {
          error: true,
          message:
            "You must be at least a bitcointalk full member to join this campaign"
        };
      }
    },
    displayError() {
      if (this.forumProfile.exists) {
        this.showMessageError = {
          error: true,
          message: "This userid is already attached to a Venue profile"
        };
      } else {
        this.showMessageError = {
          error: true,
          message: "Verify that you copied the correct userid"
        };
      }
    }
  }
};
</script>
