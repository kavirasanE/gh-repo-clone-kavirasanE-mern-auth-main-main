import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import  {signInStart ,signInSuccess, signInFailure } from '../redux/user/userSlice.js'
import {useDispatch, useSelector} from 'react-redux';

const SignIn = () => {
  const [form, setForm] = useState({});
  const {loading , error} =useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch =useDispatch ();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    dispatch(signInStart());
    e.preventDefault();
    const data = {
      email: form.email,
      password: form.password,
    };
   
    axios
      .post('http://localhost:3000/api/auth/signin', data)

      .then(() => {
         if(data.success === false){
           return 
        }
        dispatch(signInSuccess(data));        
        navigate('/');
        dispatch(signInFailure());

      })
      .catch((error) => {
        dispatch(signInFailure(error));
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <div className='text-center my-16 font-bold text-4xl'>Sign In</div>
        <form  onSubmit={handleSubmit} className='flex flex-col max-w-lg gap-4 mx-auto'>
         
          <input
            type='email'
            placeholder='Email'
            id="email"
            onChange={handleChange}
            value={form.email || ''}
            className='focus:outline-none focus:border-slate-900 p-3 rounded-lg bg-slate-200'
          />
          <input
            type='password'
            placeholder='Password'
            id="password"
            onChange={handleChange}
            value={form.password || ''}
            className='focus:outline-none focus:border-slate-900 p-3 rounded-lg bg-slate-200'
          />
          <button
            className='bg-slate-700 border-none p-3 rounded-lg text-white'
          >
           {loading ? "Vanakam..." : error ? "Thambi credentials enum varala " :'SignIn'}
          </button>
        </form>
        <div className='flex max-w-lg mx-auto'>
          <p>Dont Having an account?</p>
          <Link to='/sign-up'>
            <span className='text-blue-800'>Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
