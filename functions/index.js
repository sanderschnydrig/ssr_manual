const functions = require("firebase-functions");

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// Increase readability in Cloud Logging
require("firebase-functions/lib/logger/compat");

const expressApp = require('./dist/rro-ssr/server/main').app();

exports.ssr = functions
  .region('us-central1')
  .runWith({})
  .https
  .onRequest(expressApp);

