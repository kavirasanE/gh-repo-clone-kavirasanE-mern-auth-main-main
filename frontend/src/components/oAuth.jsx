import React from 'react'
import axios from 'axios'
import {GoogleAuthProvider ,signInwithPopup ,getAuth } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice'

const oAuth = () => {
    const dispatch = useDispatch();
    const handleGoogleClick = async ()=> {
        try{
          const provider =new GoogleAuthProvider();
          const auth =getAuth(app);
          const result =await  signInwithPopup(auth,provider);
          dispatch(signInStart());

        const data = {
            name:result.user.displayName,
            email:result.user.email,
            photo:result.user.photoURL,
        };

          axios
          .post('api/auth/google',data)
          dispatch(signInSuccess(data));
        }
        catch(error){
      console.log(error);
      dispatch(signInFailure());
        }
    }
  return (
    <button  type ='buuton'  onClick = {handleGoogleClick} className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
      continue with google
    </button>
  )
}

export default oAuth
