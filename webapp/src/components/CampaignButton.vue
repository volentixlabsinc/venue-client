<template>
  <div v-if="newTab">
    <a v-if="status === 'completed'" :href="link" target="_blank">
      <div :style="{ borderBottom: '6px solid ' + highlight }" class="has-text-centered box" style="background: lightgray;">
        <img v-if="image" :src="image" :width="width" :height="height" class="p-b-sm">
        <div class="is-size-6 has-text-weight-bold m-b-sm">{{ name }}</div>
        <div class="title is-size-8">Campaign Ended!</div>
      </div>
    </a>
    <a v-else :href="link" target="_blank">
      <div :style="{ borderBottom: '6px solid ' + highlight }" class="has-text-centered box">
        <img v-if="image" :src="image" :width="width" :height="height" class="p-b-sm">
        <div class="name is-size-6 has-text-weight-bold m-b-sm">{{ name }}</div>
        <div class="info is-size-7">{{ info }}</div>
      </div>
    </a>
  </div>
  <div v-else>
    <a v-if="status === 'completed'" style="cursor: default;">
      <div :style="{ borderBottom: '6px solid ' + highlight }" class="has-text-centered box" style="background: lightgray;">
        <img v-if="image" :src="image" :width="width" :height="height" class="p-b-sm">
        <div class="is-size-6 has-text-weight-bold m-b-sm">{{ name }}</div>
        <div class="title is-size-8">Campaign Ended!</div>
      </div>
    </a>
    <router-link v-else :to="localizedRoute(link, $i18n.locale)">
      <div :style="{ borderBottom: '6px solid ' + highlight }" class="has-text-centered box">
        <img v-if="image" :src="image" :width="width" :height="height" class="p-b-sm">
        <div class="name is-size-6 has-text-weight-bold m-b-sm">{{ name }}</div>
        <div class="info is-size-7">{{ info }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: '"active'
    },
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
    },
    height: {
      type: Number,
      default: 64
    },
    width: {
      type: Number,
      default: 64
    },
    newTab: {
      type: Boolean,
      default: true
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
  border-radius: 500px;
}

div.box div.info {
  height: 4rem;
}

div.box:hover div.name {
  color: white;
  background-color: #84429a;
}

div.box:hover div.info {
  opacity: 0.2;
}
</style>
