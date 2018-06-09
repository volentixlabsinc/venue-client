export const state = () => ({
    overallStats: {},
});

export const getters = {
    getOverallStats: (state) => {
        return state.overallStats;
    }
};

export const mutations = {
    changeOverallStatsMutation: (state, payload ) => {
        state.overallStats = payload;
    }
};

export const actions = {
    changeOverallStatsAction: ({ commit }, data) => {
        commit('changeOverallStatsMutation', data );  
    }
};
