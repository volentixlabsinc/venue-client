<template>
  <div class="card">
    <div class="card-content">
      <h2 class="title"> Account Password</h2>
      <h2 class="subtitle"> Change your password</h2>
      <footer class="card-footer">
        <a class="button is-primary" @click="showModal"> Change Password </a>
      </footer>
    </div>
    <MyProfileModal v-bind="{fetchRequest}" @userData="emitNewData"/>
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
  data: function() {
    return {
      async fetchRequest(insertData) {
        const result = await this.$axios.$put("/manage/change-password/", {
          password: insertData
        });
        return result;
      },
      loadModal: false
    };
  },
  methods: {
    showModal() {
      this.$modal.show("MyProfileModal", {
        request: "Password",
        currentData: "",
        fetchRequest: this.fetchRequest
      });
      this.loadModal = true;
    },
    emitNewData(data) {
      data.then(result => {
        this.$emit("newUserData", result);
      });
    }
  }
};
</script>
