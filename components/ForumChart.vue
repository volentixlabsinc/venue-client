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

    for (var i = 0; i < dailyStats.length; i++) {
      numberOfPosts.push(dailyStats[i].posts.total);
      splitDate = dailyStats[i].date.split("-");
      dates.push(`${splitDate[1]}-${splitDate[2]}`);
    }

    return {
      data: {
        labels: dates,
        datasets: [
          {
            label: "Number of Posts",
            lineTension: 0.01,
            backgroundColor: "rgba(148, 168, 182, 0.05)",
            borderColor: "#94A8B6",
            borderWidth: "2",
            data: numberOfPosts //[52, 49, 55, 58, 59, 60, 63]
          }
        ]
      },
      chartOptions: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                stepSize: 1,
                reverse: false,
                suggestedMax: 5
              }
            }
          ]
        }
      }
    };
  }
};
</script>
