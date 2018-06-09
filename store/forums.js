export const state = () => ({
    // Map from forum_id to information about the forum
    forums: {
        // 1: {
        //     userId: 1929041
        // }
    }
});

export const getters = {
    getOverallStats: (state) => {
        return state.overallStats;
    }
};

export const mutations = {
    setUserId (state, { forumId, userId }) {
        state.forums[forumId]
            ? state.forums[forumId].userId = userId 
            : state.forums[forumId] = userId
    },
    changeOverallStatsMutation: (state, payload ) => {
        state.overallStats = payload;
    },
};
