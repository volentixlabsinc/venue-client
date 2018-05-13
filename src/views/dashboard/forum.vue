<template>
<div class="forum">
<h3 class="forum-title">BITCOIN TALK <a  @click="onClickSignautre()"><i class="far fa-edit"></i></a></h3>
<div class="chart"> 
<line-chart  :chart-data="chartData" :width="350" :height="200" ></line-chart>
</div>
</div>
</template>

<script>
import lineChart from '../../components/forumActivity/linechart.js';

export default {
  props: {
    forumInfo: {
      type: Object
    },
    chartData: {
      type: Object
    }
  },
  methods: {
      onClickSignautre() {
        this.$router.push('/signature')
      },
  },
  components: {
     lineChart,
  }
}
</script>

<style scoped>
.forum {
    margin-top:10px;
    padding-top: 10%;
    height: 100%;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.forum-title{
  width: 80%;
  text-align: left;
  display: flex;
  justify-content: space-between;
}

.fa-edit {
    color:white !important;
}
@media only screen and (min-width: 800px) {
.forum {
    align-items: flex-start;
}
}
</style>
