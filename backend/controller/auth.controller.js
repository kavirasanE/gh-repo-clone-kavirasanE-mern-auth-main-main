import User from "../models/userList.js";
import bcryptjs from 'bcryptjs';

const signup = async (req,res) => {
    const {username,email,password} = req.body;
    const hashpassword =bcryptjs.hashSync(password,10);
    const newUser = new User ({ username,email,password:hashpassword});
    try{
       await newUser.save();
       res.status(201).json({message:"created sucessfully"})
    }
    catch(err){
        res.status(500).json(err.message);
    }
};
 export default signup