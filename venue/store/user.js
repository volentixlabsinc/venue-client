import Cookies from "js-cookie";

export const state = () => ({
  userId: undefined,
  username: "",
  email: "",
  language: "en",
  isAuthenticated: false,
  token: ""
});

export const mutations = {
  authenticated(state, { userId, username, email, language, token }) {
    state.userId = userId;
    state.username = username;
    state.email = email;
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
  },

  setUserData(state, { username, email, language }) {
    state.username = username;
    state.email = email;
    state.language = language;
  },

  updateUsername(state, username) {
    state.username = username;
  },

  updateEmail(state, email) {
    state.email = email;
  }
};
