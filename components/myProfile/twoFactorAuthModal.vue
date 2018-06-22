<template>
  <modal height="auto" name="twoFactorAuthModal" @before-open="beforeOpen" @before-close="beforeClose">
    <div v-if="!showSuccess && !showError.error" class="card" style="height:100%">
      <header class="card-header" >
        <h1 class="card-header-title title has-text-white"> {{ title }}</h1>
        <a class="button card-header-icon is-primary is-outlined" style="width:auto" @click="$modal.hide('twoFactorAuthModal')">X</a>
      </header>
      <div class="card-content" style="height:100%">
        <enable2FA v-if="!disable" :body-text="bodyText"/>
        <disable2FA v-else/>
        <!-- <div class="field is-horizontal" >
          <div class="field-label is-normal">
            <p class="has-text-white has-text-weight-semibold">Current</p>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control has-icons-left">
                <input v-model="currentData" :type="request" class="input" readonly>
              </p>
            </div>
          </div>
        </div>
        <h2 class="subtitle">Type your new {{ request }}</h2>
        <ul>
          <li v-for="error in errors" :key="error.id" class="venue-text has-text-danger">{{ error[0] ? error[0].msg: '' }} </li>
        </ul>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <p class="has-text-white has-text-weight-semibold">New</p>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control has-icons-left">
                <input v-validate="'required'" v-model="newData" :type="request" name="new" class="input is-normal" placeholder="New">
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <p class="has-text-white has-text-weight-semibold">Confirm</p>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control has-icons-left">
                <input v-validate="'required'" v-model="confirmation" :type="request" name="confirmation" class="input is-normal" placeholder="Confirm" @keyup.enter="fetchChange()">
                
              </p>
            </div>
          </div>
        </div> -->
        
      </div>
      
      <footer class="card-footer">
        <div class="card-footer-item">
          <input class="button is-pulled-right is-primary" type="submit" value="Change" @click="fetchChange()">
        </div>
      </footer>
 
    </div>
    <div v-else-if="showSuccess.show" class="card">
      <div class="card-content is-vcentered has-text-centered">
       
        <h1 class="title has-text-success">{{ showSuccess.message }}</h1>
        <footer class="card-footer">
          <div class="card-footer-item">
            <input class="button" value="Close" @click="$modal.hide('twoFactorAuthModal')" @keyup.enter="$modal.hide('twoFactorAuthModal')">
          </div>
        </footer>
        
      </div>
    </div>
    <div v-else-if="showError.error" class="card">
      <div class="card-content" style="height:100%">
        <h2 class="subtitle has-text-danger">{{ showError.message }}</h2>
        <footer class="card-footer">
          <div class="card-footer-item">
            <input class="button" value=" Click here to try again" @click="showError.error=!showError.error" @keyup.enter="showError.error=!showError.error" >
          </div>
        </footer>
      </div>
    </div>
  </modal>
</template>

<script>
import enable2FA from "~/components/myProfile/enable2FA.vue";
import disable2FA from "~/components/myProfile/disable2FA.vue";
export default {
  name: "TwoFactorAuthModal",
  components: {
    enable2FA,
    disable2FA
  },
  data: function() {
    return {
      disable: "",
      bodyText: "",
      title: "",
      newData: "",
      confirmation: "",
      showSuccess: {
        show: false,
        message: "Success!"
      },
      showError: {
        error: false,
        message: ""
      },
      NewUserInfo: {}
    };
  },
  computed: {
    requestedAction: function() {
      return this.request;
    }
  },
  mounted() {
    this.showSuccess = false;
  },
  methods: {
    beforeOpen(event) {
      this.title = event.params.title;
      this.disable = event.params.disable;
      this.bodyText = event.params.bodyText;
    },
    beforeClose() {
      this.actionRequested = undefined;
      this.showSuccess = false;
      this.showError = {
        error: false,
        message: ""
      };
      this.newData = "";
      this.confirmation = "";
      this.currentData = "";
      this.currentDataAnswer = "";
      this.$emit("userData", this.retrieveUserInfo());
    },
    async fetchChange() {
      if (this.newData === this.confirmation) {
        this.actionRequested(this.newData)
          .then(result => {
            if (result.status) {
              this.showSuccess = {
                error: true
              };
            }
          })
          .catch(er => {
            if (er.message === "Request failed with status code 302") {
              this.showError = {
                error: true,
                message: `This ${this.request} seems to already exist`
              };
            }
            this.newData = "";
            this.confirmation = "";
          });
      } else {
        this.showError = {
          error: true,
          message: `New ${this.request} and confirmation ${
            this.request
          } have to match`
        };
        this.newData = "";
        this.confirmation = "";
      }
    },
    async retrieveUserInfo() {
      return await this.$axios.$get("/retrieve/user/");
    }
  }
};
</script>
