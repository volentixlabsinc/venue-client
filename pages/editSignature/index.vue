<template>
  <main class="main">
    <div class="container">
      <h3>CURRENT SIGNATURE</h3>
      <!-- <img :src="currentSignatureImg" /> -->
      <h2>AVAILABLE BITCOIN SIGNATURES</h2>
      <AvailableSignatures />
    </div>
    <div class="right-panel">
    <campaignRightPanel />
    </div>  
  </main>
</template>

<script>
  import AvailableSignatures from "~/components/AvailableSignatures.vue"
  import campaignRightPanel from "~/components/campaignRightPanel.vue";

  export default {
    components: {
      AvailableSignatures,
      campaignRightPanel
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
    flex-direction: row;
    width: 100%;
    color: white;
    align-items: center;
}
.container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align:inherit;
}

.right-panel{
  width: 50%;
}
</style>
