

// state
const state = {
    activeUserForum: {
        forumId: null, 
        forumProfileId: null,
        userId: null,
        activeSignature: null
    },
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
    },
    changeActiveUserForumSignatureMutation: (state, payload ) => {
        console.log('Payload is', payload); 
        console.log('state is', state)

        state.activeUserForum.activeSignature = payload;
    }

};


// actions
const actions = {
    changeActiveUserForumAction: ({ commit }, data) => {
        commit('changeActiveUserForumMutation', data );   
    },
    changeActiveUserForumSignatureAction: ({ commit }, sig) => {
        commit('changeActiveUserForumSignatureMutation', sig );   
    }
};


export default {
    state,
    getters,
    mutations,
    actions
};