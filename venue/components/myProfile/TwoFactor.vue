<template>
  <my-profile-setting
    :coming-soon="true"
    title="Two-Factor Authentication"
    description="Modify two-factor authentication"
    button="Enable 2FA"/>
</template>

<script>
import MyProfileSetting from "~/components/MyProfileSetting.vue";

export default {
  components: {
    MyProfileSetting
  }
};
</script>
