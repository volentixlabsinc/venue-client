import cookie from "cookie";
import { loadUserData } from "~/assets/utils.js";

export const state = () => ({
  copiedSignatureId: undefined,
  leaderboard: {
    // "rankings": [
    //   {
    //     "username": "joemar.ct",
    //     "rank": 1,
    //     "total_posts": 1,
    //     "total_points": 105,
    //     "total_tokens": 120000
    //   },
    //   ...
    // ],
    // "sitewide": {
    //   "available_points": "10,000",
    //   "available_tokens": "120,000",
    //   "total_users": 3,
    //   "total_posts": 2
    // },
    // "forumstats": {
    //   "posts": [
    //     {
    //       "forumSite": "bitcointalk.org",
    //       "value": 2,
    //       "color": "#2a96b6"
    //     },
    //     ...
    //   ],
    //   "users": [
    //     {
    //       "forumSite": "bitcointalk.org",
    //       "value": 3,
    //       "color": "#2a96b6"
    //     },
    //     ...
    //   ]
    // }
  },
  userStats: {
    hasCampaignData: false
    //   "fresh": false,
    //   "profile_level": [
    //     {
    //       "User_ID": "1929041",
    //       "forumSite": "bitcointalk.org",
    //       "forumUserId": "1929041",
    //       "forumUserRank": "Brand new",
    //       "numPosts": 0,
    //       "totalPoints": 0,
    //       "VTX_Tokens": 0
    //     }
    //   ],
    //   "user_level": {
    //     "daily_stats": [
    //       {
    //         "posts": {
    //           "credited": 0,
    //           "pending": 0,
    //           "total": 0
    //         },
    //         "rank": null,
    //         "date": "2018-06-04"
    //       },
    //       {
    //         "posts": {
    //           "credited": 0,
    //           "pending": 0,
    //           "total": 0
    //         },
    //         "rank": null,
    //         "date": "2018-06-05"
    //       },
    //       {
    //         "posts": {
    //           "credited": 0,
    //           "pending": 0,
    //           "total": 0
    //         },
    //         "rank": null,
    //         "date": "2018-06-06"
    //       },
    //       {
    //         "posts": {
    //           "credited": 0,
    //           "pending": 0,
    //           "total": 0
    //         },
    //         "rank": null,
    //         "date": "2018-06-07"
    //       },
    //       {
    //         "posts": {
    //           "credited": 0,
    //           "pending": 0,
    //           "total": 0
    //         },
    //         "rank": 2,
    //         "date": "2018-06-08"
    //       },
    //       {
    //         "posts": {
    //           "credited": 0,
    //           "pending": 0,
    //           "total": 0
    //         },
    //         "rank": 2,
    //         "date": "2018-06-09"
    //       },
    //       {
    //         "posts": {
    //           "credited": 0,
    //           "pending": 0,
    //           "total": 0
    //         },
    //         "rank": 2,
    //         "date": "2018-06-10"
    //       }
    //     ],
    //     "total_posts": 0,
    //     "total_points": 0,
    //     "total_points_pct": 0,
    //     "total_tokens": 0,
    //     "overall_rank": 2
    //   },
  },
  forum_profile: {
    forum_id: "",
    forum_user_id: "",
    forum_profile_id: "",
    position: ""
  }
});

export const actions = {
  // This is executed on the server
  async nuxtServerInit({ commit }, { req, app }) {
    // If we receive a request with our cookie, we can load the userStats for that
    // user here on the server and fill in the store, saving a call to the server
    // to get that data.

    if (!req) {
      return;
    }

    const strategy = app.$auth.$storage.getUniversal("strategy");

    // Pull the token from the cookie in the request header, if it is set
    const cookieHeader = req.headers.cookie;
    const cookies = cookie.parse(cookieHeader);
    const token = cookies["auth._token." + strategy];

    if (token) {
      app.$auth.setToken(strategy, token);

      try {
        await loadUserData(commit, app.$axios);
      } catch (exc) {
        console.log("Could not load data from server; removing old token");
        app.$axios.setToken(false);
      }
    } else {
      app.$axios.setToken(false);
    }

    const leaderboardData = await app.$axios.$get(
      "/retrieve/leaderboard-data/"
    );
    if (leaderboardData) {
      commit("setLeaderboardData", leaderboardData);
    }
  },
  clearUserState({ commit }) {
    commit("setUserStats", {});
    commit("setSignature", {});
    commit("clearForumProfile");
    // commit("user/unauthenticated");
  }
};

export const mutations = {
  signatureCopied(state, signatureId) {
    state.copiedSignatureId = signatureId;
  },
  setLeaderboardData(state, { rankings, sitewide, forumstats }) {
    state.leaderboard = {
      ...state.leaderboard,
      rankings,
      sitewide,
      forumstats
    };
  },
  setUserStats(state, { fresh, profile_level, user_level }) {
    state.userStats = { ...state.userStats, fresh, profile_level, user_level };
    state.userStats.hasCampaignData = fresh === false;
  },
  setSignature(state, { id, image }) {
    state.signature = { ...state.signature, id, image };
  },
  setForumProfile(
    state,
    { forum_id, forum_user_id, forum_profile_id, position, id }
  ) {
    if (forum_id) {
      state.forum_profile.forum_id = forum_id;
    }
    if (forum_user_id) {
      state.forum_profile.forum_user_id = forum_user_id;
    }

    // Yes these map to the same field in the store
    if (forum_profile_id) {
      state.forum_profile.forum_profile_id = forum_profile_id;
    }
    if (id) {
      state.forum_profile.forum_profile_id = id;
    }

    if (position) {
      state.forum_profile.position = position;
    }
  },
  clearForumProfile(state) {
    state.forum_profile = {
      ...state.forum_profile,
      forum_id: "",
      forum_user_id: "",
      forum_profile_id: "",
      position: ""
    };
  }
};
