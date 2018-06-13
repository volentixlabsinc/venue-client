<template>
       
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header" >
            <h1 class="close-button" @click="$emit('close')">X</h1>
          </div>

          <div class="modal-body">
            <help-id-images v-if="request=='ID'"/>
            <confirm-copy v-if="request=='confirmCopy'" />
            <help-signature-images v-if="request=='pasteSignature'" @close="$emit('close')"/>
          </div>

  
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import HelpIdImages from "./HelpIdImages.vue";
import HelpSignatureImages from "./HelpSignatureImages.vue";
import confirmCopy from "./confirmCopy.vue";

export default {
  name: "ModalWidget",
  components: {
    HelpIdImages,
    confirmCopy,
    HelpSignatureImages
  },
  props: {
    request: {
      type: String,
      default: "ID"
    }
  },
  data() {
    return {
      // helpRequest: 'ID'
      // timer: 240
    };
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
}

.modal-container {
  padding: 10px !important;
  padding-top: 0px !important;
  color: black;
  width: 100%;
  height: 500px;
  border-radius: 10px !important;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #484d5c !important;
}
.modal-header {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.close-button {
  color: lightgrey;
  font-weight: bold;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-body {
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: center;
}
@media only screen and (min-width: 800px) {
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    width: 60%;
  }

  .modal-container {
    width: 100%;
    padding: 20px 20px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
}
</style>
