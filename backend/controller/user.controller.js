import errorhandle from "../utils/error.js";
import bcryptjs from 'bcryptjs';
import User from "../models/userList.js";
import express from "express";
export const test = (req, res) => {
  res.json({
    message: "khgjhb",
  });
};

//update User
export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorhandle(401,"You can upate ur account"));
  }
  try{
    if(req.body.password){
      req.body.password =bcryptjs.hashSync (req.body.password,10);
    }
    const  UpdateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set :{
          username:req.body.username,
          email:req.body.email,
          password:req.body.password,
          photoUrl:req.body.photoUrl,
          },
        },
          {new:true} //when send the req  we will get the preview is not updated so we are using the new method
              
      );
      const {password , ...rest} =UpdateUser._doc;
      res.status(200).json(rest);
  }
  catch(error){
    next(error);
  }
};
//delete user

export const deleteUser = ('/:id' ,async (req,res) => {
  try{
    const{id} =req.params;
    const data = await  User.findByIdAndDelete(id);
    if(!data){
      return res.status(404).send({message:"device not found"});
    }
    return res.status(200).send({message:"deleted success"});

  }
  catch (error) {
    return res.status(500).send({message:error.message});
  }
});

