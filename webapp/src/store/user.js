import Cookies from "js-cookie";

export const state = () => ({
  userId: undefined,
  username: "",
  email: "",
  language: "en",
  isAuthenticated: false,
  bttToken: "",
  referral_code: ""
});

export const mutations = {
  authenticated(state, { userId, username, email, language, referral_code }) {
    state.userId = userId;
    state.username = username;
    state.email = email;
    state.language = language;
    state.isAuthenticated = true;
    state.referral_code = referral_code;
  },

  unauthenticated(state) {
    state.userId = -1;
    state.username = "";
    state.language = "en";
    state.isAuthenticated = false;
    state.token = "";
    state.email = "";
    state.referral_code = "";

    this.$axios.setToken(false);
    Cookies.remove("btt-token");
  },

  setUserData(state, { username, email, language, referral_code }) {
    state.username = username;
    state.email = email;
    state.language = language;
    state.referral_code = referral_code;
  },

  SET_BTT_TOKEN(state, bttToken) {
    state.bttToken = bttToken;
    this.$axios.setToken(bttToken, "Token");
    Cookies.set("btt-token", bttToken);
  },

  updateUsername(state, username) {
    state.username = username;
  },

  updateEmail(state, email) {
    state.email = email;
  }
};
