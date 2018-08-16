export async function loadUserData(commit, $axios /*, forumProfileId*/) {
  const retrieveStats = $axios.$get("/retrieve/stats/").then(stats => {
    if (stats.success && !stats.stats.fresh) {
      commit("setUserStats", stats.stats);
    }
  });

  // Get the user's current signature
  const retrieveMySignature = refreshMySignature($axios, commit);

  const setUserData = $axios
    .$get("/retrieve/user/")
    .then(data => commit("user/setUserData", data));

  await Promise.all([retrieveStats, retrieveMySignature, setUserData]);
}

export async function retrieveAvailableSignatures(
  $axios,
  forumUserRank,
  forumProfileId
) {
  return (await $axios.$get("/retrieve/signatures/", {
    params: {
      forum_site_id: 1,
      forum_user_rank: forumUserRank,
      forum_profile_id: forumProfileId
    }
  })).signatures;
}

export function refreshMySignature($axios, commit) {
  return $axios
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
}
