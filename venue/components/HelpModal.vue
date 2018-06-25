<template>

  <modal height="500px" name="HelpModal" @before-open="beforeOpen" @before-close="beforeClose">
    <div class="card is-vcentered" style="height:100%">
      <header class="card-header is-flex is-vcentered has-text-centered" >
        
        <button class="steps-buttons" @click="imageNumber=1">1</button>
        <hr :style="[imageNumber>=2 ? {'border-color':'#DD9C3F'} : {'border-color':'#cab595'}]" width="30%">
        <button :style="[imageNumber>=2 ? {'background-color':'#DD9C3F'} : {'background-color':'#cab595', 'border-color':'#cab595', 'box-shadow':'none'}]" 
                class="steps-buttons" 
                @click="imageNumber=2">2</button>
        <hr :style="[imageNumber>=3 ? {'border-color':'#DD9C3F'} : {'border-color':'#cab595'}]" width="30%">
        <button :style="[imageNumber>=3 ? {'background-color':'#DD9C3F'} : {'background-color':'#cab595', 'border-color':'#cab595', 'box-shadow':'none'}]" class="steps-buttons"
                @click="imageNumber=3">3</button>
      </header>

      <div class="card-content" style="height:75%">
        <HelpIdImages v-if="element=='ID'" :image-number="imageNumber" @userIdConfirmed="submitUserId"/>
        <HelpSignatureImages v-if="element=='signature'" :image-number="imageNumber" @userIdConfirmed="submitUserId"/>
      </div>
      
      <footer class="card-footer">
        <div class="card-footer-item">
          <button v-if="imageNumber<3" class="button is-primary" @click="imageNumber+=1">
            NEXT
          </button>
          <button v-else class="button is-primary" @click="$modal.hide('HelpModal')">
            close
          </button>
        </div>
      </footer>
 
    </div>
  </modal>
</template>

<script>
import HelpIdImages from "./HelpIdImages.vue";
import HelpSignatureImages from "./HelpSignatureImages.vue";

export default {
  name: "HelpModal",
  components: {
    HelpIdImages,
    HelpSignatureImages
  },
  data() {
    return {
      imageNumber: 1,
      element: undefined
    };
  },
  mounted() {
    // setInterval(this.swap, 4000);
  },
  methods: {
    beforeOpen(event) {
      this.element = event.params.element;
    },
    beforeClose() {
      this.imageNumber = 1;
    },
    submitUserId(profileData) {
      this.$emit("userIdConfirmed", profileData);
      this.$modal.hide("HelpModal");
    }
  }
};
</script>

<style scoped>
.steps-buttons {
  font-weight: bold;
  font-size: 14px;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background-color: #dd9c3f;
  border: 1px solid #dd9c3f;
  color: white;
  box-shadow: 1px 0.5px 8px rgba(0, 0, 0, 0.312);
}
header {
  display: flex !important;
  justify-content: center;
}
</style>
