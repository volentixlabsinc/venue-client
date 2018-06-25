export async function registerForumUser(vm, forumId, forumUserId) {
  const profileData = await vm.$axios.$get("/check/profile/", {
    params: {
      forum_id: forumId,
      forum_user_id: forumUserId
    }
  });

  const position = profileData.position;

  // FIXME Handle this better
  if (!profileData.found) {
    vm.error = true;
    return;
  }

  const forumProfile = await vm.$axios.$post("/create/forum-profile/", {
    forum_id: forumId,
    forum_user_id: forumUserId
  });
  vm.$store.commit("forums/register", {
    forumId: forumId,
    forumUserId,
    forumProfileId: forumProfile.id,
    position
  });

  return Object.assign(forumProfile, { position });
}

export async function loadUserData(commit, $axios /*, forumProfileId*/) {
  const retrieveStats = $axios.$get("/retrieve/stats/").then(stats => {
    if (stats.success && !stats.stats.fresh) {
      commit("setUserStats", stats.stats);
    }
  });

  // Get the user's current signature
  const retrieveMySignature = $axios
    .$get("/retrieve/signatures/", {
      params: {
        forum_site_id: 1,
        own_sigs: true
      }
    })
    .then(sigs => {
      if (sigs.success && sigs.signatures.length > 0) {
        commit("setSignature", sigs.signatures[0]);
      }
    });

  await Promise.all([retrieveStats, retrieveMySignature]);
}

export async function retrieveAvailableSignatures($axios, forumProfile) {
  return (await $axios.$get("/retrieve/signatures/", {
    params: {
      forum_site_id: 1,
      forum_user_rank: forumProfile.position,
      forum_profile_id: forumProfile.id
    }
  })).signatures;
}
