<template>
  <section class="section">
    <div class="container">
        <div class="bctalk-join">
            <h2>STEP {{ step }}</h2>
            <form v-on:submit.prevent class="stepform">
                <div class="form-group" v-if="step === 1">
                    <label class="directive">PLEASE INPUT YOUR BITCOINTALK <span class="emphasis">USERID</span> BELOW AND CLICK "NEXT"</label>
                    <input type="text" v-model="userId" id="userid" placeholder="Your user id" class="form-control form-control-lg"/>
                    <button class="btn btn-primary" @click="validateId">NEXT</button>
                    <span v-if="error" style="color:red; display:block;">
                        <i class="fas fa-times-circle"></i> User not found - please try Again
                    </span>
                    <span class="joinhelptxt" @click="showHelp = true">How do I find my bitcointalk user id?</span>
                </div>
                <div class="form-group" v-if="step === 2">
                    <label class="directive">PLEASE CHOOSE YOUR NEW SIGNATURE BELOW</label>
                    <AvailableSignatures />
                    <button class="btn btn-primary" @click="doNext">NEXT</button>
                </div>
                <div class="form-group" v-if="step === 3">
                    <label class="directive">COPY THE CODE BELOW AND PASTE IT INTO YOUR FORUM SIGNATURE. CLICK VERIFY. </label>
                    <input type="textarea" rows="4" cols="50" 
                        v-model="message"
                        disabled
                        v-clipboard:copy="message"
                        v-clipboard:success="onCopy"
                        v-clipboard:error="onError" />
                    <button  
                        v-clipboard:copy="message"
                        v-clipboard:success="onCopy"
                        v-clipboard:error="onError"
                        class="btn btn-primary">Copy</button>
                    <button class="btn btn-danger" @click="verify">Verify</button>
                </div>
        
            </form>
            <ModalWidget v-if="showHelp" @close="showHelp = false">
                <HelpImages slot="body"/>
            </ModalWidget>
        </div>
        <div class="lbox">
            <h2>Leaderboard</h2>
            <leaderboard/>
        </div>
    </div>
</section>
</template>


<script>
import HorizontalStepper from "vue-stepper";
import leaderboard from "~/components/leaderboard";

// >>> #68
import ModalWidget from "~/components/ModalWidget.vue";
import HelpImages from "~/components/HelpImages.vue";
import {
  checkProfile,
  createForumProfile
} from "~/services/signatures";
import { retrieveForumProfiles } from "~/services/forum";
import AvailableSignatures from "~/components/AvailableSignatures.vue";
import { createSignature } from "~/services/signatures";
// <<<

export default {
  components: {
    HorizontalStepper,
    ModalWidget,
    HelpImages,
    AvailableSignatures,
    leaderboard
  },
  data() {
    return {
      activeProfile: "",
      activeForum: "",
      showHelp: false,
      disableProceed: true,
      step: 1,
      userId: "",
      error: undefined,
      message: "",
      check: false
    };
  },
  methods: {
    // >>> #68
    doNext(evt) {
      if (evt) {
        evt.preventDefault();
      }
      this.step = this.step + 1;
    },
    doPrevious(evt) {
      if (evt) {
        evt.preventDefault();
      }
      this.step = this.step - 1;
    },
    validateId: function(evt) {
      //this.$emit('can-continue', {value: true});
      evt.preventDefault();

      //forum profile create?
      const scope = this;
      checkProfile(this.userId, 1).then(response => {
        if (!response.found) {
          scope.error = true;
        } else {
          // Inform that the user account was found
          // this.$swal({
          //     text: "User account found"
          // })
          const forumProfile = response.exists;
          if (!forumProfile) {
            //create profile
            scope.createForumProfile(this.userId, 1).then(res => {
              console.log("Creating Forum Proile", res);
            });
          } else {
            //retrieveForumProflie
            retrieveForumProfiles("1", this.userId).then(response => {
              var activeUserForum = this.$store.state.activeUserForum;
              var activeUserForumUpdate = Object.assign(
                { activeUserForum },
                {
                  userId: this.userId,
                  forumId: 1,
                  forumProfileId: response.forum_profiles[0].id
                }
              );
              scope.$store.dispatch(
                "changeActiveUserForumAction",
                activeUserForumUpdate
              );
            });
          }
          scope.error = false;
          scope.doNext();
        }
      });
    },
    createForumProfile: function(profile_url, forum_id) {
      createForumProfile(profile_url, forum_id, true)
        .then(res => {
          var activeUserForum = this.$store.state.activeUserForum;
          var activeUserForumUpdate = Object.assign(
            { activeUserForum },
            {
              userId: this.userId,
              forumId: 1,
              forumProfileId: res.forum_profiles[0].id
            }
          );
          scope.$store.dispatch(
            "changeActiveUserForumAction",
            activeUserForumUpdate
          );

          console.log("CREATIG FORUM PROFILE ANDD.....", res);
          //this.$emit("can-continue", { value: true });
        })
        .then(() => {
          this.$swal({
            text: "User account found"
          });
        })
        .catch(err => {
          console.log("Something went wrong", err);
        });
    },
    // <<<

    changeActiveForm(payload) {
      console.log("changeactive forum triggering");
      this.activeProfile = payload.userId;
      this.changeActiveForum = payload.forumId;
    },
    onCopy: function(e) {
        // FIXME 
        // this.$swal("You just copied: ", e.text);
    },
    onError: function(e) {
      alert("Failed to copy texts");
    },
    verify: function() {
      console.log("Verifying");
      var forum_profile_id = this.$store.state.signatures.activeUserForum.forumProfileId;
      var signature_id = this.$store.state.signatures.activeUserForum.activeSignature.id;

      createSignature(forum_profile_id, signature_id, true)
        .then(res => {
          return res.json();
        })
        .then(data => {
          if (data.success) {
            console.log("Success Triggered");
            this.$swal({
              title: "Signature Placement Verified",
              text: "You can now start posting and earning VTX",
              icon: "success",
              button: {
                text: "ok",
                className: "btn-primary",
                closeModal: true
              }
            }).then(() => {
              this.$router.push("/campaign");
            });
          } else {
            console.log("Un success was triggered", res);
            this.$swal({
              title: "The signature was not found",
              text: "Unfortunately the signature was not found",
              icon: "error",
              button: {
                text: "OK",
                className: "btn-primary",
                closeModal: true
              }
            });
          }
        });
    }
  },
  mounted() {
    var userIdState = this.$store.state.signatures.activeUserForum.userId;
    if (userIdState) {
      this.userId = userIdState;
    } else {
      this.userId = "";
    }

    this.$emit("can-continue", { value: true });
    var fetchedMessage = this.$store.state.signatures.activeUserForum.activeSignature; //.code;
    if (fetchedMessage) {
      this.message = fetchedMessage.code || "";
    } else {
      userId = "";
    }
  }
};
</script>

