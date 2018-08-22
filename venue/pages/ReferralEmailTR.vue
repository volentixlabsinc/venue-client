<template>
  <div class="columns is-centered">
    <div class="column is-half">
      <TurkishEmail/>
    </div>
  </div>
</template>

<script>
import TurkishEmail from "~/components/ReferralEmail.vue";
export default {
  layout: "email",
  components: {
    TurkishEmail
  }
};
</script>
