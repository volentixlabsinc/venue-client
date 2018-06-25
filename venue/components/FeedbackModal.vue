<template>
  <modal height="auto" name="FeedbackModal" @before-open="beforeOpen" @before-close="beforeClose">
    <div class="card" style="height:100%">
      <header class="card-header" >
        <h1 :class="[type === 'error' ? errorColor : '', successColor]" class="card-header-title title">
          {{ title }}
        </h1>
        <a class="button card-header-icon is-primary is-outlined" style="width:auto" @click="$modal.hide('FeedbackModal')">X</a>
      </header>
      <div class="card-content" style="height:100%">
        
        <h1 class="subtitle"> {{ message }}</h1>

       
      </div>
      
      <footer class="card-footer">
        <div class="card-footer-item">
          <input :value="buttonText" class="button is-pulled-right is-primary" @click="onClickButton">
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
      successColor: "has-text-primary",
      type: "",
      title: "",
      message: "",
      recievedAction: undefined,
      buttonText: undefined
    };
  },
  methods: {
    beforeOpen(event) {
      this.type = event.params.type;
      this.title = event.params.title;
      this.message = event.params.message;
      this.recievedAction = event.params.sendActionToFeedback;
      this.buttonText = event.params.buttonText;
    },
    beforeClose() {
      this.type = "";
      this.title = "";
      this.message = "";
      if (this.recievedAction) {
        this.$emit("feedbackEmits");
      }
    },
    onClickButton() {
      // if (this.recievedAction) {
      //   this.recievedAction();
      // }
      this.$modal.hide("FeedbackModal");
    }
  }
};
</script>
