const mongoose=require('mongoose');
const nodeMailer=require('nodemailer');

const userOtpSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:600,
    },
});

userOtpSchema.post("save",async function(doc){
    
    try{
        let transporter=nodeMailer.transport({

            host:process.env.MAIL_HOST,
            auth:
            {
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },
        
        })
    let info=await transporter.sendMail({
        from:'CodeHelp',
        to:doc.email,
        subject:"OTP for login",
        text:`Your OTP for login is ${doc.otp}`,
    })
    console.log("INFO",info);
}
    //SEND MAIL
    catch(error){

    }
})

module.exports = mongoose.model("Otp", userOtpSchema);