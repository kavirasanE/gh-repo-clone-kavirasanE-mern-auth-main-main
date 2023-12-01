import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    photoUrl:{
        type:String,
        default:"https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
    }
    
} ,
{
    timestamps:true
})

const User = mongoose.model('User',userSchema);

export default User;