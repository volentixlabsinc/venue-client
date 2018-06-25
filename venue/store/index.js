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
  }
});

export const actions = {
  // This is executed on the server
  async nuxtServerInit({ commit }, { app, req }) {
    // TODO Move token into to token plugin

    // TODO We should be able to do these calls in parallel, but be aware that
    // a bad token might be passed to the leaderboard which will cause it to
    // fail

    // If we receive a request with our cookie, we can load the userStats for that
    // user here on the server and fill in the store, saving a call to the server
    // to get that data.
    if (!req) {
      return;
    }

    const cookieHeader = req.headers.cookie;

    console.log("cookie", cookieHeader);

    if (cookieHeader) {
      const cookies = cookie.parse(cookieHeader);
      if (cookies.venue) {
        app.$axios.setToken(cookies.venue.token, "Token");
        // This call also sets the token into $axios
        await commit("user/authenticated", {
          token: cookies.venue
        });

        try {
          await loadUserData(commit, app.$axios);
        } catch (exc) {
          // TODO Clear the cookie so we don't keep receiving old tokens
          console.warn("Caught exception in nuxtServerInit", exc);
          // FIXME Only clear token when the token is bad
          if (exc.response.status === 401) {
            // HTTP 401 Unauthorized means the token is bad
            commit("user/unauthenticated");
          }
        }
      }
    }

    commit(
      "setLeaderboardData",
      await app.$axios.$get("/retrieve/leaderboard-data/")
    );
  },
  clearUserState({ commit }) {
    commit("setUserStats", {});
    commit("setSignature", {});
    commit("user/unauthenticated");
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
  }
};
