<template>
  <div class="columns is-centered">
    <div class="column is-half">
      <div class="text-transform-uppercase level has-text-centered">
        <div class="level-item">
          <img id="invitePic" src="~assets/invite-a-friend-pic.png">
        </div>
        <div class="levels is-size-4 has-text-weight-bold">
          <div class="level-item is-size-4 has-text-weight-bold">
            <span>{{ $t("titles.invite_a_friend") }}</span>
          </div>
          <div class="level-item is-size-6 has-text-weight-normal">
            <span>{{ $t("titles.invite_a_friend_subt") }}</span>
          </div>
        </div>
        <!-- <span><img id="invitePic" src="~assets/invite-a-friend-pic.png"></span>
        <span>{{ $t("titles.invite_a_friend") }}</span> -->
      </div>
      <!-- <div class="nav-text text-transform-uppercase is-size-8 has-text-centered">
        Earn up to 10VTX by inviting a friend (change)
      </div> -->
      <InviteForm/>
      <InviteBoard/>
    </div>   
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
  height: 5rem;
}
.column {
  padding-top: 5rem;
}
</style>
