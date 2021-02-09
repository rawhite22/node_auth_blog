const User = require('../models/user')
const handleErrors = require('../utilities/errorHandler')

const signup_post = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = new User({ email, password })
    await user.save()
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
    const user = await User.login(email)
    res.status(200).json({ user: user._id })
  } catch (err) {
    const errors = handleErrors(err)
    res.status(400).json({ errors })
  }
}
const login_get = (req, res) => {
  res.render('auth/login', { title: 'Login' })
}

module.exports = {
  signup_post,
  signup_get,
  login_get,
  login_post,
}
