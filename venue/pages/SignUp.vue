<template>
  <TwoColumnLayout>
    <div slot="left">
      <Signup class="p-l-md"/>
    </div>
    <div slot="right">
      <article class="message m-r-lg">
        <div class="message-header">
          <div>
            <i class="fas fa-ban p-r-sm"/>
            <span>{{ $t('auth.no_china_or_us_header') }}</span>
          </div>
        </div>
        <div class="message-body">
          <div>{{ $t('auth.no_china_or_us_1') }}</div>
          <div class="p-t-md">{{ $t('auth.no_us_2') }}</div>
        </div>
      </article>
    </div>
  </TwoColumnLayout>
</template>

<script>
import TwoColumnLayout from "~/components/TwoColumnLayout.vue";
import Signup from "~/components/Signup.vue";

export default {
  components: {
    TwoColumnLayout,
    Signup
  }
};
</script>
