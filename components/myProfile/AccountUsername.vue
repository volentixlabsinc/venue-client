<template>
  <div class="card">
    <div class="card-content">
      <h2 class="title"> Account Username</h2>
      <h2 class="subtitle"> Change your username</h2>
      <footer class="card-footer">
        <a class="button is-primary" @click="showModal"> Change Username </a>
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
    }
  }
};
</script>
