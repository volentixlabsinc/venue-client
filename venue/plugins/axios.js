export default ({ $axios }) => {
  $axios.setHeader("Accept", "application/json");
  $axios.setHeader("Content-Type", "application/json", ["post"]);

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 401) {
      // 401 Unauthorized
      this.$auth.logout();
    }
  });
};
