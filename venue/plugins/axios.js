export default ({ $axios, store }) => {
  $axios.setHeader("Accept", "application/json");
  $axios.setHeader("Content-Type", "application/json", ["post"]);

  // TODO Move token init from nuxtServerInit to here

  const token = store.state.user.token;
  if (token) {
    $axios.setToken(token, "Token");
  } else {
    $axios.setToken(false);
  }

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 401) {
      // 401 Unauthorized
      store.commit("user/unauthenticated");
    }
  });
};
