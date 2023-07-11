const { default: mongoose } = require("mongoose");
const moongoose=require("mongoose");

const mentorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min: 3,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    course:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Mentor",mentorSchema)