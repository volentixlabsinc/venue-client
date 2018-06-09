import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['chartData'],
  data () {
    return {
      options: {

        legend: {
          display: true,
          position: 'bottom',
        },
        layout: {
          padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
          },
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              color: "rgba(255, 255, 255, 0.1)"
          },
            ticks: {
              min: 0,
              beginAtZero: true,
              display: true,
              fontColor: "rgba(255, 255, 255, 0.541)",
            }
          }],
          xAxes: [{
            gridLines: {
              display: true,
              color: "rgba(255, 255, 255, 0.03)"
          },
            ticks: {
              min: 0,
              beginAtZero: true,
              stepSize: 1,
              fontColor: "rgba(255, 255, 255, 0.541)",
            }
          }]
        }
      }
    }
  },
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
  }
}