const hostUrl = require('../../client/src/config/config').apiUrl
/* 
 * create a `.env` file with environment variables in order to laod at runtime.
*/
var config = {
  azureApp: {
    // Azure Application details
    base: process.env.AAD_AUTH_URL || 'https://login.microsoftonline.com/',
    clientID: process.env.AAD_AUTH_CLIENTID || '45abfc7e-4e11-44ea-8d9a-e0dab00c0e3d',
    clientSecret: process.env.AAD_AUTH_CLIENTSECRET || 'NOT A REAL SECRET',
    callbackUri: hostUrl + '/auth/cbAdfs',
    resource: process.env.MS_GRAPH_URL || 'https://graph.microsoft.com/',
    tenant: process.env.AAD_AUTH_TENANT || 'csenyc.onmicrosoft.com'
  },
  jwtSecret: process.env.APP_SESSION_SECRET || 'big Secret',
  cookieSettings: {
    maxAge: 360000
  },
  serverPort: process.env.PORT || 8080
}

module.exports = config
