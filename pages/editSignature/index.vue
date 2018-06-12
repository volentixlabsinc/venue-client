<template>
  <main class="main">
    <div class="container">
      <h3>CURRENT SIGNATURE</h3>
      <!-- <img :src="currentSignatureImg" /> -->
      <h2>AVAILABLE BITCOIN SIGNATURES</h2>
      <AvailableSignatures :signatures="signatures"/>
    </div>
    <div class="right-panel">
    <campaignRightPanel />
    </div>  
  </main>
</template>

<script>
  import AvailableSignatures from "~/components/AvailableSignatures.vue"
  import campaignRightPanel from "~/components/campaignRightPanel.vue";
  import axios from 'axios'

  export default {
    components: {
      AvailableSignatures,
      campaignRightPanel
    },
    async asyncData ({ app, store }) {
      const data = {
        signatures: []
      }
      if (store.state.user.isAuthenticated) {
        const forumProfiles = await app.$axios.$get('/retrieve/forum-profiles/', {
          params: {
            forum_id: 1,
            forum_user_id: store.state.userStats.profile_level[0].forumUserId
          }
        })
        const signatures = await app.$axios.$get('/retrieve/signatures/', {
          params: {
            forum_site_id: 1,
            forum_profile_id: forumProfiles.forum_profiles[0].id
          }
        })
        // TODO Filter basesd on the store.state.userStats.profile_level[0].forumUserRank
        data.signatures = signatures.signatures.filter(
          signature => signature.name.startsWith('Full Member'))
          // signature => signature.name.startsWith('Sr. Member'))
      }
      console.log('data', data)
      return data
    }
  }
</script>

<style scoped>

h2 {
  text-align: left;
}

h3 {
  text-align: left;
}

.main {
    display: flex;
    flex-direction: row;
    width: 100%;
    color: white;
    align-items: center;
}
.container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align:inherit;
}

.right-panel{
  width: 50%;
}
</style>
