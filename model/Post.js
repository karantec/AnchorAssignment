const mongoose=require('mongoose');

const PostSchema = new mongoose.Schema({
    text: String,

    createdBy:  {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
         },
    createdAt: { 
        type: Date, 
        default: Date.now },
  });
  module.exports = mongoose.model("Post", PostSchema);