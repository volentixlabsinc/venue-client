import Cookies from "js-cookie";

export const state = () => ({
  userId: undefined,
  username: "",
  language: "en",
  isAuthenticated: false,
  token: ""
});

export const mutations = {
  authenticated(state, { userId, username, language, token }) {
    state.userId = userId;
    state.username = username;
    state.language = language;
    state.isAuthenticated = true;
    state.token = token;

    this.$axios.setToken(token, "Token");
    Cookies.set("venue", token);
  },

  unauthenticated(state) {
    state.userId = -1;
    state.username = "";
    state.language = "en";
    state.isAuthenticated = false;
    state.token = "";

    this.$axios.setToken(false);
    Cookies.remove("venue");
  }
};
