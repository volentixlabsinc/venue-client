<template>
  <div class="small">
    <line-chart :chart-data="datacollection" :options="options"></line-chart>
  </div>
</template>

<script>
import LineChart from "./linechart.js";

export default {
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: null,
      options: {
        legend: {
          display: true,
          position: "bottom"
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(255, 255, 255, 0.1)"
              },
              ticks: {
                min: 0,
                beginAtZero: true,
                display: true,
                fontColor: "rgba(255, 255, 255, 0.541)"
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(255, 255, 255, 0.03)"
              },
              ticks: {
                min: 0,
                beginAtZero: true,
                stepSize: 1,
                fontColor: "rgba(255, 255, 255, 0.541)"
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    if (this.$store.state.userStats.user_level) {
      this.fillData();
    }
  },
  methods: {
    fillData() {
      const dailyStats = this.$store.state.userStats.user_level.daily_stats;

      let numberOfPosts = [];
      let dates = [];
      let splitDate = "";
      let rankPostion = [];

      for (var i = 0; i < dailyStats.length; i++) {
        numberOfPosts.push(dailyStats[i].posts);
        rankPostion.push(dailyStats[i].rank);
        splitDate = dailyStats[i].date.split("-");
        dates.push(`${splitDate[1]}-${splitDate[2]}`);
      }

      this.datacollection = {
        labels: dates,
        datasets: [
          {
            label: "Number of Posts",
            lineTension: 0.01,
            backgroundColor: "rgba(133, 68, 154, 0.079)",
            borderColor: "#85449A",
            borderWidth: "1",
            data: numberOfPosts //[2,3,5,3,6,7,8]
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
      };
    }
  }
};
</script>