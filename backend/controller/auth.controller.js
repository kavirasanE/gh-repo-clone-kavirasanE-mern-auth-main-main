import User from "../models/userList.js";
import bcryptjs from 'bcryptjs';
import errorhandle from "../utils/error.js";

const signup = async (req,res,next) => {
    const {username,email,password} = req.body;
    const hashpassword =bcryptjs.hashSync(password,10);
    try{
       const data = await User.create({ username,email,password:hashpassword});
       res.status(201).send(data);
    }
    catch(error){
      next(errorhandle(300, "something went gone"));
    }
};
 export default signup