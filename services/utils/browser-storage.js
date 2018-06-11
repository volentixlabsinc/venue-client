import Cookies from 'js-cookie';

const sessionTimeoutMinutes = 30; // minutes

export function clearSessionStorage() {
    if (sessionStorage) {
        sessionStorage.clear();
    }
}

export function clearLocalStorage() {
    if (localStorage) {
        localStorage.clear();
    }
}

function isSessionActive() {
    if (!sessionStorage) {
        return false;
    } else {
        const timestamp = readFromSessionStorage('timestamp', true);
        if (!timestamp) {
            return false;
        }
        const now = new Date();
        // const expiration = new Date(JSON.parse(expiry));
        const expiration = new Date(timestamp);
        expiration.setMinutes(expiration.getMinutes() + sessionTimeoutMinutes);

        return (now.getTime() < expiration.getTime());
    }
}

function touchSession() {
    writeToSessionStorage('timestamp', new Date(), true);
}

export function writeToLocalStorage(key, data) {
    if (localStorage) {
        localStorage.setItem(key, JSON.stringify(data));
    }
}

export function readFromCookie(){
    return Cookies.get('csrftoken')
}

export function writeToCookie(token){
    Cookies.set('csrftoken', token);
}

export function clearCookie() {
    if (Cookies.get('csrftoken')) {
        Cookies.remove('csrftoken');
    }
}


export function readFromLocalStorage(key) {
    if (localStorage) {
        try {
            var data = localStorage.getItem(key);
            if (data) {
                return JSON.parse(data);
            }
        } catch (error) {
            // ignored
        }
    }
    return undefined;
}

export function writeToSessionStorage(key, data, ignoreExpiry) {
    if (sessionStorage) {
        // Whether to ignore expiration. This is a special
        // case to allow storing the timestamp
        if (!ignoreExpiry) {
            if (!isSessionActive()) {
                clearSessionStorage();
            }
            touchSession();
        }

        if (data === undefined) {
            sessionStorage.removeItem(key);
        } else if (typeof data === 'string') {
            sessionStorage.setItem(key, data);
        } else {
            sessionStorage.setItem(key, JSON.stringify(data));
        }
    }
}

export function readFromSessionStorage(key, ignoreExpiry) {
    if (sessionStorage) {
        var data;

        // Whether to ignore expiration. This is a special
        // case to allow storing the timestamp
        if (!ignoreExpiry) {
            if (!isSessionActive()) {
                clearSessionStorage();
            } else {
                touchSession();
            }
        }

        try {
            data = sessionStorage.getItem(key);
            if (data) {
                return JSON.parse(data);
            }
        } catch (error) {
            // We assume the error is due to parsing, so return the
            // data as is.
            return data;
        }
    }
    return undefined;
}
