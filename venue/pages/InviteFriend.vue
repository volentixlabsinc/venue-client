<template>
  <div class="column is-6 has-text-centered">
    <div class="is-size-4 has-text-centered text-transform-uppercase level is-mobile">
      <div class="level-item">
        <img id="invitePic" src="~assets/invite-a-friend-pic.png">
      </div>
      <div class="level-item is-size-5">
        {{ $t("titles.invite_a_friend") }}
        <!-- <span>Earn up to 10VTX by inviting a friend (change)</span> -->
      </div>
    </div>
    <!-- <div class="nav-text text-transform-uppercase is-size-8 has-text-centered">
      Earn up to 10VTX by inviting a friend (change)
    </div> -->
    <InviteForm/>
    <InviteBoard/>    
  </div>
</template>
  
<script>
import InviteForm from "~/components/InviteForm.vue";
import InviteBoard from "~/components/InviteBoard.vue";

export default {
  middleware: "authenticated",
  components: {
    InviteForm,
    InviteBoard
  }
};
</script>

<style scoped>
#invitePic {
  height: 4rem;
}
</style>
