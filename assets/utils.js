
async function registerForumUser (vm, forumId, forumUserId) {
  const profileData = await vm.$axios.$get('/check/profile/', {
    params: {
      forum_id: forumId,
      forum_user_id: forumUserId
    }
  })

    // FIXME Handle this better
    if (!profileData.found) {
      vm.error = true;
      return
    }

  const forumProfile = await vm.$axios.$post('/create/forum-profile/', {
    forum_id: forumId,
    forum_user_id: forumUserId
  })
  vm.$store.commit('forums/register', {
    forumId: forumId,
    forumUserId,
    forumProfileId: forumProfile.id
  })
}

export {
  registerForumUser
}