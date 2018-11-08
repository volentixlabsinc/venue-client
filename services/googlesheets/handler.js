"use strict";

const { google } = require("googleapis");

const keysEnvVar = process.env["GOOGLE_SHEETS_SERVICE_ACCOUNT_EDITOR"];
if (!keysEnvVar) {
  throw new Error(
    "The $GOOGLE_SHEETS_SERVICE_ACCOUNT_EDITOR environment variable was not found!"
  );
}
const keys = JSON.parse(keysEnvVar);

const client = new google.auth.JWT({
  email: keys.client_email,
  key: keys.private_key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"]
});

// Get this as an environment variable rather than the caller so that we don't store the
// ID in Github, which seems like a good idea because it is publicly readable. Unfortunately
// this makes this service only usable for this specific spreadsheet :(
const GOOGLE_SHEETS_BOUNTYCAMPAIGN_SPREADSHEET_ID =
  process.env["GOOGLE_SHEETS_BOUNTYCAMPAIGN_SPREADSHEET_ID"];

// {
//   "sheetName": "telegram",
//   "row": ["my-venue-name", "my-telegram-name", "my-email", "added-volentix-io"]
// }
module.exports.append = async (event, context) => {
  // TODO Verify all parameters

  // API Gateway puts stringified input into body
  const input = event.httpMethod ? JSON.parse(event.body) : event;

  console.log("input", JSON.stringify(input, null, 2));
  try {
    // TODO Should be able to call this with only the google-auth-library (to decrease
    // size of bundle), but it doesn't quite work
    // const url = `https://sheets.googleapis.com/v4/spreadsheets/${
    //   input.spreadsheetId
    // }/values/${input.range}:append`;
    // console.log("POSTing to " + url);
    // const res = await client.request({
    //   url,
    //   method: "POST",
    //   params: {
    //     valueInputOption: "USER_ENTERED",
    //     insertDataOption: "INSERT_ROWS"
    //   }
    // });

    const sheets = google.sheets({
      version: "v4",
      auth: client
    });

    const date = new Date().toLocaleString("en", {
      timeZone: "UTC",
      hour12: false
    });

    const res = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEETS_BOUNTYCAMPAIGN_SPREADSHEET_ID,
      range: input.sheetName + "!3:4", // start at the 3rd row so the formatting doesn't get copied
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        // prepend timestamp to front of row
        values: [[date].concat(input.row)]
      }
    });
    console.log("Result from append", res.data);

    // Return the update data but hide the spreadsheetId
    const dataToReturn = Object.assign(res.data.updates, {
      spreadsheetId: "<hidden>"
    });

    return {
      statusCode: 200,
      body: event.httpMethod ? JSON.stringify(dataToReturn) : dataToReturn,
      headers: {
        // TODO On production, only allow from Venue
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
      }
    };
  } catch (err) {
    // This seems like a pretty good bit of error handling for most applications
    if (err.errors) {
      console.error(
        "Failed to update spreadsheet " +
          GOOGLE_SHEETS_BOUNTYCAMPAIGN_SPREADSHEET_ID,
        "(HTTP " + err.code + ")",
        err.errors
      );
      return { statusCode: 500, body: err.errors };
    } else {
      return { statusCode: 500, body: { message: err.message } };
    }
  }
};
