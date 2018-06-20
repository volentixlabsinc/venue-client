<template>
  <line-chart :data="data" :options="chartOptions" class="chart"/>
</template>

<script>
import LineChart from "~/components/LineChart.js";

export default {
  components: {
    LineChart
  },
  data() {
    const dailyStats = this.$store.state.userStats.user_level.daily_stats;
    console.log("dailyStats: ", dailyStats);

    let numberOfPosts = [];
    let dates = [];
    let splitDate = "";
    let rankPostion = [];

    for (var i = 0; i < dailyStats.length; i++) {
      numberOfPosts.push(dailyStats[i].posts.total);
      rankPostion.push(dailyStats[i].rank);
      splitDate = dailyStats[i].date.split("-");
      dates.push(`${splitDate[1]}-${splitDate[2]}`);
    }
    console.log("numberOfPosts: ", numberOfPosts);
    return {
      data: {
        labels: dates,
        datasets: [
          {
            label: "Number of Posts",
            lineTension: 0.01,
            // backgroundColor: "#84429a",
            borderColor: "#84429a",
            borderWidth: "1",
            data: numberOfPosts //[2, 3, 5, 3, 6, 7, 8]
          },
          {
            label: "My Rank",
            lineTension: 0.01,
            backgroundColor: "rgba(148, 168, 182, 0.05)",
            borderColor: "#94A8B6",
            borderWidth: "2",
            data: rankPostion //[2,3,1,5,3,2,1]
          }
        ]
      },
      chartOptions: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                beginAtZero: true,
                stepSize: 1,
                reverse: true
              }
            }
          ]
        }
      }
    };
  }
};
</script>
