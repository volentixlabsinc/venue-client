<template>
  <tbody>
    <tr 
      :style = "myRank === elements.rank ? {'background-color': '#84429a', 'color': 'white', 'font-weight': 'bold'} : { 'background-color': 'transparent'}" >
      <td 
        class="rank">
        {{ elements.rank }}</td>
      <td 
        colspan="2"
        class="username">
        {{ elements.username }}</td>
      <td 
        class="empty-cell"/>
      <td 
        class="tokens">
        {{ totalTokens }}</td>
      <td 
        class="tokens-unity">VTX</td>
    </tr>
  </tbody>

</template>

<script>
import numeral from "numeral";

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
      totalTokens: numeral(this.elements.total_tokens).format(),
      pointsPercent: null,
      tokensPercent: null,
      userTokens: null,
      userRank: "my-element-container",
      otherRank: "element-container",
      userEntry: null
    };
  }
};
</script>

<style scoped>
td {
  font-size: 18px;
  padding: 5px;
  border-bottom: 1px solid #94a8b6;
  text-align: left;
}

.rank {
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

.tokens {
  width: 50px;
  text-align: right;
}

.tokens-unity {
  width: 20px;
  text-align: right;
}
</style>
