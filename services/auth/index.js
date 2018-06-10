import VenueApi from '~/services/utils/venue-api';

export async function authenticate(email, password) {
    return await VenueApi.login({
        username: email,
        password: password,
    });
}

export function logout() {
    return VenueApi.logout()
}
