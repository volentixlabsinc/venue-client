<template>
    <tbody>
        <tr 
        :style = "[this.myRank === this.elements.rank ? {'background-color': 'rgba(46, 46, 63)'} : { 'background-color': 'transparent'}]" >
            <td 
            class="rank">
            {{elements.rank}}</td>
            <td 
            colspan="2"
            class="username">
            {{elements.username}}</td>
             <td 
            class="empty-cell"></td>
            <td 
            class="tokens">
            {{elements.total_tokens}}</td>
            <td 
            class="tokens-unity">VTX</td>
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
            default: 0
        }
  },
   data() {
        return {
            pointsPercent: null,
            tokensPercent: null,
            userTokens: null,
            userRank: 'my-element-container',
            otherRank: 'element-container',
            userEntry: null,
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

</style>
