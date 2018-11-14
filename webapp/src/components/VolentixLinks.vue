<template>
  <div>
    <ul class="m-l-md">
      <ExternalLink name="Volentix.io" href="https://volentix.io/" icon="fa fa-globe"/>
      <ExternalLink :name="$t('nav.official_updates')" href="https://t.me/TheVolentixProject" icon="fa fa-bullhorn"/>
      <ExternalLink :name="$t('nav.rules')" href="https://venue.ninja/rules/" icon="fa fa-gavel"/>
      <ExternalLink :name="$t('nav.valoro')" href="https://valoro.io/" icon="far fa-newspaper"/>
      <ExternalLink :name="$t('nav.whitepaper')" href="https://github.com/Volentix/documentation/blob/master/VDexWhitePaper-v0.1.3.pdf" icon="fas fa-external-link-alt"/>
      <ExternalLink :name="$t('nav.whitelist')" href="https://volentix.io/vtx-whitelist/" icon="fa fa-list-alt"/>
    </ul>
  </div>
</template>

<script>
import ExternalLink from "~/components/ExternalLink.vue";

export default {
  components: {
    ExternalLink
  }
};
</script>
