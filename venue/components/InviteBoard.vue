<template>
  <b-table :data="rankings" :per-page="perPage" :paginated="paginated" :mobile-cards="false" striped is-narrow>
    <template slot-scope="props">
      <b-table-column field="UserFriends" label="Friends">
        {{ "Friend" }}
      </b-table-column>
      <b-table-column field="status" label="Status" numeric>
        {{ "Pending" }}
      </b-table-column>    
    </template>
  </b-table>
</template>


<script>
export default {
  props: {
    perPage: {
      type: Number,
      default: 4
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
    let rankings = this.$store.state.leaderboard.rankings;
    if (this.limit && rankings) {
      rankings = rankings.slice(0, this.limit);
    }
    return {
      rankings,
      selected:
        this.$store.state.user.isAuthenticated &&
        this.$store.state.userStats.hasCampaignData
          ? rankings.find(
              user =>
                this.$store.state.userStats.user_level.overall_rank ===
                user.rank
            )
          : undefined
    };
  },
  methods: {}
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
</style>
