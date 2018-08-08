<template>
  <div class="card-content has-text-centered">
    <div v-if="referrals.length > 0" >
      <b-table :data="referrals" :paginated="paginated" :per-page="perPage" :mobile-cards="false" striped is-narrow>
        <template slot-scope="props">
          <b-table-column :label="$t('labels.refferals_friends')" field="UserFriends">
            {{ props.row.username }}
          </b-table-column>
          <b-table-column :label="$t('labels.referrals_status')" field="status">
            {{ setStatus(props.row.amount) }}
          </b-table-column>    
        </template>
      </b-table>
    </div>
    <br>
    <div class="is-size-6 has-text-centered level is-mobile">
      <div class="level-item">
        <img class="bottomPic" src="~assets/02.png">
      </div>
      <div class="level-item">
        {{ $t('labels.registered_friends', countReferrals(referrals), { count: countReferrals(referrals) }) }}
      </div>
      <div class="level-item">
        <img class="bottomPic" src="~assets/03.png">
      </div>
      <div class="level-item">
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
      default: 3
    },
    paginated: {
      type: Boolean,
      default: true
    },
    limit: {
      type: Number,
      default: undefined
    }
  },
  data() {
    let data = {
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
      var status = "";
      if (amount > 0) status = this.$t("labels.status_verified");
      else status = this.$t("labels.status_pending");
      return status;
    },
    countReferrals(referrals) {
      var refNumber = 0;
      for (var i = 0; i < referrals.length; i++)
        if (referrals[i].amount > 0) refNumber++;
      return refNumber;
    },
    countVTX(referrals) {
      var refferralVTX = 0;
      for (var i = 0; i < referrals.length; i++)
        if (referrals[i].amount > 0)
          refferralVTX = refferralVTX + referrals[i].amount;
      return refferralVTX;
    }
  }
};
</script>

<style>
.table tr.is-selected td {
  /* Without this there is an unexpected bottom line on the bottom of the cell */
  border-color: inherit;
}

td.chevron-cell {
  padding-left: 12px; /* This seems to be the default; but best to force it here */
}

tr.is-selected td.chevron-cell {
  border-left: 5px #84429a solid;
  padding-left: 7px; /* Subtract 5px from the default padding of 12px */
}

.bottomPic {
  height: 4rem;
}
</style>
