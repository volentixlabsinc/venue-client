<template>
  <div class="card-content has-text-centered">
    <div v-if="referrals.length > 0" class="p-r-lg p-l-lg">
      <b-table :data="referrals" :paginated="isPaginated(referrals)" :per-page="perPage" :mobile-cards="false" class="table-invite" striped is-narrow>
        <template slot-scope="props">
          <b-table-column :label="$t('labels.referrals_friends')" class="has-text-centered" field="UserFriends">
            {{ props.row.username }}
          </b-table-column>
          <b-table-column :label="$t('labels.referrals_status')" class="has-text-centered" field="status">
            {{ setStatus(props.row.amount) }}
          </b-table-column>    
        </template>
      </b-table>
    </div>
    <br>
    <div class="is-size-6 has-text-centered level is-mobile p-r-lg p-l-lg">
      <div class="level-item">
        <img class="bottomPic" src="~assets/registered-friends.png">
      </div>
      <div class="level-item has-text-weight-bold">
        {{ $tc('labels.registered_friends', countReferrals(referrals), { count: countReferrals(referrals) }) }}
      </div>
      <div class="level-item">
        <img class="bottomPic" src="~assets/VTX-earned.png">
      </div>
      <div class="level-item has-text-weight-bold">
        {{ $t('labels.earned_vtx', { count: countVTX(referrals) }) }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    perPage: {
      type: Number,
      default: 2
    },
    limit: {
      type: Number,
      default: undefined
    }
  },
  data() {
    const data = {
      referrals: [
        {
          user_id: "",
          username: "",
          amount: 0,
          status: ""
        }
      ]
    };
    return data;
  },
  mounted() {
    this.fetchReferrals();
  },
  methods: {
    async fetchReferrals() {
      const userReferrals = await this.$axios.$get("/retrieve/referrals/");
      this.referrals = userReferrals.referrals;
    },
    setStatus(amount) {
      const status =
        amount > 0
          ? this.$t("labels.status_verified")
          : this.$t("labels.status_pending");
      return status;
    },
    countReferrals(referrals) {
      let refNumber = 0;
      for (let i = 0; i < referrals.length; i++) {
        if (referrals[i].amount > 0) {
          refNumber++;
        }
      }
      return refNumber;
    },
    countVTX(referrals) {
      let refferralVTX = 0;
      for (let i = 0; i < referrals.length; i++) {
        if (referrals[i].amount > 0) {
          refferralVTX = refferralVTX + referrals[i].amount;
        }
      }
      return refferralVTX;
    },
    isPaginated(referrals) {
      if (referrals.length > this.perPage) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
.bottomPic {
  height: 6rem;
}
.bottom-info {
  padding-right: 2rem;
  padding-left: 2rem;
}
.table-invite th .th-wrap {
  display: block !important;
  text-align: center !important;
}
.table-invite .level {
  display: block !important;
}
.table-invite .level-left {
  display: block !important;
}
.table-invite .level-right {
  display: block !important;
}
</style>
