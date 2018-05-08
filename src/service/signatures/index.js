import VenueAPI from '../utils/venue-api';

function retrievSignatures(forumId, forumProfileId) {
    return VenueAPI.get(`/retrieve/signatures/?forum_site_id=${forumId}&forum_user_rank=Brand+new&forum_profile_id=${forumProfileId}`);
}

function retrievSignatureCode() {
    return VenueAPI.get(`/retrieve/signature-code/`);

}

function createForumProfile() {
    return VenueAPI.postJson(`/create/forum-profile/`);
}

function createSignature() {
    return VenueAPI.postJson(`/create/signature/`);
}

function createUser() {
    return VenueAPI.postJson(`/create/user/`);
}

function checkProfile(userId, forumId) {
    return VenueAPI.get(`/check/profile/?forum=${forumId}&profile_url=${userId}`);

}


export { 
    retrievSignatures,
    retrievSignatureCode,
    createForumProfile,
    createSignature,
    createUser,
    checkProfile
}