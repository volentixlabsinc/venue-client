<template>
    <tbody>
        <tr 
        @click="expandInfo"
        :style = "[userLine ? {'background-color': 'rgba(148, 168, 182, 0.2)'} : { 'background-color': 'transparent'}]" >
            <td 
            class="rank"
            :style="[toggleDescription ? {'border-bottom': 'none'} : { 'border-bottom': '1px solid #94A8B6'}]">
            {{elements.rank}}</td>
            <td 
            class="username"
            :style="[toggleDescription ? {'border-bottom': 'none'} : { 'border-bottom': '1px solid #94A8B6'}]">
            {{elements.username}}</td>
            <td 
            class="tokens"
            :style="[toggleDescription ? {'border-bottom': 'none'} : { 'border-bottom': '1px solid #94A8B6'}]">
            {{elements.total_tokens}}</td>
            <td 
            class="tokens-unity"
            :style="[toggleDescription ? {'border-bottom': 'none'} : { 'border-bottom': '1px solid #94A8B6'}]">VTX</td>
            <td 
            class="expand"
            :style="[toggleDescription ? {'border-bottom': 'none'} : { 'border-bottom': '1px solid #94A8B6'}]"><i class="fas fa-chevron-down"></i></td>
        </tr>

        <tr v-if="toggleDescription" class="toggleDescription">
            <td class="no-border"></td>
            <td class="no-border"></td>
            <td 
            class="expanded-data no-border">
            {{elements.total_posts}} post</td>
            <td 
            class="expanded-data no-border"
            colspan="2">
            {{elements.total_posts*100}} pts</td>
        </tr>
        <tr v-if="toggleDescription" class="toggleDescription-border">
            <td 
            class="expanded-data-border"
            colspan="5"></td>
            
        </tr>
    </tbody>

</template>

<script>
export default {
  props: {
      elements: {
          type: Object,
          default: null
      },
        sitewide: {
            type: Object,
            default: null
        },
        myRank: {
            type: Number,
            default: ''
        }
  },
   data() {
        return {
            toggleDescription: false,
            pointsPercent: null,
            tokensPercent: null,
            userTokens: null,
            userRank: 'my-element-container',
            otherRank: 'element-container',
            userLine: false,
            options: {
                useEasing: true,
                useGrouping: false,
                decimals: 3,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: ''
            },
        }
    },
    mounted() {
        this.calculatePercentages ()
        this.userLine = this.myRank === this.elements.rank;

    },
    methods: {
        calculatePercentages () {
            this.pointsPercent = (parseFloat(this.elements.total_points)*100)/parseFloat(this.sitewide.available_points);
            this.userTokens = parseFloat(this.elements.total_tokens);
        },
        expandInfo() {
            this.toggleDescription=!this.toggleDescription
            console.log('expand info');
        }
    },
}
</script>

<style scoped>
td {
    font-size: 18px;
    padding: 5px;
    border-bottom: 1px solid #94A8B6;
    text-align: left;
}

.rank{
    width: 25px;
    white-space: nowrap;
}

.username {
    width: 50%;
    text-align: left;
    padding-left: 0px;
}

.tokens-unity{
    width: 20px;
    text-align: right;
}
.expand{
    width: 5px;
    text-align: right;
}

.expanded-data{
    white-space: nowrap;
    background-color: rgb(148, 168, 182, 0.2);

}
.no-border {
    border-bottom: none;
}
</style>
