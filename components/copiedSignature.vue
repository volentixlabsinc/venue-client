<template>
  <modal name="copied-signature"
         :adaptive="true"
         :max-width="1000"
         :max-height="400"
         width="80%"
         height="50%"
         @before-open="beforeOpen">
    <div style="padding:30px; text-align: center; color: black">
      <div class="steps-section">
        <h1>Signature Code Copied!</h1>
      </div>
      <div class="tips-section">
        <div class="loader"/>
        <div class="text-modal">
          <h2>Simply paste the copied code to your Bitcointalk profile</h2>
          <h3 style="text-align:left">We will attempt to auto-verify placement for the next : {{ timer }} minutes </h3>
          <div class="flex-row-80"><label>click for help</label> <button>Verify Now</button></div>
        </div>
      </div>
    </div>
  </modal>
</template>
<script>
export default {
  name: "CopiedSignature",
  methods: {
    beforeOpen(event) {
      if (event.params.show === false) {
        event.stop();
      }
    }
  }
};
</script>
