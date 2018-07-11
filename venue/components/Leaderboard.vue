<template>
  <b-table :data="rankings" :selected="selected" :detailed="detailed"
           :per-page="perPage" :paginated="paginated" :mobile-cards="false" striped is-narrow>
    <template slot-scope="props">
      <b-table-column field="rank" label="#" width="5" numeric>
        {{ props.row.rank }}
      </b-table-column>
      <b-table-column field="username" label="Username">
        {{ props.row.username }}
      </b-table-column>
      <b-table-column field="tokens" label="VTX" numeric>
        {{ formatVTX(props.row.total_tokens) }}
      </b-table-column>    
    </template>
    <template slot="detail" slot-scope="props">
      <div class="has-text-right">
        <span>{{ props.row.total_posts }} posts</span>
        <span class="p-l-lg">{{ props.row.total_points }} points</span>
      </div>
    </template>
  </b-table>    
</template>

<script>
import numeral from "numeral";

export default {
  props: {
    perPage: {
      type: Number,
      default: 10
    },
    detailed: {
      type: Boolean,
      default: true
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
    if (this.limit) {
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
  methods: {
    formatVTX: tokens => numeral(tokens).format()
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
</style>
