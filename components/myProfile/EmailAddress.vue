<template>
  <div class="panel">
    <my-profile-setting 
      :coming-soon="false" 
      setting="email"
      title="Email Address" 
      description="Change your registered email address" 
      button="Change Email" 
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
        await this.$axios.$post("/manage/change-email/", {
          email: insertData
        });
      },
      loadModal: false
    };
  },
  methods: {
    showModal(setting) {
      if (setting === "email") {
        this.$modal.show("MyProfileModal", {
          request: "Email",
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
