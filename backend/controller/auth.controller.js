import User from "../models/userList.js";
import bcryptjs from 'bcryptjs';
import errorhandle from "../utils/error.js";

const signup = async (req,res,next) => {
    const {username,email,password} = req.body;
    const hashpassword =bcryptjs.hashSync(password,10);
    const newUser = new User ({ username,email,password:hashpassword});
    try{
       await newUser.save();
       res.status(201).json({message:"created sucessfully"})
    }
    catch(error){
      next(errorhandle(300, "something went gone"));
    }
};
 export default signup