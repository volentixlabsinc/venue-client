<template>
  <div v-if="userInfo!=undefined" class="card">
    <div class="card-content">
      <h2 class="title">Email Address</h2>
      <h2 class="subtitle">Change your registered email address</h2>
      <footer class="card-footer">
        <a class="button is-primary" @click="showModal"> Change Email </a>
      </footer>
    </div>
    <MyProfileModal v-if="loadModal" v-bind="{fetchRequest}"/>
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
        await this.$axios.$post("/manage/change-email/", {
          email: insertData
        });
      },
      loadModal: false
    };
  },
  mounted() {
    console.log("userInfo", this.userInfo);
  },
  methods: {
    showModal() {
      this.$modal.show("MyProfileModal", {
        request: "Email",
        currentData: this.userInfo,
        fetchRequest: this.fetchRequest
      });
      this.loadModal = true;
    }
  }
};
</script>
