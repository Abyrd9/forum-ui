const functions = require('firebase-functions');
const admin = require('firebase-admin');
const permissions = require('../firebase-permissions.json');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

admin.initializeApp({
  credential: admin.credential.cert(permissions),
  databaseURL: 'https://forumui-92814.firebaseio.com',
});

const authentication = require('./src/authentication');
const colors = require('./src/colors');

app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.post('/api/sign-in', authentication.signIn);

// app.post('/api/:theme-id/colors/add', colors.add);
// app.post('/api/:theme-id/colors/remove', colors.remove);
// app.post('/api/:theme-id/colors/update', colors.add);
// app.post('/api/:theme-id/colors/get', colors.get);

exports.app = functions.https.onRequest(app);
