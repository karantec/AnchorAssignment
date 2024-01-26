const Comment=require("../model/Comment");
const Post=require("../model/Post");



exports.createComments=async(req,res)=>{
  try{
      //extract title and description from req.body
      const { text, userId } = req.body;
      const { postId } = req.params;
      
      const comment = new Comment({ text, post: postId, createdBy: userId });
      await comment.save();
      
      const post = await Post.findById(postId);

      const postCreator = Post.createdBy;
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


