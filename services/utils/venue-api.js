import axios from "axios";

import {
  readFromCookie,
  writeToCookie,
  clearCookie,
  clearLocalStorage,
  clearSessionStorage
} from "./browser-storage";

class VenueAPI {
  constructor() {
    this.http = axios.create({
      baseURL: process.env.baseUrl
    });

    this.http.defaults.headers.common["Accept"] = "application/json";
    this.http.defaults.headers.post["Content-Type"] = "application/json";

    const token = readFromCookie();
    console.log('cookie', token)
    if (token) {
        this.setToken(token)
    }
  }

  /**
   * Performs a 'get' on the specified URL.
   */
  async get (url) {
    //TODO need to handle cases where there is a cookie token but it's invalid

    return await this.http.get(url)
  }

  /**
   * Send JSON data as a POST on the specified URL.
   */
  async postJson (url, json) {
    return await this.http.post(url, json)
  }

  async login (json) {
        const result = await this.http.post('/authenticate/', json)
        if (result.status === 200) {
            writeToCookie(result.data.token)
            this.setToken(result.data.token)
        }
        return result
  }

  setToken (token) {
    this.http.defaults.headers.common["Authorization"] = "Token " + token;
  }

  clearToken () {
    console.log('clearing headers')
    console.log(this.http.defaults.headers)
    delete this.http.defaults.headers.common["Authorization"]
  }

  logout () {
    clearCookie();
    clearLocalStorage();
    clearSessionStorage();
  }
}

export default new VenueAPI();
