const handleErrors = (err) => {
  let errors = { email: '', password: '' }
  // incorrec emial
  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered'
  }
  if (err.message === 'incorrect password') {
    errors.password = 'Hmm.. did you forget?'
  }

  // duplicate email
  if (err.code === 11000) {
    errors.email = 'That email is already in use.'
    return errors
  }
  // validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message
    })
  }
  return errors
}

module.exports = handleErrors
