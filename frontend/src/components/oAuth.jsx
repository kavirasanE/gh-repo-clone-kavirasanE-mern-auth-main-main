import axios from 'axios'
import {GoogleAuthProvider ,signInWithPopup ,getAuth } from 'firebase/auth'
import  app from '../firebase';
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'

 function  OAuth  (){
    const dispatch = useDispatch();
    const navigate =useNavigate();

    const handleGoogleClick = async ()=> {
        try{
          const provider =new GoogleAuthProvider();
          const auth =getAuth(app);

          const result =await signInWithPopup(auth,provider);
          const data = {
            name:result.user.displayName,
            email:result.user.email,
            photo:result.user.photoURL,
        };
          axios
          .post('http://localhost:3000/api/auth/google',data)
          dispatch(signInSuccess(data));
          navigate('/profile');
        }
        catch(error){
      console.log(error);
     
      }
    }
  return (
    <button  type ='button'  onClick = {handleGoogleClick} className='bg-red-800 text-white p-3 rounded-lg uppercase hover:opacity-95'>
      Continue with google
    </button>
  )
}

export default OAuth
