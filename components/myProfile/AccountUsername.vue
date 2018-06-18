<template>
  <div class="panel">
    <my-profile-setting 
      :coming-soon="false" 
      setting="username"
      title="Account Username" 
      description="Change your username" 
      button="Change Username"
      @activateModal="showModal"/>
    <MyProfileModal v-bind="{fetchRequest}" @userData="emitNewData"/>
  </div>
</template>

<script>
import MyProfileSetting from "~/components/MyProfileSetting.vue";
import MyProfileModal from "~/components/myProfile/MyProfileModal.vue";

export default {
  components: {
    MyProfileSetting,
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
    showModal(setting) {
      if (setting === "username") {
        this.$modal.show("MyProfileModal", {
          request: "Username",
          currentData: this.userInfo,
          fetchRequest: this.fetchRequest
        });
        this.loadModal = true;
      }
    },
    emitNewData(data) {
      data.then(result => {
        this.$emit("newUserData", result);
      });
    }
  }
};
</script>
