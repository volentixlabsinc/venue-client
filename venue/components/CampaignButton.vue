<template>
  <a :href="link" target="_blank">
    <div :style="{ borderBottom: '6px solid ' + highlight }" class="has-text-centered box">
      <img v-if="image" :src="image" width="64" height="64" class="p-b-sm">
      <div class="name is-size-6 has-text-weight-bold m-b-sm">{{ name }}</div>
      <div class="info is-size-7 p-b-lg">{{ info }}</div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    info: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    highlight: {
      type: String,
      default: "#ffffff00"
    }
  },
  data: function() {
    return {
      boxStyle: {
        backgroundColor: "black",
        borderWidth: "6px",
        borderColor: "red"
      }
    };
  }
};
</script>

<style scoped>
div.box {
  border-radius: 12px;
}

div.box div.name {
  height: 3em;
  padding-top: 0.6em;
  position: sticky;
  z-index: 1;
  border-radius: 500px;
}

div.box:hover div.name {
  color: white;
  background-color: #84429a;
}

div.box:hover div.info {
  opacity: 0.2;
}
</style>
