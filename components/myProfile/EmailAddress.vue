<template>
  <div v-if="userInfo!=undefined" class="box">
    <div class="box-content">
      <h2 class="title">Email Address</h2>
      <footer class="box-footer">
        <div class="box-footer-item">
          <div class="rows">
            <h2 class="subtitle">Change your registered email address</h2>
            <a class="button is-primary" @click="$modal.show('MyProfileModal', {request: 'Email'})"> Change Email </a>
          </div>
        </div>
      </footer>
    </div>
    <MyProfileModal/>
  </div>
</template>

<script>
import MyProfileModal from "~/components/myProfile/MyProfileModal.vue";

export default {
  components: {
    MyProfileModal
  },
  props: {
    userInfo: {
      type: String,
      default: undefined
    }
  },
  mounted() {
    console.log("userInfo", this.userInfo);
  }
};
</script>
