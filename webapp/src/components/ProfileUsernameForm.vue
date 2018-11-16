<template>
  <div>
    <form method="POST" @submit.prevent="changeUsername">
      <div class="modal-card">
        <header class="modal-card-head" >
          <div class="modal-card-title">{{ $t('settings.btn_username') }}</div>
        </header>
        <section class="modal-card-body">
          <b-field>
            <span class="has-text-weight-bold">{{ $t('labels.current') }}:&nbsp;</span>
            <span>{{ value }}</span>
          </b-field>
          <b-field :label="$t('settings.new_username')">
            <b-input v-model="newValue" :placeholder="value" type="text" required />
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$parent.close()">{{ $t('buttons.btn_cancel') }}</button>
          <button class="button is-primary" type="submit">{{ $t('settings.btn_username') }}</button>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      newValue: ""
    };
  },
  methods: {
    async changeUsername() {
      if (this.newValue !== this.value) {
        try {
          const user = await Auth.currentAuthenticatedUser();
          await Auth.updateUserAttributes(user, {
            preferred_username: this.newValue
          });
          this.$store.commit("user/updateUsername", this.newValue);

          // Since this username has changed, need to refresh the leaderboard data
          this.$axios
            .$get("/retrieve/leaderboard-data/")
            .then(data => this.$store.commit("setLeaderboardData", data));

          this.$parent.close();
        } catch (err) {
          console.log(err);
        }
      }
      this.$parent.close();
    }
  }
};
</script>
