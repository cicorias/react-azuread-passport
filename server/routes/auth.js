const express = require('express')
const router = new express.Router()
const passport = require('passport')

// const authCheckMiddleware = require("../middleware/auth-check")

router.get('/login', (req, res) => {
  res.json({ message: 'Request login' })
})

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(`failed to /logout and destroy ${err.message}`)
    }
    res.redirect('/')
  })
})

router.get('/login-adfs', passport.authenticate('adfs', { session: false }))

router.get('/cbAdfs', passport.authenticate('adfs'), (req, res) => {
  res.redirect('/')
})

router.get('/login-facebook', passport.authenticate('facebook'))

router.get('/cbFacebook', passport.authenticate('facebook'), (req, res) => {
  res.redirect('/')
})

router.get('/login-google', passport.authenticate('google'))

router.get('/cbGoogle', passport.authenticate('google'), (req, res) => {
  res.redirect('/')
})

module.exports = router
