const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    text: String,
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
  });

    module.exports = mongoose.model("Comment", CommentSchema);