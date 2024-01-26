
const Post = require("../model/Post");

exports.createPost=async(req,res)=>{
    try{
        //extract title and description from req.body
        const {title}=req.body;
        //create a new todo
        const data=await Post.create({
            title,
        
        });
        //send newly created todo back as response
        res.status(200).json({
            success:true,
            data:data,
            message:"Post Created Successfully"
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
