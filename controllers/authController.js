const User = require('../models/user')
const handleErrors = require('../utilities/errorHandler')
const { createToken } = require('../utilities/auth.js')

const signup_post = async (req, res) => {
  const { email, password } = req.body
  console.log(email, password)
  try {
    const user = await User.create({ email, password })
    const token = createToken(user._id)
    res.cookie('jwt', token, { httpOnly: true })
    res.status(201).json({ user: user._id })
  } catch (err) {
    const errors = handleErrors(err)
    res.status(400).json({ errors })
  }
}
const signup_get = (req, res) => {
  res.render('auth/signup', { title: 'Sign Up' })
}
const login_post = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.login(email, password)
    const token = createToken(user._id)
    res.cookie('jwt', token, { httpOnly: true })
    res.status(200).json({ user: user._id })
  } catch (err) {
    const errors = handleErrors(err)
    res.status(400).json({ errors })
  }
}
const login_get = (req, res) => {
  res.render('auth/login', { title: 'Login' })
}

const logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 })
  res.redirect('/')
}
module.exports = {
  signup_post,
  signup_get,
  login_get,
  login_post,
  logout_get,
}
