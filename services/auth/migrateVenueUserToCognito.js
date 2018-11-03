"use strict";

const DEFAULT_AUTH_SERVER_URL = "https://venue.volentix.io";

const AWS = require("aws-sdk");
AWS.config.update({ region: process.env.AWS_REGION });

const CLIENT_ID = process.env.USER_POOL_CLIENT_ID;
const USER_POOL_ID = process.env.USER_POOL_ID;

const axios = require("axios").create({
  headers: {
    "Content-Type": "application/json"
  }
});

// axios.interceptors.request.use(request => {
//   console.log(">", JSON.stringify(request, null, 2));
//   return request;
// });

module.exports.handler = async function(event, context) {
  const { authServerUrl, username, password } = Object.assign(
    { authServerUrl: DEFAULT_AUTH_SERVER_URL },
    JSON.parse(event.body)
  );

  console.log("Running migrateVenueUserToCognito with user: " + username);

  var cognitoService = new AWS.CognitoIdentityServiceProvider();

  //Check to see if the user exists in the User Pool using AdminGetUser()
  var params = {
    UserPoolId: USER_POOL_ID,
    Username: username
  };
  console.log("params", params);

  try {
    const user = await cognitoService.adminGetUser(params).promise();
    console.log("found user in User Pool", user);

    if (user) {
      //User exists in the User Pool, so tell the app not to retry sign-in
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "NO_RETRY",
          input: event
        })
      };
    }
  } catch (lookup_err) {
    if (lookup_err.code !== "UserNotFoundException") {
      throw lookup_err;
    }
    // User does not exist in the User Pool, try to migrate
    console.log(
      "User does not exist in User Pool, attempting migration: " + username
    );

    //Attempt to sign in the user with existing system
    console.log("Calling " + authServerUrl + "/api/authenticate/");

    let res;
    try {
      res = await axios.post(authServerUrl + "/api/authenticate/", {
        username,
        password
      });
    } catch (err) {
      if (err.response && err.response.status === 400) {
        console.log(
          "User does not exist in User Pool or existing system: " + username
        );
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: "NO_RETRY",
            input: event
          })
        };
      } else {
        throw err;
      }
    }

    const user = res.data;
    console.log("Verified user with existing system: " + username);

    //Create the user with AdminCreateUser()
    params = {
      UserPoolId: USER_POOL_ID,
      Username: username,
      MessageAction: "SUPPRESS", //suppress the sending of an invitation to the user
      TemporaryPassword: password,
      UserAttributes: [
        { Name: "preferred_username", Value: username },
        { Name: "email", Value: user.email }, //using sign-in with email, so username is email
        { Name: "email_verified", Value: user.email_confirmed.toString() },
        { Name: "locale", Value: user.language },
        { Name: "custom:legacy_id", Value: user.user_profile_id }
      ]
    };

    try {
      await cognitoService.adminCreateUser(params).promise();
    } catch (err) {
      console.log("Failed to Create migrating user in User Pool: " + username);
      throw new Error(err);
    }

    //Successfully created the migrating user in the User Pool
    console.log("Successful AdminCreateUser for migrating user: " + username);
    //Now sign in the migrated user to set the permanent password and confirm the user
    params = {
      AuthFlow: "ADMIN_NO_SRP_AUTH",
      ClientId: CLIENT_ID,
      UserPoolId: USER_POOL_ID,
      AuthParameters: { USERNAME: username, PASSWORD: password }
    };

    let data;
    try {
      data = await cognitoService.adminInitiateAuth(params).promise();
    } catch (signin_err) {
      console.log("Failed to sign in migrated user: " + username);
      console.log(signin_err, signin_err.stack);
      throw new Error(signin_err);
    }

    //Handle the response to set the password

    //Confirm the challenge name is NEW_PASSWORD_REQUIRED
    if (data.ChallengeName !== "NEW_PASSWORD_REQUIRED") {
      // unexpected challenge name - log and exit
      console.log(
        "Unexpected challenge name after adminInitiateAuth (" +
          data.ChallengeName +
          "), migrating user created, but password not set"
      );
      throw new Error("Unexpected challenge name");
    }

    params = {
      ChallengeName: "NEW_PASSWORD_REQUIRED",
      ClientId: CLIENT_ID,
      UserPoolId: USER_POOL_ID,
      ChallengeResponses: {
        NEW_PASSWORD: password,
        USERNAME: data.ChallengeParameters.USER_ID_FOR_SRP
      },
      Session: data.Session
    };

    try {
      await cognitoService.adminRespondToAuthChallenge(params).promise();
    } catch (err) {
      console.log("Unxpected error responding to auth challenge");
      throw err;
    }
    // successful response
    console.log("Completed migrate to Cognito");

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "RETRY",
        input: event
      })
    };
  }
};
