<template>
  <div>
    <ProfileCard 
      :title="$t('settings.language')"
      :description="$t('settings.desc_language')"
      :button="$t('settings.btn_set_language')"
      @clicked="isModalActive = true"/>
    <b-modal :active.sync="isModalActive" has-modal-card>
      <ProfileLanguageForm :value="this.$store.state.user.email"/>
    </b-modal>
  </div>
</template>

<script>
import ProfileCard from "~/components/ProfileCard.vue";
import ProfileLanguageForm from "~/components/ProfileLanguageForm.vue";

export default {
  components: {
    ProfileCard,
    ProfileLanguageForm
  },
  data() {
    return {
      isModalActive: false
    };
  }
};
</script>
