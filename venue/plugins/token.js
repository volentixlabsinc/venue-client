export default ({ app, store }) => {
  app.$axios.setHeader("Accept", "application/json");
  app.$axios.setHeader("Content-Type", "application/json", ["post"]);

  // TODO Move token init from nuxtServerInit to here

  const token = store.state.user.token;
  if (token) {
    app.$axios.setToken(token, "Token");
  } else {
    app.$axios.setToken(false);
  }
};
