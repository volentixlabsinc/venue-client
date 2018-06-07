<template>
  <main class="main">
    <div class="container">
      <h3>CURRENT SIGNATURE</h3>
      <img :src="currentSignatureImg" />

      <h2>AVAILABLE BITCOIN SIGNATURES</h2>
      <AvailableSignatures />
    </div>  
  </main>
</template>

<script>
  import AvailableSignatures from "../../components/AvailableSignatures.vue"

  export default {
    data() {
      return {
        currentSignatureImg: this.$store.state.signatures.activeUserForum.activeSignature.image
      }
    },
    components: {
      AvailableSignatures
    }
  }
</script>

<style scoped>

h2 {
  text-align: left;
}

h3 {
  text-align: left;
}

.main {
    display: flex;
    width: 100%;
    color: white;
}
.container {
    width: 95%;
    display: flex;
    flex-direction: column;
    text-align:inherit;
}

</style>
