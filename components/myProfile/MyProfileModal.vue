<template>
  <modal name="MyProfileModal" @before-open="beforeOpen">
    <div class="card" style="height:100%; width:100%">
      <header class="card-header">
        <h1 class="title">Change {{ request }}</h1>
      </header>
      <div class="card-content">
        <div class="field is-horizontal" >
          <div class="field-label is-normal">
            <p class="has-text-white has-text-weight-semibold">Current</p>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control has-icons-left">
                <input v-model="currentData" class="input" type="email" readonly>
                
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <p class="has-text-white has-text-weight-semibold">New</p>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control has-icons-left">
                <input v-model="newData" class="input is-small" type="email" placeholder="New">
                
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
                <input v-model="confirmation" class="input is-small" type="email" placeholder="Confirm">
                
              </p>
            </div>
          </div>
        </div>

        <input class="button is-pulled-right is-primary" type="submit" value="Change">
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
      request: "",
      newData: "",
      confirmation: ""
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
    }
  }
};
</script>
