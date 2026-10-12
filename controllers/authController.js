
const User=require("../models/User.js");
const bcrypt=require("bcryptjs")
const jwt= require("jsonwebtoken");
//register
const register=async(req,res)=>{
  try{
    const {name,email,password}=req.body;
    const olduser=await User.findOne({email})
    if(olduser){
      return res.json({message:"User already exist"})
  }
  const hashpassword = await bcrypt.hash(password, 10);

const user = await User.create({
  name,
  email,
  password: hashpassword
});
  res.json({message:"user register successfully",
    user:{
      id:user._id,
      name:user.name,
      email:user.email
    }
  });
}catch(error){
res.json({message:error.message})
}
};

//login
const login=async(req,res)=>{
  try{
    const {email,password}=req.body;
    const user=await User.findOne({email})
    if(!user){
      return res.json({message:"User not found"})
  }
  const match=await bcrypt.compare(password,user.password);
  if(!match){
    return res.json({message:"invalid password"})
  }
  const token=jwt.sign(
    {id:user._id},
    "mysecretkey",
    {expiresIn:"1h"}
  );
  res.json({message:"Login Successfully",
    token:token
  });
}catch(error){
res.json({message:error.message})
}
};
module.exports={register,login}