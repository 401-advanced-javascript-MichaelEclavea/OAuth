'use strict';

const superagent = require('superagent');
const users = require('./users.js');

/*
  Resources
  https://developer.github.com/apps/building-oauth-apps/
*/

const tokenServerUrl = process.env.TOKEN_SERVER;
// const remoteAPI = process.env.REMOTE_API;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const API_SERVER = process.env.API_SERVER;
const API_ENDPOINT = process.env.API_ENDPOINT;

module.exports = async function authorize(req, res, next) {

  let code = req.query.code;
  console.log('(1) CODE:', code);
  try {

    let remoteToken = await exchangeCodeForToken(code);
    console.log('(2) ACCESS TOKEN:', remoteToken)

    let remoteUser = await getRemoteUserInfo(remoteToken);
    console.log('(3) DISCORD USER', remoteUser)

    let [user, token] = await getUser(remoteUser);
    req.user = user;
    req.token = token;
    console.log('(4) LOCAL USER', user);

    next();
  } catch (e) { next(`ERROR: ${e.message}`) }

}

async function exchangeCodeForToken(code) {
  
  let data = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: 'authorization_code',
    redirect_uri: API_SERVER,
    code: code,
    scope: 'identify',
  }
  
  let tokenResponse = await superagent
  .post(tokenServerUrl)
  .set('Content-Type', 'application/x-www-form-urlencoded')
  .send(data);
  

let access_token = tokenResponse.body.access_token;
return access_token;

}

// async function getRemoteUserInfo(token) {

//   let userResponse =
//     await superagent.get(remoteAPI)
//       .set('user-agent', 'express-app')
//       .set('Authorization', `token ${token}`)

//   let user = userResponse.body;

//   return user;

// }

async function getUser(remoteUser) {
  let userRecord = {
    username: remoteUser.login,
    password: 'oauthpassword'
  }

  let user = await users.save(userRecord);
  let token = users.generateToken(user);

  return [user, token];

}