const AzureOAuth2Strategy = require('passport-azure-ad-oauth2')

const config = require('../config/config')

const adfsStrategy = require('./passport-adfs')
module.exports = function (passport) {
  passport.serializeUser((profile, done) => {
    done(null, profile)
  })

  passport.deserializeUser((profile, done) => {
    done(null, profile)
  })

  // ADFS signup strategy
  passport.use(
    'adfs',
    new AzureOAuth2Strategy(
      {
        clientID: config.azureApp.clientID,
        clientSecret: config.azureApp.clientSecret,
        callbackURL: config.azureApp.callbackUri,
        resource: config.azureApp.resource,
        tenant: config.azureApp.tenant
      },
      (accessToken, refreshToken, params, profile, done) =>
        adfsStrategy(
          accessToken,
          refreshToken,
          params,
          profile,
          done
        )
    )
  )
}
