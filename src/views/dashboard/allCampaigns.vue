<template>
<div class="all-campaigns" @click="$router.push('/campaign')">
    
        <div class="logo-token" >
        <h2 class="campaign-title">BITOINTALK SIGNATURE CAMPAIGN</h2>
        <div class="tokens-info">
         <img id="token-icon" src="/img/logos/VTX-Token-icon.png"/>
          <h1 class="nb-tokens">{{sitewide.available_tokens}} VTX</h1>
          </div>
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
        
        <div class="leaderboard-container">
             <h2 class="campaign-title">LEADERBOARD</h2>
        <leaderboard/>
        </div>
</div>
</template>

<script>
import ICountUp from 'vue-countup-v2';
import leaderboard from '../../components/leaderboard/index.vue'
export default {
  props: {
    sitewide: {
      type: Object,
      default: {}
    },
    data: {
      type: Object,
      default: null
    },
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
 margin-bottom: 5%;
 background-image: linear-gradient(to bottom,  rgba(0, 0, 0, 0.3), #494B5E);
}

.all-campaigns:hover{
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
}
.leaderboard-container{
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
  height:45px;
  margin:5px;
}
.campaigns_info {
  width: 50%;
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
.tokens-info{
  display: flex;
  justify-content: center;
  align-items: center;
}
.info-subtitles {
  padding: 0px;
  margin: 0px;
   padding-top: 5px;
   color: rgba(255, 255, 255, 0.541);
}
@media only screen and (min-width: 800px) {
.all-campaigns{
  height: auto;
  flex-direction: row;
  justify-content:center;
  align-items:flex-start;
  padding: 0px;
  margin-bottom: 0pc;
  background-color:transparent;
   background-image: none;
}
.all-campaigns:hover{
  cursor: pointer;
  background-color: transparent;
}

.logo-token{
  display: flex;
  flex-direction: column;
  box-shadow: none;
  width: auto;
  min-height: 110px;
  border-radius:3px;
  height: auto;
  padding: 0px;
  margin: 0px;
  
}
.campaigns_info-container{
  flex-direction: column;
  padding: 0px;
  margin: 0px;
}
.info-subtitles {
  font-size:14px;
}
.nb-tokens{
  font-size: 30px;
}

#token-icon {
  height:60px;
  padding-right: 5px; 
}
.campaigns_info {
  width: auto;
  min-height: auto;
  margin-top: 4px;
}
.dashboard-numbers {
  font-size: 45px;
}

.leaderboard-container{
  padding-top: 20px;
  width: 90%;
  display: inherit;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

}
</style>