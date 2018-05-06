import VenueAPI from '../utils/venue-api';

function retrieveForumProfiles() {
    return VenueAPI.get(`/retrieve/forum-profiles/`);
}

function retrieveForumSites() {
    return VenueAPI.get(`/retrieve/forum-sites/`);
}



export { 
    retrieveForumProfiles,
    retrieveForumSites
}