<template>
  <tbody>
    <tr 
      :style = "myRank === elements.rank ? {'background-color': '#84429a', 'color': 'white', 'font-weight': 'bold'} : { 'background-color': 'transparent'}"
      @click="expandInfo" >
      <td 
        :style="[toggleDescription ? {'border-bottom': 'none'} : { 'border-bottom': '1px solid #94A8B6'}]"
        class="rank">
        {{ elements.rank }}</td>
      <td 
        :style="[toggleDescription ? {'border-bottom': 'none'} : { 'border-bottom': '1px solid #94A8B6'}]"
        colspan="2"
        class="username">
        {{ elements.username }}</td>
      <td 
        :style="[toggleDescription ? {'border-bottom': 'none'} : { 'border-bottom': '1px solid #94A8B6'}]"
        class="empty-cell"/>
      <td 
        :style="[toggleDescription ? {'border-bottom': 'none'} : { 'border-bottom': '1px solid #94A8B6'}]"
        class="tokens">
        {{ myTokens }}</td>
      <td 
        :style="[toggleDescription ? {'border-bottom': 'none'} : { 'border-bottom': '1px solid #94A8B6'}]"
        class="tokens-unity">VTX</td>
      <td 
        :style="[toggleDescription ? {'border-bottom': 'none'} : { 'border-bottom': '1px solid #94A8B6'}]"
        class="expand"><i class="fas fa-chevron-down"/></td>
    </tr>
        
    <tr v-if="toggleDescription" class="toggleDescription">
      <td class="no-border"/>
      <td class="no-border"/>
      <td 
        class="expanded-data no-border"
        colspan="1">
        {{ myPosts }} Post</td>
      <td 
        class="expanded-data no-border total-points"
        colspan="3">
        {{ myPoints }} Points</td>
      <td 
        class="expanded-data no-border"/>
    </tr>
    <tr v-if="toggleDescription" class="toggleDescription-border">
      <td 
        class="expanded-data-border"
        colspan="7"/>
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
      toggleDescription: false,
      pointsPercent: null,
      tokensPercent: null,
      userTokens: null,
      userRank: "my-element-container",
      otherRank: "element-container",
      userEntry: null
    };
  },
  computed: {
    myTokens() {
      return numeral(this.elements.total_tokens).format();
    },
    myPosts() {
      return numeral(this.elements.total_posts).format();
    },
    myPoints() {
      return numeral(this.elements.total_points).format();
    }
  },
  methods: {
    expandInfo() {
      this.toggleDescription = !this.toggleDescription;
    }
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
.expand {
  width: 5px;
  text-align: right;
}

.expanded-data {
  white-space: nowrap;
  background-color: rgb(148, 168, 182, 0.2);
  text-align: right;
}
.total-points {
  text-align: center;
}
.no-border {
  border-bottom: none;
}
</style>
