import VenueAPI from '../utils/venue-api';

function retrieveStats() {
    return VenueAPI.get(`/retrieve/stats/`);
}



export { 
    retrieveStats
}