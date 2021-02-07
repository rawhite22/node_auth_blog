const Blog = require('../models/blog')

const blogHome_get = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((results) => {
      res.render('blog/blog', { title: 'All Blogs', blogs: results })
    })
    .catch((err) => console.log(err))
}
const blogCreate_get = (req, res) => {
  res.render('blog/create', { title: 'Create A Blog' })
}
const blogCreate_post = (req, res) => {
  const blog = new Blog(req.body)
  blog
    .save()
    .then((result) => {
      res.redirect('/blog')
    })
    .catch((err) => {
      console.log(err.message)
    })
}
const singleBlog_get = (req, res) => {
  const id = req.params.id
  Blog.findById(id)
    .then((result) => {
      res.render('blog/getBlog', { blog: result, title: 'Blog Details' })
    })
    .catch((err) => {
      console.log(err.message)
      res.status(404).render('404', { title: 'Blog not found' })
    })
}

const blog_delete = (req, res) => {
  const id = req.params.id
  Blog.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: '/blog' }))
    .catch((err) => console.log(err))
}

module.exports = {
  blogHome_get,
  blogCreate_get,
  blogCreate_post,
  singleBlog_get,
  blog_delete,
}
