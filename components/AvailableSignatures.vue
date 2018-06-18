<template>
  <div>
    <form>
      <ul>
        <li v-for="sig in signatures" :key="sig.id">
          <div>
            <img :src="sig.image" >
            <button v-clipboard:copy="sig.code" v-clipboard:success="() => onCopy(sig)" class="button is-primary is-small is-outlined"
                    type="button">COPY CODE</button>
          </div>
        </li>
      </ul>
    </form>  
    <ModalWidget v-if="showModal" :request="'confirmCopy'" @close="showModal = false"/>
  </div>
</template>

<script>
import ModalWidget from "~/components/ModalWidget.vue";

export default {
  components: {
    ModalWidget
  },
  props: {
    signatures: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  created() {
    console.log("created", this.signatures);
  },
  methods: {
    onCopy: function(sig) {
      this.$store.commit("signatureCopied", sig.id);
      this.showModal = true;
    }
  }
};
</script>

<style scoped>
div {
  width: 100%;
}
ul {
  padding: 0;
  list-style-type: none;
}
li {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  margin-bottom: 10px;
}

li img {
  width: 100%;
  flex: 0 2 auto;
  border-radius: 5px;
}

li button {
  float: right;
}

form {
  max-width: 100%;
}
</style>
