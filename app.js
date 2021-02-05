// express
const express = require('express')
const app = express()
const PORT = 3000

// starts server
app.listen(PORT, 'localhost', () => {
  console.log(`server running on port:${3000}`)
})

// routes
app.get('/', (req, res) => {
  res.json('working')
})
