

// state
const state = {
    overallStats: {},
};


// getters
const getters = {
    getOverallStats: (state) => {
        return state.overallStats;
    }
};


// mutations
const mutations = {
    changeOverallStatsMutation: (state, payload ) => {
        state.overallStats = payload;
    }
};


// actions
const actions = {
    changeOverallStatsAction: ({ commit }, data) => {
        commit('changeOverallStatsMutation', data );  
    }
};


export default {
    state,
    getters,
    mutations,
    actions
};