export default ({ $axios }) => {
  $axios.setHeader("Accept", "application/json");
  $axios.defaults.headers.common["Content-Type"] = "application/json";

  console.log("Axios baseURL: ", $axios.defaults.baseURL);

  // This should be handled by resetOnError in the config, but it's broke now
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 401) {
      // 401 Unauthorized
      $axios.setToken(false);
    }
  });
};
