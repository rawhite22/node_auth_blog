const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { isEmail } = require('validator')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email.'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email.'],
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Must be atleast 6 characters long.'],
  },
})

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email })
  if (user) {
    return user
  } else {
    throw Error('incorrect email')
  }
}

userSchema.pre('save', async function (next) {
  // const salt = await bcrypt.genSalt()
  // this.password = await bcrypt.hash(this.password, salt)
  console.log('pre-save')
  next()
})

const User = mongoose.model('user', userSchema)

module.exports = User
