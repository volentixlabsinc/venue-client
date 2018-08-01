<template>
  <div class="column is-7 text-is-centered">
    <h1 class="title">Invite your friend and earn VTX</h1>
    <InviteForm/>
    <InviteBoard/>    
  </div>
</template>
  
<script>
import InviteForm from "~/components/InviteForm.vue";
import InviteBoard from "~/components/InviteBoard.vue";

export default {
  components: {
    InviteForm,
    InviteBoard
  }
};
</script>
