
import { Pie, mixins } from 'vue-chartjs';
import 'chart.piecelabel.js';
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
  data () {
    return {
  options: {
    legend: {
      display: true,
      position: 'right',
    },
    pieceLabel: {
      mode: 'percentage',
      fontColor: ['#fff', 'transparent'],
      precision: 1
    }
    
    }
  }
},
  mounted () {
    this.renderChart(this.chartData, this.options );
}
}