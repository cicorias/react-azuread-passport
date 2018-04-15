const express = require('express')
const app = express()
const passport = require('passport')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')

require('dotenv').config()

const serverPort = require('./server/config/config').serverPort
const sessionSecret = require('./server/config/config').jwtSecret
const cookieSettings = require('./server/config/config').cookieSettings

const port = process.env.PORT || serverPort

const errorHandlingMiddleware = require('./server/middleware/error')

app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({ secret: sessionSecret, cookie: cookieSettings }))

app.use(express.static('./server/static/'))
app.use(express.static('./client/dist/'))

require('./server/passport/passport')(passport)

app.use(passport.initialize())
app.use(passport.session())

const authRoutes = require('./server/routes/auth')
app.use('/auth', authRoutes)

const apiRoutes = require('./server/routes/api')
app.use('/api', apiRoutes)

app.use(errorHandlingMiddleware())

app.listen(port, () => {
  console.log('The magic happens on port ' + port)
})
