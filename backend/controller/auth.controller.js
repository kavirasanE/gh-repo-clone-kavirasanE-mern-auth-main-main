import User from "../models/userList.js";

const signup = async (req,res) => {
    const {username,email,password} = req.body;
    const newUser = new User ({ username,email,password});
    try{
       await newUser.save();
       res.status(201).json({message:"created sucessfully"})
    }
    catch(err){
        res.status(500).json(err.message);
    }
};
 export default signup