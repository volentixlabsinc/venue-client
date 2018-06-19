<template>
  <div style="min-height:300px" class="is-vcentered">
    <div v-if="imageNumber==1" class="userId-form">
      <h3>Click on profile</h3>
      <img src="/img/onboarding/bitcointalk/step1a_alt2.png" >
    </div>
    <img v-if="imageNumber==2" src="/img/onboarding/bitcointalk/step1b_alt.png" >
    <div v-if="imageNumber==3" class="userId-form">
      <h1 style="margin:0px">Step 3</h1>
      <h3>Paste your USERID below:</h3>
      <br>
      <footer>
        <div class="cloumns is-vcentered">
          <input v-model="forumUserId" class="input column is-one-third" placeholder="UserId">
          <button class="button is-primary is-half" @click="submitUserId">SUBMIT USERID</button>
        </div>
        <h2 v-show="showMessageError.error" class="has-text-danger">{{ showMessageError.message }}</h2>
      </footer>
    </div>
    
  </div>
</template>

<script>
import { registerForumUser } from "~/assets/utils";

export default {
  props: {
    imageNumber: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      profileData: null,
      forumUserId: null,
      forumId: 1,
      showMessageError: {
        error: true,
        message: ""
      }
    };
  },
  mounted() {
    // setInterval(this.swap, 4000);
  },
  methods: {
    submitUserId: async function() {
      try {
        this.profileData = await registerForumUser(
          this,
          this.forumId,
          this.forumUserId
        );
        if (
          this.profileData.success === true &&
          this.profileData.exists === true
        ) {
          this.$emit("userIdConfirmed", this.profileData);
        }
        if (this.profileData.exists && !this.profileData.success) {
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
      } catch (error) {
        this.showMessageError = {
          error: true,
          message:
            "You must be at least a bitcointalk full member to join this campaign"
        };
      }
    }
  }
};
</script>
