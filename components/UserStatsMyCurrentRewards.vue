<template>
  <div>
    <!-- <div class="is-size-3 has-text-centered">
      <span v-if="isAuthenticated" class="is-size-3 has-text-centered">{{ myTokens }}</span>
      <span v-else>N/A</span> VTX
    </div> -->
    <myCurrentAwards />
   
    <div v-if="isAuthenticated" class="view-details">
      <a class="button is-info is-outlined" @click="onClickDetails">
        <span>View details</span><span class="icon"><i class="fas fa-search"/></span>
      </a>
    </div>
  </div>
</template>

<script>
import numeral from "numeral";
import myCurrentAwards from "~/components/myCurrentAwards.vue";

export default {
  components: {
    myCurrentAwards
  },
  data() {
    const data = {
      isAuthenticated: this.$store.state.user.isAuthenticated,
      bonus: 0
    };
    if (this.$store.state.user.isAuthenticated) {
      Object.assign(data, {
        myTokens: numeral(
          this.$store.state.userStats.profile_level[0].VTX_Tokens
        ).format(),
        forumUserRank: this.$store.state.userStats.profile_level[0]
          .forumUserRank
      });
    }
    return data;
  },
  methods: {
    onClickDetails() {
      this.$router.push("/PointsDetails");
    }
  }
};
</script>
