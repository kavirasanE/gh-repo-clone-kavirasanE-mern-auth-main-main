import React from 'react'
import axios from 'axios'
import {GoogleAuthProvider ,signInwithPopup ,getAuth } from 'firebase/auth'

const oAuth = () => {
    const handleGoogleClick = async ()=> {
        try{
          const provider =new GoogleAuthProvider();
          const auth =getAuth(app);
          const result =await  signInwithPopup(auth,provider);
          console.log(result);
        }
        catch(error){
      console.log(error);
        }
    }
  return (
    <button  type ='buuton'  onClick = {handleGoogleClick} className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
      continue with google
    </button>
  )
}

export default oAuth
