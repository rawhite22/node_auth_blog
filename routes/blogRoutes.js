const express = require('express')
const router = express.Router()
const {
  blogHome_get,
  blogCreate_get,
  blogCreate_post,
  singleBlog_get,
  blog_delete,
} = require('../controllers/blogController')
const { requireAuth } = require('../middleware/auth')

// get blog page
router.get('/', blogHome_get)
// get create blog page
router.get('/create', requireAuth, blogCreate_get)
// post blog
router.post('/', blogCreate_post)
// get details of individual blog
router.get('/:id', singleBlog_get)
// delete selected blog
router.delete('/:id', blog_delete)

module.exports = router
