const express = require("express");
const router = new express.Router();
const {login}=require('../controller/Auth');

const {userOtpSend }=require('../controller/Otp');
const {createPost}=require('../controller/Post');
const { createComments } = require("../controller/Comment");
const { createReplies } = require("../controller/Replies");   
// Routes
router.post('/login',login);

router.post('/otp',userOtpSend );
router.post('/post',createPost);
router.post('/posts/:postId/comments',createComments);
router.post('/comments/:commentId/replies',createReplies)
module.exports = router;