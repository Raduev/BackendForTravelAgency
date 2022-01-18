const Comment = require('../models/Comment.model')
module.exports.commentController = {
  getComment: async (req, res) => {
    try {
      const comments =  await Comment.find()
      res.json(comments)
    } catch (e) {
      console.log(e)
    }
  },
  addComment: async (req, res) => {
    try {
     await Comment.create({
       comment: req.body.comment,
       user: req.body.user
      })
      res.json('Комментарий добавлен')
    }catch (e) {
      console.log(e)
    }
  },
  removeComment: async (req, res) => {
    try {
        await Comment.findByIdAndRemove(req.params.id)
      res.json('Комментарий удален')
    } catch (e) {
      console.log(e)
    }
  },
  patchComment: async (req, res) => {
    await Comment.findByIdAndUpdate(req.params.id, {
      comment: req.body.comment,
      user: req.body.user
    })
    res.json('Комментарий изменен')
  }
}
