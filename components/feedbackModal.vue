<template>
  <modal height="auto" name="feedbackModal" @before-open="beforeOpen" @before-close="beforeClose">
    <div class="card" style="height:100%">
      <header class="card-header" >
        <h1 class="card-header-title title has-text-white">
          {{ title }}
        </h1>
        <a class="button card-header-icon is-primary is-outlined" style="width:auto" @click="$modal.hide('MyProfileModal')">X</a>
      </header>
      <div class="card-content" style="height:100%">
        
        <h1> {{ message }}</h1>

       
      </div>
      
      <footer class="card-footer">
        <div class="card-footer-item">
          <input class="button is-pulled-right is-primary" >
        </div>
      </footer>
 
    </div>
  </modal>
</template>

<script>
export default {
  name: "FeedbackModal",
  data: function() {
    return {
      type: "",
      title: "",
      message: ""
    };
  },
  methods: {
    beforeOpen(event) {
      this.type = event.params.type;
      this.title = event.params.title;
      this.message = event.params.message;
    },
    beforeClose() {
      this.type = "";
      this.title = "";
      this.message = "";
    }
  }
};
</script>
