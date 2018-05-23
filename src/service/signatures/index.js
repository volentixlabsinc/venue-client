import VenueAPI from '../utils/venue-api';

function retrievSignatures(ownSigs, forumId, forumProfileId) {
    var url
    if (ownSigs) {
      url = '/retrieve/signatures/?own_sigs=1'
    } else {
      url = url = `/retrieve/signatures/?forum_site_id=${forumId}&forum_user_rank=Brand+new&forum_profile_id=${forumProfileId}`
    }
    return VenueAPI.get(url);
}

function retrievSignatureCode() {
    return VenueAPI.get(`/retrieve/signature-code/`);

}

function createForumProfile(profile_url, forum_id, authorization) {
    return VenueAPI.postJson(`/create/forum-profile/`, {
        profile_url, 
        forum_id,
    }, authorization);
}

function createSignature(forum_profile_id, signature_id, authorization) {
    console.log('Creating Signature')
    return VenueAPI.postJson(`/create/signature/`, {
        forum_profile_id, 
        signature_id
    }, authorization);
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