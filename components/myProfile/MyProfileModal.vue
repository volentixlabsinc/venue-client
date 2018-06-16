<template>
  <modal :scrollable="true" height="auto" name="MyProfileModal" @before-open="beforeOpen" @before-close="beforeClose">
    <div class="card">
      <header class="card-header">
        <h1 class="title">Change {{ request }}</h1>
        <a class="button is-pulled-right" style="width:auto" @click="$modal.hide('MyProfileModal')">X</a>
      </header>
      <div v-if="!showSuccess && !showError.error" class="card-content">
        <div class="field is-horizontal" >
          <div class="field-label is-normal">
            <p class="has-text-white has-text-weight-semibold">Current</p>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control has-icons-left">
                <input v-model="currentData" :type="request" class="input" >
                
              </p>
            </div>
          </div>
        </div>
        <h2 class="subtitle">Type your new {{ request }}</h2>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <p class="has-text-white has-text-weight-semibold">New</p>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control has-icons-left">
                <input v-model="newData" :type="request" class="input is-normal" placeholder="New">
                
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
                <input v-model="confirmation" :type="request" class="input is-normal" placeholder="Confirm">
                
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
      <div v-else-if="showSuccess" class="card-content is-vcentered has-text-centered" style="height:100%; width:100%">
       
        <h1 class="title has-text-success">Success!</h1>
        <footer class="card-footer">
          <div class="card-footer-item">
            <input class="button" value="Close" @click="$modal.hide('MyProfileModal')" >
          </div>
        </footer>
        
      </div>
      <div v-else-if="showError.error" class="card-content">
        <h2 class="subtitle has-text-danger">{{ showError.message }}</h2>
        <footer class="card-footer">
          <div class="card-footer-item">
            <input class="button" value=" Click here to try again" @click="showError=!showError" >
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
      showSuccess: false,
      showError: {
        error: false,
        message: ""
      },
      actionRequested: undefined
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
    },
    async fetchChange() {
      if (this.currentData === this.confirmation) {
        this.actionRequested(this.newData)
          .then(result => {
            console.log("result", result);
            if (result.success) {
              this.showSuccess = true;
            }
          })
          .catch(er => {
            console.log(er);
            this.showError = {
              error: true,
              message: `This ${this.request} seems to already exist`
            };
            this.newData = "";
            this.confirmation = "";
          });
      } else {
        this.showError = {
          error: true,
          message: `New ${this.request} and confirmation ${
            this.request
          } don't match`
        };
        this.newData = "";
        this.confirmation = "";
      }
    }
  }
};
</script>
