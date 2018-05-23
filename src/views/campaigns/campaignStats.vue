<template>
     <div class="card user-campaign-info">
          <div class="top-section">
           <div class="tokens-info-title">
                <h1 class="nb-tokens">MY STATS</h1>
            </div>

              <div class="campaign_info-container">
                <div class="campaigns_info">
                        <h1 class="dashboard-numbers">
                            <ICountUp
                            :startVal="0"
                            :endVal="Number(this.localStats.myRanking)"
                            :decimals="0"
                            :duration="2.5"
                            :options="options"/>
                        </h1>
                    <h4 class="info-subtitles">MY RANK</h4>
                </div>
         
                <div class="campaigns_info">
                    <h1 class="dashboard-numbers">
                        <ICountUp
                        :startVal="0"
                        :endVal="Number(this.localStats.myActivity)"
                        :decimals="0"
                        :duration="2.5"
                        :options="options"/>
                    </h1>
                    <h4 class="info-subtitles">TOTAL POSTS</h4>
                </div>


                <div class="campaigns_info number-desktop">
                    <h1 class="dashboard-numbers">
                        <ICountUp
                        :startVal="0"
                        :endVal="Number(this.localStats.myActivity)"
                        :decimals="0"
                        :duration="2.5"
                        :options="options"/>
                    </h1>
                    <h4 class="info-subtitles">SIGNED</h4>
                </div>

                <div class="campaigns_info number-desktop">
                    <h1 class="dashboard-numbers">
                        <ICountUp
                        :startVal="0"
                        :endVal="Number(this.localStats.myActivity)"
                        :decimals="0"
                        :duration="2.5"
                        :options="options"/>
                    </h1>
                    <h4 class="info-subtitles">NOT SIGNED</h4>
                </div>
            
            </div>
     
        </div> 

        <div class="bottom-section">
            <div class="tokens-info">
                <img id="token-icon" src="/img/logos/VTX-Token-icon.png"/>
                <h1 class="nb-tokens">{{campaignStats.available_tokens}} VTX</h1>
            </div>
          <forum-stats-posts  :chart-data="datacollectionPoints"  ></forum-stats-posts>
          
          <div class="my-signature">
            <div class="signature-title">
           <h3 class="signature-title-text">CURRENT SIGNATURE</h3>
           <a  @click="onClickSignautre"><i class="far fa-edit"></i></a>
           </div>
           
           </div>
        </div>
      </div>
</template>

<script>
import ICountUp from 'vue-countup-v2';
import forumStatsPosts from '../../components/forumActivity/forumStatsPosts';

export default {
    props: {
        campaignStats: {
            type: Object,
            default: {}
        },
        localStats: {
            type: Object,
            default: {}
        },
        elements: {
            type: Array,
            default: []
        }
    },
    data() {
        return{
            signature: false,
            datacollectionPoints: {},
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
        this.calculatePercentages ()
    },
    methods: { 
    onClickSignautre() {
        this.$router.push('/signature')
      },
      calculatePercentages () {
            this.pointsPercent = (0*100)/10000;
            this.userTokens = 0;
             this.datacollectionPoints = {
                labels: [
                    'User Points percentage',
                ],
                datasets: [
                    {
                    label: 'Points percentage',
                    backgroundColor: ['rgba(133, 68, 154, 0.5)', 'transparent'],
                    borderColor: 'white',
                    borderWidth: '0.5',
                    data: [this.pointsPercent, 100-this.pointsPercent]
                    },
                ]
            }
      }
    },
    components: {
        ICountUp,
        forumStatsPosts
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#token-icon {
  height:60px;
  margin:5px;
}
.top-section{
    width: 100%;
    height: 100%
}
.nb-tokens{
    width:100%;
  font-size: 40px;
  padding: 0px;
  margin: 0px;
  text-align:center;
}
.number-desktop{
    display: none;
}
.bottom-section{
    background-color: #222C3B;
    margin-top: 5%;
    width: 100%;
    height: 250px;
    padding: 10px;
    display: none;
    justify-content:center;
    align-items: center;
    flex-wrap:wrap;
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
.bottom-section{
    background-color: #222C3B;
    margin-top: 5%;
    width: 100%;
    height: 250px;
    padding: 10px;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-wrap:wrap;
}
.tokens-info{
  width: 50%;
}
.tokens-info-title{
  width: 100%;
}
.nb-tokens{
  font-size: 35px;
  padding: 0px;
  margin: 0px;
}
.my-signature{
    width: 100%;
}
.top-section {
    background-color: #222C3B;
    height: 50%;
    width: 100%;
    height: 250px;
    padding: 10px;
}

.number-desktop{
    display: inherit;
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

