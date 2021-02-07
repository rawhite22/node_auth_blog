const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const title = form.title.value
  const snippet = form.snippet.value
  const body = form.body.value
  console.log(title, snippet, body)
  fetch('/blog', {
    method: 'POST',
    body: JSON.stringify({ title, snippet, body }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      location.assign(response.url)
    })
    .catch((err) => console.log(err))
})
