import { Pie, mixins } from "vue-chartjs";
import "chart.piecelabel.js";
const { reactiveProp } = mixins;

export default {
  extends: Pie,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      options: {
        legend: {
          display: false,
          position: "bottom"
        },
        pieceLabel: {
          mode: "value",
          fontColor: ["#fff", "transparent"],
          fontSize: 12,
          precision: 1
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
