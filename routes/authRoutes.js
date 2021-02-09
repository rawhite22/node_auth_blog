const express = require('express')
const router = express.Router()

const {
  signup_post,
  signup_get,
  login_get,
  login_post,
} = require('../controllers/authController')

router.get('/signup', signup_get)
router.post('/signup', signup_post)
router.get('/login', login_get)
router.post('/login', login_post)
router.get('/logout', (req, res) => {
  res.send('working')
})

module.exports = router
