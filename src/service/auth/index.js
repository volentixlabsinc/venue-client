import Cookies from 'js-cookie';
import VenueApi from '../../service/utils/venue-api';
import { readFromCookie , clearCookie, clearLocalStorage, clearSessionStorage } from '../../service/utils/browser-storage';

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

export function logout(email, password) {
    clearCookie();
    clearLocalStorage();
    clearSessionStorage();
    this.$router.push('/')
}