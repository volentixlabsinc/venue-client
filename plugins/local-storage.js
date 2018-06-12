import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";

// FIXME This code automatically stores the data in the cookie correctly,
// but it doesn't seem to be restoring it into Vuex. For the moment it's
// disabled
export default ({ store, isDev }) => {
  createPersistedState({
    paths: ["user.token"],
    storage: {
      getItem: key => {
        console.log("getting item from " + key);
        const json = Cookies.getJSON(key);
        console.log("returning", json);
        // return process.client ? Cookies.getJSON(key) : cookie.parse(req.headers.cookie||'')[key]
        return json;
      },
      setItem: (key, value) => {
        console.log("set item " + key, value);
        return Cookies.set(key, value, { expires: 365, secure: !isDev });
      },
      removeItem: key => {
        console.log("remove", key);
        return Cookies.remove(key);
      }
    }
  })(store);
};
