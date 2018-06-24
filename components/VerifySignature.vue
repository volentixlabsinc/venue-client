<template>
       
  <modal :adaptive="true" :resizable="true" :draggable="true" :scrollable="true" height="auto" name="VerifySignature">
    <div class="card">
      <header class="card-header" >
        <h1 class="card-header-title title has-text-white"/>
        <a class="button card-header-icon is-primary is-outline" @click="$modal.hide('VerifySignature')">X</a>
      </header>
      <div class="card-container">
        <confirm-copy />
      </div>
    </div>
  </modal>
</template>

<script>
import ConfirmCopy from "./ConfirmCopy.vue";

export default {
  name: "VerifySignature",
  components: {
    ConfirmCopy
  }
};
</script>
