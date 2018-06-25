<template>
  <modal height="auto" name="MyProfileModal" @before-open="beforeOpen" @before-close="beforeClose">
    <div v-if="!showSuccess && !showError.error" class="card" style="height:100%">
      <header class="card-header" >
        <h1 class="card-header-title title has-text-white">Change {{ request }}</h1>
        <a class="button card-header-icon is-primary is-outlined" style="width:auto" @click="$modal.hide('MyProfileModal')">X</a>
      </header>
      <div class="card-content" style="height:100%">
        <div class="field is-horizontal" >
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
        </div>
        <footer class="card-footer">
          <div class="card-footer-item">
            <input class="button is-pulled-right is-primary" type="submit" value="Change" @click="fetchChange()">
          </div>
        </footer>
      </div>
      
      
 
    </div>
    <div v-else-if="showSuccess.show" class="card">
      <div class="card-content is-vcentered has-text-centered">
       
        <h1 class="title has-text-success">{{ showSuccess.message }}</h1>
        <footer class="card-footer">
          <div class="card-footer-item">
            <input class="button" value="Close" @click="$modal.hide('MyProfileModal')" @keyup.enter="$modal.hide('MyProfileModal')">
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
export default {
  name: "MyProfileModal",
  data: function() {
    return {
      currentData: "",
      currentDataAnswer: "",
      request: "",
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
      actionRequested: undefined,
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
      this.request = event.params.request;
      this.currentData = event.params.currentData;
      this.actionRequested = event.params.fetchRequest;
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
