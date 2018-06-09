export const state = () => ({
    overallStats: {},
    userId: -1,
    language: 'en'
});

export const getters = {
    getOverallStats: (state) => {
        return state.overallStats;
    }
};

export const mutations = {
    changeOverallStatsMutation: (state, payload ) => {
        state.overallStats = payload;
    },
    authenticated (state, { userId, language }) {
        state.userId = userId
        state.language = language
    }
};

export const actions = {
    changeOverallStatsAction: ({ commit }, data) => {
        commit('changeOverallStatsMutation', data );  
    }
};
