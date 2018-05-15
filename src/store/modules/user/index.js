

// state
const state = {
    userData: {
        total_tokens: null,
    },
};


// getters
const getters = {
    getUserData: (state) => {
        return state.userData;
    }
};


// mutations
const mutations = {
    changeUserDataMutation: (state, payload ) => {
        state.userData = payload;
    }
};


// actions
const actions = {
    changeUserDataAction: ({ commit }, data) => {
        commit('changeUserDataMutation', data );   
    }
};


export default {
    state,
    getters,
    mutations,
    actions
};