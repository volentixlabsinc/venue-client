<template>
  <modal name="MyProfileModal" @before-open="beforeOpen">
    <div v-if="!showSuccess && !showError" class="card" style="height:100%; width:100%">
      <header class="card-header">
        <h1 class="title">Change {{ request }}</h1>
        <a class="button is-pulled-right" style="width:auto" @click="$modal.hide('MyProfileModal')">X</a>
      </header>
      <div class="card-content">
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

        <input class="button is-pulled-right is-primary" type="submit" value="Change" @click="fetchRequest">
      </div>
      
    </div>
    <div v-else class="card is-vcentered has-text-centered" style="height:100%; width:100%">
      <h1 v-if="showSuccess" class="title">Success!</h1>
      <h1 v-if="showError" class="title">OOPS!</h1>
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
      showError: false
    };
  },
  computed: {
    requestedAction: function() {
      return this.request;
    }
  },
  methods: {
    beforeOpen(event) {
      this.request = event.params.request;
      this.currentData = event.params.currentData;
    },
    async fetchRequest() {
      console.log("services need to be enabled");
      //TODO

      // if (this.newData === this.confirmation) {
      //   if (this.request === "Username") {
      //     const result = await this.$axios.$post("/manage/change-username/", {
      //       username: this.newData
      //     });
      //     if (result.success) {
      //       this.showSuccess = true;
      //     }
      //   } else if (this.request === "Email") {
      //     console.log("this.axios", this.axios);
      //     const result = await this.axios.post("/manage/change-email/", {
      //       email: this.newData
      //     });
      //     console.log("result: ", result);
      //     if (result.success) {
      //       this.showSuccess = true;
      //     }
      //   }
      // } else {
      //   console.log(
      //     "this.newData === this.confirmation: ",
      //     this.newData === this.confirmation
      //   );
      //   console.log(
      //     "this.currentData === this.currentDataAnswer: ",
      //     this.currentData === this.currentDataAnswer
      //   );
      //   this.showError = true;
      // }
      this.showSuccess = true;
      this.newData = "";
      this.confirmation = "";
      this.currentData = "";
      this.currentDataAnswer = "";
    }
  }
};
</script>
