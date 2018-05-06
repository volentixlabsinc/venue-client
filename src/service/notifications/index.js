import VenueAPI from '../utils/venue-api';

function retrieveNotifications() {
    return VenueAPI.get(`/retrieve/notifications/`);

}



export { 
    retrieveNotifications
}