import { merge } from "lodash";
import {
  readFromCookie,
  clearCookie,
  clearLocalStorage
} from "~/services/utils/browser-storage";
import axios from "axios";

const baseUrl = process.env.baseUrl;

axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['Accept'] = 'application/json';

class VenueAPI {
  /**
   * Performs a 'get' on the specified URL.
   */
  async get(url, authentication, options) {
    //IMPORTANT need to handle cases where there
    //IS a cookie token but it's invalid

    var isAuth = readFromCookie();
    console.log("Authentication is", authentication);
    if (!isAuth || authentication === false) {
      console.log("No authentication request", isAuth);
      return await axios.get(baseUrl + url)
        .catch(err => {
          console.log("!", err);
        });
    } else if (isAuth) {
      console.log("authenticated requests happening");
      return await axios.get(baseUrl + url)
        .then(res => {
          if (res.status === 401) {
            clearCookie();
            clearLocalStorage();
            this.$router.push("/");
          }
        })
        .catch(err => {
          console.log("!", err);
        });
    }
  }

  /**
   * Send JSON data as a POST on the specified URL.
   */
  async postJson(url, json, authorization) {
    var isAuth = readFromCookie();
    if (!authorization) {
      console.log("THIS NO AUTH ONE IS TRIGGERING");
      return await axios.post(baseUrl + url, json)
    } else {
      console.log("AUTHORIZATION SENDING");
      var authHeader = "Token " + isAuth;
      return await axios.post(baseUrl + url, body)
    }
  }
}

export default new VenueAPI();
