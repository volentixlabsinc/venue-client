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
        // TODO Check for errors
        const result = await this.$axios.$post("/manage/change-username/", {
          username: this.newValue
        });
        if (result.success === true) {
          this.$auth.setUser(
            Object.assign(this.$store.state.user, { username: this.newValue })
          );

          // Since this username has changed, need to refresh the leaderboard data
          this.$axios
            .$get("/retrieve/leaderboard-data/")
            .then(data => this.$store.commit("setLeaderboardData", data));
        }
      }
      this.$parent.close();
    }
  }
};
</script>
