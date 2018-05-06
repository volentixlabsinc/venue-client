import VenueAPI from '../utils/venue-api';

function checkForEmail(email) {
    return VenueAPI.get(`/check/email-exists/?=${email}`);
}

function checkForumProfile(profile) {
    return VenueAPI.get(`/check/profile/?=${profile}`);

}

function checkForUsername(username) {
    return VenueAPI.get(`/check/username-exists/?=${username}`);
}

function changeEmail(email) {
    return VenueAPI.postJson('/manage/change-email/', {email});
}

function changeUsername(username) {
    return VenueAPI.postJson('/manage/change-username/', 
    {username});

}

function changePassword(password) {
    return VenueAPI.postJson('/manage/change-password/', 
    {password});

}

//? Not enough detail in ap
function confirmEmail(password) {
    return VenueAPI.get('/manage/confirm-email');

}

function confirmEmail(user) {
    return VenueAPI.get(`/retrieve/user?=${user}`);

}

function retrieveUser(){
    return VenueAPI.get('/retrieve/user/')
}



export {
    checkForEmail,
    checkForumProfile,
    checkForUsername,
    changeEmail,
    changeUsername,
    changePassword,
    confirmEmail,
    retrieveUser


}; 