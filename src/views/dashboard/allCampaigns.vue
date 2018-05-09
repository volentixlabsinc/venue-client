<template>
<div class="all-campaigns">
    
        <div class="logo-token" @click="$router.push('/campaign')">
        <h2 class="campaign-title">BITOINTALK SIGNATURE CAMPAIGN</h2>
         <img id="token-icon" src="/img/logos/VTX-Token-icon.png"/>
          <h1 >{{sitewide.available_tokens}} VTX</h1>
         </div>
       <div class="campaigns_info-container">
        <div class="campaigns_info">
          <h1 class="dashboard-numbers"><ICountUp
            :startVal="0"
            :endVal="sitewide.total_users"
            :decimals="0"
            :duration="2.5"
            :options="options"
          /></h1>
          <h4 class="info-subtitles">PARTICIPANTS</h4>
        </div>
        <div class="campaigns_info">
          <h1 class="dashboard-numbers"><ICountUp
            :startVal="0"
            :endVal="sitewide.total_posts"
            :decimals="0"
            :duration="2.5"
            :options="options"
          /></h1>
          <h4 class="info-subtitles">TOTAL POSTS</h4>
        </div>
         </div>
           <div class="leaderboard">
             <h2 class="campaign-title">LEADERBOARD</h2>
         <leaderboard :rankings="data.rankings" :sitewide="data.sitewide"/>
        </div>
</div>
</template>

<script>
import ICountUp from 'vue-countup-v2';
import leaderboard from '../../components/campaigns/index.vue'
export default {
  props: {
    sitewide: {
      type: Object,
      default: {}
    },
    data: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
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
  components: {
    ICountUp,
    leaderboard
  }
}  
</script>

<style scoped>

.all-campaigns {
  height:auto;
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
 padding-top: 10px;
 padding-bottom: 30px;
 background-image: linear-gradient(to bottom,  rgba(0, 0, 0, 0.3), #494B5E);
}

.all-campaigns:hover{
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
  
}
.leaderboard{
  display:none;
}
.campaign-title{
    font-size: 20px;
    width:95%;
    border-bottom: 0.5px solid #92A5C1;
}

.campaigns_info-container{
  display: flex;
}
.logo-token{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  margin-bottom: 5px;
}

#token-icon {
  height:50px;
  margin:5px;
}
.campaigns_info {
  width: 110px;
 min-height: 80px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 1px;
  background-color: rgba(252, 248, 248, 0.05);
  border-radius: 3px;
  padding: 2px;
}
.dashboard-numbers {
  color: rgba(255, 255, 255, 0.541);
  width: 100%;
  font-weight: bolder;
  font-size: 50px;
  padding: 0px;
  padding-top: 5px;
  margin: 0px;
  line-height:1;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  text-shadow: 2px 2px 2px black;
}

.info-subtitles {
  padding: 0px;
  margin: 0px;
   padding-top: 5px;
   color: rgba(255, 255, 255, 0.541);
}
@media only screen and (min-width: 600px) {
.all-campaigns{
  height: 100%;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  order:2;
  padding: 0px;
  background-color: rgba(0, 0, 0, 0.2);
   background-image: none;
}

.logo-token{
  box-shadow: none;
  width: auto;
  min-height: 110px;
  border-radius:3px;
  height: auto;
  margin-bottom: 0px;
  
}


#token-icon {
  height:50px;
  margin:5px;
}

.campaigns_info {
  width: 110px;
  min-height: 110px;
}
.dashboard-numbers {
  font-size: 50px;
}


#token-icon {
  height:80px;
}
.leaderboard{
  width: 90%;
  display: inherit;
  flex-direction: column;
}

}
</style>