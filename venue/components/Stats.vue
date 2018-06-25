<template>
  <div class="level box">
    <div v-for="stat in data" :key="stat.id" class="level-item">
      <p class="heading">{{ stat.label }}</p>
      <img v-if="stat.trophy" id="trophy" src="/img/svg/trophy2.svg">
      <h1 class="title is-1">
        <ICountUp
          v-if="stat.value !== undefined"
          :start-val="stat.startAt || 0"
          :end-val="stat.value"
          :duration="2.5"
          :options="options"
      /><span v-else>N/A</span></h1>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";

export default {
  components: {
    ICountUp
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      options: {
        useEasing: true,
        useGrouping: false,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      }
    };
  }
};
</script>

<style scoped>
/* .level {
} */

.level-item {
  flex-direction: column;
}

#trophy {
  height: 50px;
  transform: rotate(-10deg);
  margin: -50px 100px 0 -25px;
}
</style>
