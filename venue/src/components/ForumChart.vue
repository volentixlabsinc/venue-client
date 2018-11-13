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

    let numberOfPosts = [];
    let dates = [];
    let splitDate = "";
    let steps = 1;

    for (var i = 0; i < dailyStats.length; i++) {
      numberOfPosts.push(dailyStats[i].posts.total);
      splitDate = dailyStats[i].date.split("-");
      dates.push(`${splitDate[1]}-${splitDate[2]}`);
    }

    // numberOfPosts = [107, 108, 107, 108, 109, 122, 108];
    // numberOfPosts = [207, 208, 207, 208, 209, 222, 208];
    // numberOfPosts = [53, 54, 54, 55, 56, 57, 58];
    if (Math.min(...numberOfPosts) >= 100) {
      steps = 20;
    } else if (Math.min(...numberOfPosts) >= 10) {
      steps = 10;
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
            data: numberOfPosts
          }
        ]
      },
      chartOptions: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: steps,
                reverse: false,
                suggestedMax: numberOfPosts[numberOfPosts.length - 1] + 10
              }
            }
          ]
        }
      }
    };
  }
};
</script>
