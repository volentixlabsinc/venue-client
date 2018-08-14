<template>
  <div class="columns is-centered">
    <div class="column is-half p-t-xl">
      <div class="text-transform-uppercase level has-text-centered">
        <div class="level-item">
          <img id="invitePic" src="~assets/invite-a-friend-pic.png">
        </div>
        <div class="levels is-size-4 has-text-weight-bold">
          <div class="level-item is-size-4 has-text-weight-bold">
            <span>{{ $t("titles.invite_a_friend") }}</span>
          </div>
          <div class="level-item is-size-6 has-text-weight-normal">
            <span>{{ $t("titles.invite_a_friend_subt", {count: "10"}) }}</span>
          </div>
        </div>
      </div>
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
</style>
