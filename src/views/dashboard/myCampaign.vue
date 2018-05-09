<template>
<div class="my-campaign">
   
          
         <div class="my-campaign_info">
           <h1 class="dashboard-numbers"><ICountUp
            :startVal="50"
            :endVal="data.overall_rank"
            :decimals="0"
            :duration="2.5"
            :options="options"
          /></h1>
          <!-- <h1 class="dashboard-numbers"># {{data.overall_rank}}</h1> -->
          <h4 class="info-subtitles">RANK</h4>
        </div>

        <div class="my-campaign_info">
          <h1 class="dashboard-numbers"><ICountUp
            :startVal="data.total_posts+20"
            :endVal="data.total_posts"
            :decimals="0"
            :duration="2.5"
            :options="options"
          /></h1>
          <h4 class="info-subtitles">POSTS</h4>
        </div>
        <div class="my-campaign_info">
          <h1 class="dashboard-numbers"><ICountUp
            :startVal="0"
            :endVal="data.total_points"
            :decimals="0"
            :duration="2.5"
            :options="options"
          /></h1>
          <h4 class="info-subtitles">POINTS</h4>
        </div>
</div>
</template>

<script>
import ICountUp from 'vue-countup-v2';
export default {
  props: {
    data: {
      type: Object,
      default: {}
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
  }
}  
</script>

<style scoped>
.my-campaign{
  height:auto;
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top:10px;
  padding-bottom: 15px;
}

.my-campaign-title{
  width: 100%;
}
.info-subtitles {
  padding: 0px;
  margin: 0px;
   padding-top: 5px;
   color: rgba(255, 255, 255, 0.541);
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
.my-campaign_info{
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
}
.my-campaign_info>h2{
  margin: 0px;
}

@media only screen and (min-width: 800px) {
  .my-campaign{
  order:1;
  padding: 0px;
}

.my-campaign_info{
  height: 40%;
}

.dashboard-numbers {
  font-size: 50px;
}
.my-campaign_info{
 width: 110px;
 min-height: 110px;
}
}
</style>