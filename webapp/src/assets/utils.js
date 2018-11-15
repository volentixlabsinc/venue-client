export function loadUserData(commit, $axios) {
  const retrieveStats = $axios.$get("/retrieve/stats/").then(stats => {
    if (stats.success && !stats.stats.fresh) {
      commit("setUserStats", stats.stats);
    }
    return stats;
  });

  // Get the user's current signature
  const retrieveMySignature = refreshMySignature($axios, commit);

  return Promise.all([retrieveStats, retrieveMySignature]);
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
      let signature;
      if (sigs.success && sigs.signatures.length > 0) {
        signature = sigs.signatures[0];
        commit("setSignature", signature);
      }
      return signature;
    });
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

export function logAxiosError(name, error) {
  console.log("Error occurred in " + name);
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("  ", error.message);
  }

  console.log(error.config);
}
