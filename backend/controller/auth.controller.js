import User from "../models/userList.js";
import bcryptjs from 'bcryptjs';
import errorhandle from "../utils/error.js";
import jwt from 'jsonwebtoken'

export const signup = async (req,res,next) => {
    const {username,email,password} = req.body;
    const hashpassword =bcryptjs.hashSync(password,10);
    try{
       const data = await User.create({ username,email,password:hashpassword});
       res.status(201).send(data);
    }
    catch(error){
      next(errorhandle(300, "something went wrong"));
    }
};
export const signin = async (req,res,next) => {
  const {email,password} =req.body;
  try{
    const validUser = await User.findOne({email});
    if(!validUser){return next(errorhandle(300,"user not found"))};
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if(!validPassword){return next (errorhandle(300,"wrong credentials"))};
    const token =jwt.sign({id: validUser._id},process.env.JWT_SECRET);
    const { password:hashpassword, ...rest} =validUser._doc;
    const expiryDate =new Date(Date.now() + 99999999999999 );
    res
    .cookie ('bearer_token',token,{httpOnly:true, expires:expiryDate})
    .status(200)
    .send(rest);
  }
  catch(error){
    next(errorhandle(300,"enter your correct creditials"))
  }
}

 export const google = async (req,res,next) => {
  try{
      const user = await User.findOne({ email: req.body.email })
      if(user){
        const token =jwt.sign({id: user._id},process.env.JWT_SECRET);
        const {password :hashPassword, ...rest} = user._doc;
        const expiryDate =new Date (Date.now( ) + 99999999);
        res
        .cookie ('access_token',token,{httpOnly:true,expires:expiryDate})
        .status(200)
        .json(rest);
      }else {
       const generatePassword =Math.random().toString(36).slice(-8);
       const hashPassword =bcryptjs.hashSync(generatePassword, 10);
       const newUser =new User ({
        username:req.body.name.split(' ').join('').toLowerCase() + Math.random().toString(36).slice(-8),
        email:req.body.email,
        password:hashPassword,
        photoUrl:req.body.photo,
       });
       await newUser.save();
       const token = jwt.sign ({id:newUser._id},process.env.JWT_SECRET);
       const {password:hashPassword2,...rest} =newUser._doc;
       const expiryDate =new Date (Date.now() + 999999999);
       res
       .cookie('access_token',token,{httpOnly:true,expires:expiryDate})
       .status(200)
       .json (rest)

      }
  }
  catch(error){
    next(error)

  }

 };
 export const  signout =(req,res) => {
   res.clearCookie('bearer_token').status(200).json("sigin out ");  
 };