<template>
    <tbody>
        <tr 
        @click="expandInfo"
        :style = "[this.myRank === this.elements.rank ? {'background-color': 'rgba(46, 46, 63)'} : { 'background-color': 'transparent'}]" >
            <td 
            class="rank"
            :style="[toggleDescription ? {'border-bottom': 'none'} : { 'border-bottom': '1px solid #94A8B6'}]">
            {{elements.rank}}</td>
            <td 
            colspan="2"
            class="username"
            :style="[toggleDescription ? {'border-bottom': 'none'} : { 'border-bottom': '1px solid #94A8B6'}]">
            {{elements.username}}</td>
             <td 
            class="empty-cell"
            :style="[toggleDescription ? {'border-bottom': 'none'} : { 'border-bottom': '1px solid #94A8B6'}]"></td>
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
            class="expanded-data no-border"
            colspan="1">
            {{elements.total_posts}} Post</td>
            <td 
            class="expanded-data no-border total-points"
            colspan="3">
            {{elements.total_points}} Points</td>
            <td 
            class="expanded-data no-border"></td>
        </tr>
        <tr v-if="toggleDescription" class="toggleDescription-border">
            <td 
            class="expanded-data-border"
            colspan="7"></td>
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
            userEntry: null,
        }
    },
    methods: {
        
        expandInfo() {
            this.toggleDescription=!this.toggleDescription
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
    width: 5px;
    white-space: nowrap;
}

.username {
    width: 50%;
    text-align: left;
    padding-left: 0px;
}
.empty-cell {
    width: 50%;
    text-align: left;
    padding-left: 0px;
}

.tokens{
    width: 50px;
    text-align: right;
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
    text-align: right;
}
.total-points{
    text-align: center;
}
.no-border {
    border-bottom: none;
}
</style>
