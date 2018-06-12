<template>
    <div class="main-section">
      <div v-if="profile_level_global" class="card my-campaign-container">
        <div class="current-signature">
          <h3>Current Signature</h3>
          <img id="signature" src="/img/onboarding/sig1.png"/>
          <button class="btn venue-accent-color sign-button">CHANGE</button>
        </div>
        <div v-if="profile_level_global" class=" forum" v-for="forumInfo in profile_level_forum" :key="forumInfo.User_ID">
           <forum :forumInfo="forumInfo"/>
        </div>
        <my-campaign :data="profile_level_global" />
      </div>
      <div v-if="profile_level_global" class="card all-campaigns-container">
        <campaign-right-panel />
      </div>
    </div>
</template>

<script>
import forum from '~/components/forum.vue';
import myCampaign from '~/components/myCampaign.vue';
import campaignRightPanel from '~/components/campaignRightPanel.vue';
import ICountUp from 'vue-countup-v2';

export default {
  data () {
    return {
      profile_level_forum: this.$store.state.userStats.profile_level,
      profile_level_global: this.$store.state.userStats.user_level,
      options: {
          useEasing: true,
          useGrouping: false,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        },
    }
  },
  mounted () {
    if (this.$store.state.userStats.fresh) {
      this.$router.push('/onboarding/bitcointalk/')
    }
  },
  components: {
    forum,
    myCampaign,
    campaignRightPanel
  }
}
</script>

<style scoped>

.main-section {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  flex-wrap: no-wrap;
  overflow: scroll;
  overflow-x: hidden;
  scrollbar-face-color: #367CD2;
  scrollbar-shadow-color: #FFFFFF;
  scrollbar-highlight-color: #FFFFFF;
  scrollbar-3dlight-color: #FFFFFF;
  scrollbar-darkshadow-color: #FFFFFF;
  scrollbar-track-color: #FFFFFF;
  scrollbar-arrow-color: #FFFFFF;
  padding-bottom:50px;
}

.main-section::-webkit-scrollbar {
    width: 0px;
}

/* Track */
.main-section::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0px rgba(0,0,0,0.2); 
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0); 
    -webkit-border-radius: 0px;
    border-radius: 0px;
    background-clip: content-box;
}
 
/* Handle */
.main-section::-webkit-scrollbar-thumb {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 25px rgba(0,0,0,0); 
}

 .forum {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-shrink:0;
   width: 95%;
}
.my-campaign-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink:0;
  width: 100%;
}

.all-campaigns-container {
flex-shrink: 1;
height: 30%;
}

.current-signature{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.current-signature > h3{
 width: 95%;
 text-align: left;
 margin-bottom: 0px;
}

#signature {
  width: 70%;
}

.sign-button{
  padding: 10px;
}
@media only screen and (min-width: 800px) {

.main-section {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    flex-wrap: wrap;
    padding-bottom:0px;
}

.my-campaign-container, .all-campaigns-container {
  width: 49%;
  height: 100%;
  margin: 0px;
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
}


.all-campaigns-container:hover{
  cursor: pointer;
}

.forum{
  height: auto;
  width: auto;
  background-color: transparent;
  border: 0px;
  margin-bottom: 20px;
}

}
</style>

