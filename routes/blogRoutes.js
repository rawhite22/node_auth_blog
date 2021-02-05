const router = ({ Router } = require('express'))

// get blog page
router.get('/', () => {})
// get create blog page
router.get('/create', () => {})
// post blog
router.post('/', () => {})
// get details of individual blog
router.get('/:id', () => {})
// delete selected blog
router.delete('/:id', () => {})

module.exports = router
