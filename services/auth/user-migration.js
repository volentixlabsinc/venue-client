"use strict";

const axios = require("axios").create({
  headers: {
    "Content-Type": "application/json"
  }
});

// axios.interceptors.request.use(request => {
//   console.log(">", JSON.stringify(request, null, 2));
//   return request;
// });

module.exports.handler = async function(event, context, callback) {
  console.log("Running migrateVenueUserToCognito with user: " + event.userName);

  if (event.triggerSource == "UserMigration_Authentication") {
    // authenticate the user with your existing user directory service
    const user = await authenticateUser(event.userName, event.request.password);
    console.log("Found user in Venue", user);
    if (user) {
      event.response.userAttributes = convertFromVenueToCognitoUser(user);

      event.response.finalUserStatus = "CONFIRMED";
      event.response.messageAction = "SUPPRESS";
      console.log("response", event.response);
      context.succeed(event);
    } else {
      // Return error to Amazon Cognito
      callback("Bad password");
    }
  } else if (event.triggerSource == "UserMigration_ForgotPassword") {
    // // Lookup the user in your existing user directory service
    // user = lookupUser(event.userName);
    // if ( user ) {
    //     event.response.userAttributes = {
    //         "email": user.emailAddress,
    //         // required to enable password-reset code to be sent to user
    //         "email_verified": "true"
    //     };
    //     event.response.messageAction = "SUPPRESS";
    //     context.succeed(event);
    // }
    // else {
    //     // Return error to Amazon Cognito
    //     callback("Bad password");
    // }
  } else {
    // Return error to Amazon Cognito
    callback("Bad triggerSource " + event.triggerSource);
  }
};

async function authenticateUser(username, password) {
  //Attempt to sign in the user with existing system
  console.log("Calling " + process.env.VENUE_AUTH_URL);

  let res;
  try {
    res = await axios.post(process.env.VENUE_AUTH_URL, {
      username,
      password
    });
    console.log("Verified user with existing system: " + username);
    return res.data;
  } catch (err) {
    console.error("Failure authenticating", err);
    throw err;
  }
}

function convertFromVenueToCognitoUser(user) {
  return {
    username: user.username,
    preferred_username: user.username,
    email: user.email,
    email_verified: user.email_confirmed.toString(),
    locale: user.language,
    "custom:legacy_id": user.user_profile_id,
    "custom:legacy_referral_code": user.referral_code
  };
}
