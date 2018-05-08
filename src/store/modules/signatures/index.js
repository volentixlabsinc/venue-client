

// state
const state = {
    activeUserForum: null,
};


// getters
const getters = {
    getActiveUserForum: (state) => {
        return state.activeUserForum;
    }
};


// mutations
const mutations = {
    changeActiveUserForumMutation: (state, payload ) => {
        state.activeUserForum = payload;
    }

};


// actions
const actions = {
    changeActiveUserForumAction: ({ commit }, data) => {
        commit('changeActiveUserForumMutation', data );
       
    },

};


export default {
    state,
    getters,
    mutations,
    actions
};