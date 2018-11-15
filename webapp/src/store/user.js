import Cookies from "js-cookie";

export const state = () => ({
  userId: undefined,
  username: "",
  email: "",
  language: "en",
  isAuthenticated: false,
  token: "",
  referral_code: ""
});

export const mutations = {
  authenticated(
    state,
    { userId, username, email, language, token, referral_code }
  ) {
    state.userId = userId;
    state.username = username;
    state.email = email;
    state.language = language;
    state.isAuthenticated = true;
    state.token = token;
    state.referral_code = referral_code;

    this.$axios.setToken(token, "Token");
    Cookies.set("venue", token);
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
    Cookies.remove("venue");
  },

  setUserData(state, { username, email, language, referral_code }) {
    state.username = username;
    state.email = email;
    state.language = language;
    state.referral_code = referral_code;
  },

  updateUsername(state, username) {
    state.username = username;
  },

  updateEmail(state, email) {
    state.email = email;
  }
};
