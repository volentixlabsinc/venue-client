import Cookies from 'js-cookie';
import VenueApi from '../../service/utils/venue-api';
import { readFromCookie } from '../../service/utils/browser-storage';

export function isAuthenticated() {
    var exp = readFromCookie(); 
    return (exp && (parseInt(exp) * 1000) > Date.now());
}

export function authenticate(email, password) {
    return VenueApi.postJson('/authenticate/', {
        username: email,
        password: password,
    }, { preventForceLogout: true });
}

export function logout(email, password) {
    return postJson('/auth/logout', { preventForceLogout: true });
}