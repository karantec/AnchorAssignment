const Comment=require("../model/Comment");




exports.createReplies=async(req,res)=>{
  try{
      //extract title and description from req.body
      const { text, userId } = req.body;
      const { commentId } = req.params;
      
      const reply = new Comment({ text, post: commentId, createdBy: userId });
    await reply.save();
    
    //Retrive oringinal comments
    const originalComment = await Comment.findById(commentId);
    const originalCommentCreator = originalComment.createdBy;
    
      //send newly created todo back as response
      res.status(200).json({
          success:true,
          data:postCreator,
          message:"Coment Created Successfully"
      });
  }catch(error){
      console.log(error);
      res.status(500).json({
          success:true,
          data:"Internal Server error",
          message:"Internal Server error",
      });
  }
}


