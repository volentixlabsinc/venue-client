import { merge } from 'lodash';
import {readFromCookie, clearCookie, clearLocalStorage } from '../../service/utils/browser-storage'; 
const baseUrl = '/api';

const POSTPUT_OPTIONS = {
    credentials: 'same-origin',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

class VenueAPI {
    /**
     * @deprecated we now use the header for auth token
     * @param {String} url
     */
    addTokenToUrl(url) {
        return url;
    }

    addPrefixToUrl(url) {
        if (!url.startsWith(baseUrl)) {
            if (url.startsWith('/')) {
                url = url.substring(1);
            }
            return baseUrl + url;
        }
        return url;
    }

    /**
     * The URL we want combined with an auth key. Limit the use
     * of this cases where can't easily pass the header, during
     * a 'GET'.
     *
     * @param {String} url
     */
    getAuthenticatedUrl(url) {
        return this.addPrefixToUrl(url);
    }

    /**
     * Add the entries in the params object as key=values to the url
     *
     * @param {String} url
     * @param {Object} params
     */
    addParamsToUrl(url, params) {
        if (params) {
            let queryItems = [];
            let newUrl = url;
            // add the individual items for the params object as key=value string entries
            for (var prop in params) {
                if (params[prop] !== undefined) {
                    queryItems.push(`${prop}=${encodeURI(params[prop])}`);
                }
            }
            // if there are items, then create the query string and then add it to the url,
            // taking into account whether there are already parameters
            if (queryItems.length > 0) {
                const queryStr = queryItems.join('&');
                const idx = newUrl.indexOf('?');
                if (idx > 0 && idx !== newUrl.length - 1) {
                    newUrl += '&';
                } else if (idx < 0) {
                    newUrl += '?';
                }
                newUrl += queryStr;
            }
            return newUrl;
        } else {
            return url;
        }
    }

    /**
     * Performs a 'get' on the specified URL.
     * Returns a promise, based on the ES6 'fetch' function
     */
    get(url, options) {
        //IMPORTANT need to handle cases where there
        //IS a cookie token but it's invalid
        
        var isAuth = readFromCookie(); 
        if(!isAuth) {
        return fetch( baseUrl + url, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
            }
        )
        .then(res => {
            if(res.status === 200) {
                return res; 
            } 
            else if (res.status === 401)
            clearCookie(); 
            clearLocalStorage();
        })
        .then(res => {
            return res.json();
        })
        .catch(err => {
            console.log('!', err)
        })
    } else {
        return fetch( baseUrl + url, {
            headers : 
            new Headers({
                'Authorization': 'Token ' + isAuth, 
                'Content-Type': 'application/json'

              }), 
    
            }
        )
        .then(res => {
            if(res.status === 200) {
                return res; 
            } 
            else if (res.status === 401)
            clearCookie(); 
            clearLocalStorage();

        })
        .then(res => {
            return res.json();
        })
        .catch(err => {
            console.log('!', err)
        })

    }
       
    }

    /**
     * Send JSON data as a POST on the specified URL.
     * Returns a promise, based on the ES6 'fetch' function
     */
    post(url) {
        var adjustedUrl = this.addTokenToUrl(this.addPrefixToUrl(url));
        return fetch(adjustedUrl, merge({
            method: 'POST'
        }, POSTPUT_OPTIONS, {credentials: 'same-origin'}));
    }

    /**
     * Send JSON data as a POST on the specified URL.
     * Returns a promise, based on the ES6 'fetch' function
     */
    postJson(url, json, authorization) {
        var isAuth = readFromCookie(); 
        if(!authorization) {
            console.log('THIS NO AUTH ONE IS TRIGGERING')
            return fetch(baseUrl + url, merge({
                method: 'POST'
            }, POSTPUT_OPTIONS, {
                body: JSON.stringify(json),
                credentials: 'same-origin'
            })).then((resp) => {
                return resp;
            });
        } else {
            console.log("AUTHORIZATION SENDING")
            var authHeader = 'Token ' + isAuth; 
            return fetch(baseUrl + url, merge({
                method: 'POST',
                headers: new Headers({
                    'Authorization': authHeader,
                    'Content-Type':'application/json'
                })
            }, POSTPUT_OPTIONS, {
                body: JSON.stringify(json),
                credentials: 'same-origin'
            })).then((resp) => {
                return resp;
            });


        }
      
    }

   
    /**
     * Send JSON data as a PUT on the specified URL.
     * Returns a promise, based on the ES6 'fetch' function
     */
    putJson(url, json) {
        var adjustedUrl = this.addTokenToUrl(this.addPrefixToUrl(url));
        return fetch(baseUrl + url, merge({
            method: 'PUT'
        }, POSTPUT_OPTIONS, {
            body: JSON.stringify(json),
            credentials: 'same-origin'
        }));
    }

    /**
     * Send JSON data as a PATCH on the specified URL.
     * Returns a promise, based on the ES6 'fetch' function
     */
    patchJson(url, json) {
        return fetch(adjustedUrl, merge({
            method: 'PATCH'
        }, POSTPUT_OPTIONS, {
            body: JSON.stringify(json),
            credentials: 'same-origin'
        }));
    }

    /**
     * Send JSON data as a DELETE on the specified URL.
     * Returns a promise, based on the ES6 'fetch' function
     */
    delete(url, json) {
        var adjustedUrl = this.addTokenToUrl(this.addPrefixToUrl(url));
        return fetch(adjustedUrl, merge({
            method: 'DELETE'
        }, POSTPUT_OPTIONS, {
            body: JSON.stringify(json),
            credentials: 'same-origin'
        }));
    }    
}

export default new VenueAPI();
