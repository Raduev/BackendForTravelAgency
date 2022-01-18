const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  comment: String,
  user: {
    type: String,
    ref: mongoose.SchemaTypes.ObjectId
  }
})

const Comment = mongoose.model('Comment',commentSchema)

module.exports = Comment
