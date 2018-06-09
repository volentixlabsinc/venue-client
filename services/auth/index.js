import Cookies from 'js-cookie';
import VenueApi from '~/services/utils/venue-api';
import { readFromCookie , clearCookie, clearLocalStorage, clearSessionStorage } from '~/services/utils/browser-storage';

export function isAuthenticated() {
    var exp = readFromCookie(); 
    return (exp && (parseInt(exp) * 1000) > Date.now());
}

export function authenticate(email, password) {
    return VenueApi.postJson('/authenticate/', {
        username: email,
        password: password,
    }, false );
}

export function logout() {
    clearCookie();
    clearLocalStorage();
    clearSessionStorage();
}