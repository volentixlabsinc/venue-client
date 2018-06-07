<template>
<div> 
    <div class="tokens-info-title">
        <h1 class="title">MY CAMPAIGN ACTIVITY</h1>
    </div>
    <div class="card">
        <div class="chart"> 
            <line-chart  :chart-data="dataCollection" :width="350" :height="200" ></line-chart>
        </div>
         <div class="campaigns_info number-desktop">
            <h1 class="dashboard-numbers" @click="onClickDetails">
                <ICountUp
                :startVal="0"
                :endVal="Number(localStats.total_posts)"
                :decimals="0"
                :duration="2.5"
                :options="options"/>
            </h1>
            <h4 class="info-subtitles">MY POSTS</h4>
        </div>
            <div class="campaigns_info number-desktop">
            <h1 class="dashboard-numbers" @click="onClickDetails">
                <ICountUp
                :startVal="0"
                :endVal="Number(localStats.total_points)"
                :decimals="0"
                :duration="2.5"
                :options="options"/>
            </h1>
            <h4 class="info-subtitles">MY POINTS</h4>
        </div>
        <div class="tokens-info">
            <!-- <img id="token-icon" src="/img/logos/VTX-Token-icon-new.png"/> -->
            <h1 class="nb-tokens">{{localStats.total_tokens}} VTX</h1>
            <h3 v-if="bonus!=null" style="width:100%; margin:5px">{{profileLevel[0].forumUserRank}} Bonus: {{bonus}} (included)</h3>
            <h1 class="subtitle" style="background-color:rgba(252, 248, 248, 0.05); display: flex; justify-content: space-evenly"><i class="fas fa-star" style="color:#fbc02d"></i>  MY CURRENT REWARDS</h1>
        </div>
        <div class="view-details">
            <button class="btn view-details-button" @click="onClickDetails">
            <h3 class="signature-title-text">View details</h3>
           <a><i class="fas fa-search"></i></a>
           </button>
        </div>
    </div>
</div>
</template>

<script>
import ICountUp from 'vue-countup-v2';
import lineChart from '../../components/forumActivity/linechart.js'

export default {
    props: {
        dataCollection: {
            type: Object,
            default: {}
        },
        campaignStats: {
            type: Object,
            default: {}
        },
        localStats: {
            type: Object,
            default: {}
        },
        profileLevel: {
            type: Array,
            default: []
        },
    },
    data() {
        return{
            signature: false,
            bonus: null,
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
    mounted() {
    this.checkForumLevel();
    console.log('this.profileLevel: ', this.profileLevel);
    },
    methods: { 
    onClickDetails() {
        this.$router.push('/points-details')
      },
    checkForumLevel() {
        if (this.profileLevel[0].forumUserRank=="Legendary Members") {
            this.bonus = "5 %"
        } 
        else if (this.profileLevel[0].forumUserRank=="Sr Members") {     
            this.bonus = "2 %"
        }
       
    }
    },
    components: {
        ICountUp,
        lineChart
    }
}
</script>

<style scoped>

.user-campaign-info {
    height: 100%;
    width: 100% ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.my-signature{
    width: 100%;
    display: flex;
    flex-direction:column;
    padding-bottom: 30px;
}


.signature-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
}
.signature-title-text {
    padding: 0px;
    margin: 10px;
    text-align: left;
}
.campaign_info-container {
    height: 50%;
    width: 100%;
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

.campaigns_info {
  width: 45%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 20px 1px 5px 1px;
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
    margin: 5px 0px 5px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

#token-icon {
  height:50px;
  margin:5px;
  padding-right: 10px;
}
.top-section{
    width: 100%;
    height: 100%
}

.subtitle{
    width: 100%;
    font-size: 25px;
    padding: 0px 10px 0px 15px;
    margin: 0px;
    display: flex;
    justify-content: flex-start;
    text-align:center;
}

.nb-tokens{
    font-size: 30px;
    padding: 0px;
    margin: 0px;
    text-align:center;
}
.title {
    display: none;
}

.number-desktop, .chart{
    display: none;
}
.card{
    box-shadow:none;
    width: 100%;
    justify-content:center;
    align-items: center;
    flex-wrap:wrap;
    padding-bottom: 0px;
}
.fa-star {
    margin:-10px 0 0 -15px;
    font-size: 1.5em;
    transform: rotate(-10deg)
}
.view-details {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-self: flex-end;
    width: 100%;
}

.view-details-button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: rgba(240, 248, 255, 0.1);
    padding-top: 5px;
    padding-bottom: 5px;
    margin-right: 0px;
    border-radius: 5px;
}

.view-details-button:hover{
    background-color: rgba(240, 248, 255, 0.2);
}


@media only screen and (min-width: 800px) {

.dashboard-numbers {
    font-size: 45px;
}

.user-campaign-info { 
    box-shadow: none;
    padding-top: 0px;
    flex-direction: column;
    justify-content:space-around;
    align-items:flex-start;
    padding-bottom: 0px;
    height: auto;
    padding: 10px;
    margin:0px;
    order:2;
}
.card{
    /* background-color: #222C3B; */
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-wrap:wrap;
    margin-top: 0;
    box-shadow: none;
     padding-bottom: 0px;
}

.chart {
    margin: 20px 0px 20px 0px;
}

.tokens-info{
    width: 90%;
}

.tokens-info-title{
  margin: 20px 0px 20px 0px;
  width: 100%;
}
.nb-tokens{
  font-size: 30px;
  padding: 0px;
  margin: 0px;
}
.my-signature{
    width: 100%;
}
.top-section {
    /* background-color: #222C3B; */
    height: 50%;
    width: 100%;
    height: 250px;
    padding: 10px;
}

.number-desktop, .chart{
    display: inherit;
}

 .view-details {
    width: 90%;
}
}
</style>

<style>
#pie-chart{
    margin:0px !important;
    padding:0px !important;
    width: 150px !important;
    height:150px !important;
    align-self: center;
}
canvas {
    margin: 0px !important;
    padding: 0px !important;
    display: flex !important;
}
</style>

