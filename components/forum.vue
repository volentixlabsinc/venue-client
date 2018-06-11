<template>
<div class="forum">
<h2 class="forum-title">BITCOINTALK ACTIVITY</h2>
<div class="chart"> 
<forum-chart :width="350" :height="200" ></forum-chart>
</div>
</div>
</template>

<script>
import ForumChart from '~/components/forumActivity/ForumChart.vue';

export default {
  props: {
    forumInfo: {
      type: Object
    },
  },
  components: {
     ForumChart,
  }
}
</script>

<style scoped>
.forum {
    height: 100%;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.forum-title{
  font-weight: 500;
  text-shadow: 3px 3px 5px #824363;
  width: 80%;
  text-align: center;
}

.chart {
  width: 100%;
  height: 100%;
  display: flex;
}
.chart * {
  width: 100%;
  height: 100%;
}
.fa-edit {
    color:white !important;
}
@media only screen and (min-width: 800px) {
.forum {
  margin-top:0px;
  padding-top: 0px;
  align-items: flex-start;
}
.forum-title{
  font-weight: 200;
  text-shadow: none;
  width: 80%;
  text-align: center;
}
.chart {
  width: 95%;
  height: 100%;
  display: flex;
}



}
</style>

<style>
#line-chart {
  width: 100% !important;
  height: 100% !important;
}
</style>