const {Router} = require('express')
const {commentController} = require('../controllers/comment.controller')
const router = Router()

router.get('/getComments', commentController.getComment)
router.post('/addComment', commentController.addComment)
router.delete('/removeComment/:id', commentController.removeComment )
router.patch('/patchComment/:id', commentController.patchComment)


module.exports = router

