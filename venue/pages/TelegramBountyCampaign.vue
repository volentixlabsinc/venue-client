<template>
  <div>
    <div class="box m-l-xxl m-r-xxl m-t-lg p-l-none p-r-none">
      <img src="~/assets/telegram-campaign-banner.png">
      <div>
        <div class="has-text-centered">Welcome, please follow the steps</div>

        <div class="m-l-xxl m-r-xxl m-t-lg">
          <section class="m-t-lg m-b-lg">
            <div class="is-4 has-text-weight-bold">Step <span class="step-num">1</span> Read the rules</div>
            <hr>
            <b-collapse :open="showRules">
              <div class="content">
                <ol>
                  <li>You must register on venue.volentix.io as a user and subscribe to Volentix Mailing list.</li>
                  <li>ONLY DISCUSS BOUNTY-CAMPAIGNS IN VENUE TELEGRAM.</li>
                  <li>Join Volentix telegram and stay unl the day of distribuon (30 days after crowd sale is finished) – 1 stake.</li>
                  <li>Do not discuss bounes in official Volentix telegram channel</li>
                  <li>EXTRA STAKES &#8211; Ask a queson (NOT ABOUT BOUNTY) in the Volenx<br >
                    telegramt.me/volentix which creates discussion or invite lots of your friends to the Volentix telegram.
                    Moderators may give you extra stakes. READ WHITE PAPER FOR DISCUSSION TOPICS.</li>
                  <li>Change your telegram username to include: &#8211; Volentix.io &#8211; or &#8211; Venue.ninja &#8211; then you
                  can earn extra stakes.</li>
                </ol>
                <!-- TODO Load HTML from separate file; I couldn't find how to do it this way -->
                <!-- {{ require("~/static/telegram-rules.html") }} -->
              </div>
            </b-collapse>
            <div class="has-text-centered">
              <a class="button is-success is-outlined is-rounded" @click="showRules = !showRules">
                <span>Rules</span>
                <span class="icon">
                  <i v-if="showRules" class="fas fa-chevron-up fa-1g"/>
                  <i v-else class="fas fa-chevron-down fa-1g"/>
                </span>
              </a>
            </div>
          </section>
          <section class="m-t-lg m-b-lg">
            <div class="is-4 has-text-weight-bold">Step <span class="step-num">2</span> Join Volentix Telegram</div>
            <hr>
            <div class="has-text-centered">
              <a target="_blank" href="https://t.me/Volentix" class="button is-success is-outlined is-rounded">Join Volentix Telegram</a>
            </div>
          </section>
          <section class="m-t-lg m-b-lg">
            <div class="is-4 has-text-weight-bold">Step <span class="step-num">3</span> Enter your Telegram username</div>
            <hr>
            <div class="field m-l-none m-r-none ">
              <div class="control has-text-centered">
                <input class="input is-success" type="text" placeholder="Telegram username">
              </div>
            </div>
          </section>
          <section class="m-t-lg m-b-lg">
            <div class="is-4 has-text-weight-bold">Step <span class="step-num">4</span> Submit the data</div>
            <hr>
            <div class="has-text-centered">
              <a class="button is-success is-outlined is-rounded">Submit</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showRules: false
    };
  }
};
</script>

<style scoped>
.step-num {
  background: #84429a;
  border-radius: 0.8em;
  -moz-border-radius: 0.8em;
  -webkit-border-radius: 0.8em;
  color: white;
  display: inline-block;
  font-weight: bold;
  line-height: 1.6em;
  margin-right: 5px;
  text-align: center;
  width: 1.6em;
}

hr {
  margin: -0.4rem -4rem 1rem;
}

input.input {
  max-width: 12rem;
}
</style>
