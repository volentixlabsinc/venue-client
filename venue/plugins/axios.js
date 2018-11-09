export default ({ $axios, app }) => {
  $axios.setHeader("Accept", "application/json");
  $axios.setHeader("Content-Type", "application/json", ["post"]);

  // This should be handled by resetOnError in the config, but it's broke now
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 401) {
      // 401 Unauthorized
      $axios.setToken(false);
      app.$auth.reset();
    }
  });
};
