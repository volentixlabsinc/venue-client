<template>
<tbody>
<tr :style = "[userLine ? {'background-color': 'rgba(148, 168, 182, 0.2)'} : { 'background-color': 'transparent'}]" >
    <td style="white-space:nowrap"  class="rank"># {{elements.rank}}</td>
    <td class="username">{{elements.username}}</td>
    <td class="posts">{{elements.total_posts}}</td>
    <td class="tokens">{{elements.total_tokens}}</td>
    <td class="tokens-unity">VTX</td>
    <td class="expand" @click="expandInfo"><i class="fas fa-chevron-down"></i></td>
</tr>

<tr v-if="toggleDescription" class="toggleDescription">
    <td class=""></td>
    <td class=""></td>
    <td class=""></td>
    <td class=""></td>
    <td style="white-space:nowrap">{{elements.total_posts}} post</td>
    <td style="white-space:nowrap">{{elements.total_posts*100}} pts</td>
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

.toggleDescription{
    height:50px;
}
</style>
