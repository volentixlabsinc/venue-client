<template>
<div :class="[myRank==elements.rank ? userRank : '', otherRank]" >
    <div class="top-elements">
        <div class="rank_username">
            <p class="element top-el el-rank">{{elements.rank}}</p>
            <p class="element top-el el-username">{{elements.username}}</p>
        </div>
        <div class="tokens_info">
        <p class="element top-el el-tokens">{{elements.total_tokens}} VTX</p>
        <div @click="toggleDescription=!toggleDescription"><i class="far fa-question-circle"></i></div>
        </div>
    </div>
    <div class="bottom-elements">
            <p class="empty-element"></p>
        <p class="element top-el el-total-posts">{{elements.total_posts}} posts</p>
    </div>
    <div v-if="toggleDescription && sitewide.available_tokens" class="toggled-info">
        
        <div class="campaigns_info">
            <div class="dashboard-numbers">
                 <forum-stats-posts  :chart-data="datacollectionPoints"  ></forum-stats-posts>
  
            </div>
            <h4 class="info-subtitles">{{elements.total_points}} POINTS</h4>
        </div>
        <div class="campaigns_info">
            <div class="dashboard-numbers">
                <forum-stats-tokens  :chart-data="datacollectionTokens" ></forum-stats-tokens>
                
            </div>
            <h4 class="info-subtitles">{{elements.total_tokens}} Tokens</h4>
        </div>       
    


        <p>{{pointsPercent}} % of {{sitewide.available_tokens}} = {{elements.total_tokens}}</p>
    </div>
    </div>
</template>

<script>
import forumStatsPosts from '../../components/forumActivity/forumStatsPosts';
import forumStatsTokens from '../../components/forumActivity/forumStatsTokens';
import ICountUp from 'vue-countup-v2';


export default {
  props: {
      elements: {
          type: Object,
          default: null
      },
        sitewide: {
            type: Object,
            default: null
        },
        myRank: {
            type: Number,
            default: ''
        }
  },
   data() {
        return {
            toggleDescription: false,
            pointsPercent: null,
            tokensPercent: null,
            userTokens: null,
            userRank: 'my-element-container',
            otherRank: 'element-container',
            datacollectionPoints: {},
            datacollectionTokens: {},
            options: {
                useEasing: true,
                useGrouping: false,
                decimals: 3,
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
        calculatePercentages () {
            this.pointsPercent = (parseFloat(this.elements.total_points.replace(/,/g, ''))*100)/parseFloat(this.sitewide.available_points.replace(/,/g, ''));
            this.userTokens = parseFloat(this.elements.total_tokens.replace(/,/g, ''));
             this.datacollectionPoints = {
                labels: [
                    'User Points percentage',
                ],
                datasets: [
                    {
                    label: 'Points percentage',
                    backgroundColor: ['#85449A', 'transparent'],
                    borderColor: 'white',
                    borderWidth: '0.5',
                    data: [this.pointsPercent, 100-this.pointsPercent]
                    },
                ]
            }

            this.datacollectionTokens = {
                labels: [
                    'User Tokens',
                ],
                datasets: [
                    {
                    label: 'Tokens',
                    backgroundColor: ['#85449A', 'transparent'],
                    borderColor: 'white',
                    borderWidth: '0.5',
                    data: [this.userTokens, parseFloat(this.sitewide.available_tokens.replace(/,/g, ''))-this.userTokens]
                    },
                ]
            }
        }
    },
    components: {
        forumStatsPosts,
        forumStatsTokens,
        ICountUp
    }
}
</script>

<style scoped>
.element-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    animation: slideUp 0.5s linear 1;
}
.element-container * {
    flex-shrink: 1;
}
.element {
    font-size: 18px;
}
.my-element-container {
    background-color: rgba(148, 168, 182, 0.2);
}
@keyframes slideUp{
    0%{
        transform: translateY(100px);
    }

    80%{
         transform: none
    }

    90%{
         transform: translateY(5px)
    }

    100%{
         transform: none
    }

}

.top-elements {
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
     font-size: 14px
}
.rank_username, .tokens_info{
    display: flex;
    align-items: center;
}
.el-rank {
    width: auto;
    text-align: left;
}
.el-username {
    text-align: left;
    padding-left: 15px;
}
.el-tokens {
    text-align: left;
}
.fa-question-circle{
    width: auto;
    padding-left: 10px;
    color: gray;
}
.bottom-elements {
    height: 20px;;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
}
.empty-element{
     width: 0px;
}
.el-total-posts {
   width: 97%;
    padding-left: 3%;
    display: flex;
    flex-direction: row !important;
    flex-wrap: nowrap;
    color: gray;
}

.toggled-info{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    font-size: 14px;
    text-align: left;
    transition: expand 5s;
}

@keyframes expand{
    0%{
        height: 0px;
    }
    100%{
         height: auto;
    }

}
.toggled-info > p {
    padding: 0px;
    margin: 0px;
}

.campaigns_info {
  width: 45%;
  height: 200px;
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
  height: 75%;
   display: flex;
   justify-content: center;
   align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  padding: 5px;
}

.info-subtitles {
  padding: 0px;
  margin: 0px;
   padding-top: 5px;
   color: rgba(255, 255, 255, 0.541);
}
@media only screen and (max-width: 400px) and (min-width:200px) {
    .top-elements{
        font-size: 11px
    }
    .bottom-elements{
        font-size: 10px
    }
}

@media only screen and (min-width: 900px) {
    .top-elements{
        font-size: 16px
    }
    .bottom-elements{
        font-size: 12px
    }
 @media only screen and (min-width: 800px) {
    .top-elements{
        justify-content: space-between;
    }
    
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

