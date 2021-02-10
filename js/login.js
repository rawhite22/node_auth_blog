const form = document.querySelector('form')
const email = document.querySelector('input[name="email"]')
const password = document.querySelector('input[name="password"]')
const emailError = document.querySelector('.email.error')
const passwordError = document.querySelector('.password.error')

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  // clear errors
  emailError.textContent = ''
  passwordError.textContent = ''
  // get values
  const email = form.email.value
  const password = form.password.value
  try {
    const res = await fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await res.json()
    if (data.errors) {
      emailError.textContent = data.errors.email
      passwordError.textContent = data.errors.password
    }
    if (data.user) {
      location.assign('/')
    }
  } catch (err) {}
})
