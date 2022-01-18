const {Router} = require('express')
const {commentController} = require('../controllers/comment.controller')
const router = Router()

router.get('/', commentController.getComment)
router.post('/', commentController.addComment)
router.delete('/', commentController.removeComment )
router.patch('/', commentController.patchComment)


module.exports = router

