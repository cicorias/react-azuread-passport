const jwt = require('jsonwebtoken')

module.exports = function (
  accessToken,
  refreshToken,
  params,
  profile,
  done
) {
  console.log(`**Passport ADFS strategy...`)
  const userProfile = jwt.decode(params.id_token, '', true)
  // New user
  console.log(`**New ADFS user...`)

  console.log(JSON.stringify(userProfile))

  var user = {
    id: userProfile.aud,
    groups: userProfile.groups,
    email: userProfile.unique_name,
    first_name: userProfile.given_name,
    last_name: userProfile.family_name,
    provider: 'adfs'
  }

  console.log(`**ADFS user added...`)
  return done(null, user)
}
