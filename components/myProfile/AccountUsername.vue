<template>
  <div class="card">
    <div class="card-content">
      <h2 class="title"> Account Username</h2>
      <h2 class="subtitle"> Change your username</h2>
      <footer class="card-footer">
        <div class="card-footer-item">
          <a class="button is-primary is-pulled-right" @click="showModal"> Change Username </a>
        </div>
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
        const result = await this.$axios.$post("/manage/change-username/", {
          username: insertData
        });
        return result;
      },
      loadModal: false
    };
  },
  methods: {
    showModal() {
      this.$modal.show("MyProfileModal", {
        request: "Username",
        currentData: this.userInfo,
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
