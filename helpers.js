/*
 * 
 */
'use strict'
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const axios = require('axios')
const oauth = require('axios-oauth-client')


let options = {}
options.authurl = 'https://login.mypurecloud.de/oauth/token'
options.ClientID = process.env.CLIENT_ID
options.ClientSecret = process.env.CLIENT_SECRET

const getaccessToken = async (opts) => {
  
  const axiosClientCredentials = oauth.client(axios.create(), {
    url: opts.authurl,
    grant_type: 'client_credentials',
    client_id: opts.ClientID,
    client_secret: opts.ClientSecret,
    scope: ''
  })

  return await axiosClientCredentials()
    
}

module.exports = {
  getaccessToken,
  options
}