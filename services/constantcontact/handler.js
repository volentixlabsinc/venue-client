"use strict";

const HttpStatus = require("http-status-codes");

const CONSTANT_CONTACT_URI = "https://api.constantcontact.com/v2";

// Constant Contact list "Venue webapp"
const VENUE_LIST_ID = "1360368441";

const axios = require("axios").create({
  baseURL: CONSTANT_CONTACT_URI,
  headers: {
    Authorization: "Bearer " + process.env.CONSTANT_CONTACT_ACCESS_TOKEN,
    "Content-Type": "application/json"
  },
  params: {
    api_key: process.env.CONSTANT_CONTACT_APP_KEY
  }
});

axios.interceptors.request.use(request => {
  console.log(">", JSON.stringify(request, null, 2));
  return request;
});

// {
//   user: {
//     email,
//   }
// }
module.exports.add = async (event, context, callback) => {
  console.log("< add", event);

  const user = event.user || event.request.userAttributes;
  let res;
  try {
    res = await axios.post(
      "/contacts",
      {
        email_addresses: [
          {
            email_address: user.email
          }
        ],
        lists: [
          {
            id: VENUE_LIST_ID
          }
        ]
      },
      {
        params: {
          action_by: "ACTION_BY_OWNER"
        }
      }
    );
  } catch (error) {
    if (error.response && error.response.status === HttpStatus.CONFLICT) {
      console.log("User with this email already exists");

      callback(null, event);
      return;
    }
    throw error;
  }

  if (res.status !== HttpStatus.CREATED) {
    throw this.makeRemoteError(res);
  }

  callback(null, event);
};

module.exports.modify = async (event, context) => {
  console.log("< modify", event);
  const { oldEmail, user } = event;

  const res = await axios.get("/contacts", {
    params: {
      email: oldEmail
    }
  });

  // FIXME These error conditions I don't think are correct
  if (res.status !== HttpStatus.OK) {
    throw this.makeRemoteError(res);
  }

  if (res.data.results.length <= 0) {
    throw new Error("User with given email not found");
  }

  // Find only the contacts who are on the Venue list
  const matchingContacts = res.data.results.filter(
    result => result.lists.filter(list => list.id === VENUE_LIST_ID).length > 0
  );

  if (matchingContacts.length <= 0) {
    throw new Error("User not in Venue list");
  }

  // There should only be one
  const contact = matchingContacts[0];

  console.log("Found user: ", contact);

  contact.email_addresses.filter(
    item => item.email_address === oldEmail
  )[0].email_address = user.email;

  try {
    await axios.put("/contacts/" + contact.id, contact, {
      params: {
        action_by: "ACTION_BY_OWNER"
      }
    });
  } catch (err) {
    if (err.response && err.response.status === HttpStatus.BAD_REQUEST) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        body: {
          errror: {
            message: "Check if new email is already taken"
          }
        }
      };
    } else {
      throw err;
    }
  }

  return { message: null, event };
};
