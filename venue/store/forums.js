import Vue from "vue";

export const state = () => ({
  // Map of forum ID to forum information
  // 1: {                      <-- the ID of the forum
  //     forumUserId: 1929041  <-- the ID of the user on the forum
  //     forumProfileId: 9   <-- the ID of the user-forum relationship (forum_profile_id in API)
  //     position: "Newbie",
  //     signatureId: 2
  // }
});

export const getters = {
  byForumId: state => forumId => {
    return state[forumId];
  }
};

export const mutations = {
  register(state, { forumId, forumUserId, forumProfileId, signatureId }) {
    if (!state[forumId]) {
      state[forumId] = {};
    }

    if (forumUserId) {
      Vue.set(state[forumId], "forumUserId", forumUserId);
    }

    if (forumProfileId) {
      Vue.set(state[forumId], "forumProfileId", forumProfileId);
    }

    if (signatureId) {
      Vue.set(state[forumId], "signatureId", signatureId);
    }
  }
};
