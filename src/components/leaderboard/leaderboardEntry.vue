<template>
<tr :style = "[userLine ? {'background-color': 'rgba(148, 168, 182, 0.2)'} : { 'background-color': 'transparent'}]" >
    <td># {{elements.rank}}</td>
    <td class="USERNAME">{{elements.username}}</td>
    <td class="posts">{{elements.total_posts}}</td>
    <td class="tokens">{{elements.total_tokens}}</td>
</tr>
<!-- <div :class="[myRank==elements.rank ? userRank : '', otherRank]" >
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
        <div class="data">
        <div class="campaigns_info">
            <h1 class="dashboard-numbers-points">
                {{elements.total_points}} PTS
            </h1>
            <p class="info-subtitles">users total points</p>
        </div>
        <div class="campaigns_info">
            <h1 class="dashboard-numbers-points">
                {{elements.total_tokens}} VTX
            </h1>
            <p class="info-subtitles">users total points</p>
        </div>
        </div>
        <div class="data">
        <div class="campaigns_info">
                <p class="info-subtitles">% of overall campaign activity</p>
             <forum-stats-posts  :chart-data="datacollectionPoints"  ></forum-stats-posts>
        </div> 
        </div>      
    </div>
    </div> -->
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
            userLine: false,
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
        this.userLine = this.myRank === this.elements.rank;

    },
    methods: {
        calculatePercentages () {
            this.pointsPercent = (parseFloat(this.elements.total_points)*100)/parseFloat(this.sitewide.available_points);
            this.userTokens = parseFloat(this.elements.total_tokens);
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

            this.datacollectionTokens = {
                labels: [
                    'User Tokens',
                ],
                datasets: [
                    {
                    label: 'Tokens',
                    backgroundColor: ['rgba(133, 68, 154, 0.278)', 'transparent'],
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
.USERNAME {
    width: 50%;
}

table td {
    font-size: 18px;
    padding: 5px;
}

th, td {
    border-bottom: 1px solid #94A8B6;
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

