<template>
  <modal height="auto" name="feedbackModal" @before-open="beforeOpen" @before-close="beforeClose">
    <div class="card" style="height:100%">
      <header class="card-header" >
        <h1 :class="[type === 'error' ? errorColor : '', successColor]" class="card-header-title title">
          {{ title }}
        </h1>
        <a class="button card-header-icon is-primary is-outlined" style="width:auto" @click="$modal.hide('feedbackModal')">X</a>
      </header>
      <div class="card-content" style="height:100%">
        
        <h1 class="title"> {{ message }}</h1>

       
      </div>
      
      <footer class="card-footer">
        <div class="card-footer-item">
          <input class="button is-pulled-right is-primary" value="CLOSE" @click="$modal.hide('feedbackModal')">
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
      errorColor: "has-text-danger",
      successColor: "has-text-success",
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
      this.sendAction = event.params.getActionFromFeedback;
    },
    beforeClose() {
      this.type = "";
      this.title = "";
      this.message = "";
      if (this.sendAction) {
        this.$emit("feedbackEmits");
      }
    }
  }
};
</script>
