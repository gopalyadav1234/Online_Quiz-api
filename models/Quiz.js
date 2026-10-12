const mongoose=require("mongoose");
const quizSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  description:String,
  duration:{
    type:Number,
    default:10
  }
},{timestamps:true});
module.exports=mongoose.model("Quiz",quizSchema)