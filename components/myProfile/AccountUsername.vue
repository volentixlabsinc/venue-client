<template>
  <div class="box">
    <div class="box-content">
      <h2 class="title"> Account Username</h2>
      <footer class="box-footer">
        <div class="box-footer-item">
          <div class="rows">
            <h2 class="subtitle"> Change your username</h2>
            <a class="button is-primary" @click="$modal.show('MyProfileModal', {request: 'Username'})"> Change Username </a>
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
  }
};
</script>