<style scoped>
.section {
  height: 100%;
  width: 90%;
  overflow-x: auto;
  overflow-y: auto;
  scrollbar-face-color: #367cd2;
  scrollbar-shadow-color: #ffffff;
  scrollbar-highlight-color: #ffffff;
  scrollbar-3dlight-color: #ffffff;
  scrollbar-darkshadow-color: #ffffff;
  scrollbar-track-color: #ffffff;
  scrollbar-arrow-color: #ffffff;
}

.section::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.section::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
  -webkit-border-radius: 0px;
  border-radius: 0px;
  background-clip: content-box;
}

/* Handle */
.section::-webkit-scrollbar-thumb {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.3);
}

.stepper-box {
  border-radius: 10px;
  width: 100%;
  height: 80%;
  overflow: scroll;
}
/* >>> #68 - add leaderboard on rhs */
.lbox h2 {
  color: #97a5b3;
}
.container {
  display: flex;
  align-items: baseline;
}

.lbox {
  /* based off of css in dashboard/allCampaigns.vue */
  /*padding-top: 20px;*/
  padding-top: 2rem;
  width: 70%; /*90%;*/
  height: 100%;
  display: inherit;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-face-color: #367cd2;
  scrollbar-shadow-color: #ffffff;
  scrollbar-highlight-color: #ffffff;
  scrollbar-3dlight-color: #ffffff;
  scrollbar-darkshadow-color: #ffffff;
  scrollbar-track-color: #ffffff;
  scrollbar-arrow-color: #ffffff;
  padding-bottom: 50px;
}

.lbox::-webkit-scrollbar {
  width: 0px;
}

.lbox::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0);
  -webkit-border-radius: 0px;
  border-radius: 0px;
  background-clip: content-box;
}

.lbox::-webkit-scrollbar-thumb {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 25px rgba(0, 0, 0, 0);
  box-shadow: inset 0 0 25px rgba(0, 0, 0, 0);
}
/* <<< */
</style>

<style>
#app .lbox table tbody td {
  color: white;
}
@media only screen and (max-width: 1300px) {
  #app .lbox th.RANK,
  #app .lbox th.USERNAME,
  #app .lbox th.POSTS,
  #app .lbox th.VTX,
  #app .lbox table tbody td {
    font-size: 0.9rem;
  }
}
@media only screen and (max-width: 1100px) {
  #app .lbox {
    display: none;
  }
}
@media only screen and (max-width: 600px) {
  #app .step-image {
    width: 95%;
  }
}
.stepform form {
  margin: 0;
  padding: 10px;
  border-radius: 8px;
  background-color: #484a5d;
}
.stepform form ul {
  padding: 0;
}
</style>


<style scoped>
/* #68 - corrected layout */
.emphasis {
  text-decoration: underline;
}
h2 {
  color: #97a5b3;
}
.button-group {
  display: flex;
}
.bctalk-join,
form.stepform {
  padding: 0 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
}
form.stepform input,
form.stepform button,
form.stepform label {
  width: 50%;
  max-width: 500px;
  padding: 0.75rem;
  font-size: 1rem;
}
form.stepform label {
  /* text-align: justify; */
  display: inline-block;
  color: #97a5b3;
  font-size: 95%;
  padding: 1rem;
}
form.stepform input {
  width: 45%;
}
form.stepform input[type=textarea] {
    height: 100px;
    overflow-wrap: break-word;
}
span.joinhelptxt {
  display: block;
  color: #97a5b3;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 1rem;
}
span.joinhelptxt:hover {
  color: #85449a;
}
.joinhelp {
  padding: 2rem;
}
</style>
