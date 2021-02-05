// express
const express = require('express')
const app = express()
const PORT = 3000
// database
const mongoose = require('mongoose')
const dbURI = 'mongodb://127.0.0.1:27017/node-auth-blog'
// connect db
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    // app listens after db connection is established
    const h = result.connections[0].host
    const p = result.connections[0].port
    console.log(`db running on port:${p} and hosted on:${h}`)
    app.listen(PORT, 'localhost', () => {
      console.log(`Server running on port:${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err.message)
  })
// view engine
app.set('view engine', 'ejs')
// routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' })
})
// 404
app.use((req, res) => {
  res.status(404).render('404/404', { title: '404 Error' })
})
