import VenueAPI from '../utils/venue-api';

function retrieveForumProfiles(forumId, userId) {
    return VenueAPI.get(`/retrieve/forum-profiles/?forum_id=${forumId}&forum_user_id=${userId}`);
}

function retrieveForumSites() {
    return VenueAPI.get(`/retrieve/forum-sites/`);
}



export { 
    retrieveForumProfiles,
    retrieveForumSites
}