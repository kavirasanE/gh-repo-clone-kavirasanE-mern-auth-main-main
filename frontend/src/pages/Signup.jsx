import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import OAuth from '../components/oAuth'

const Signup = () => {
  const [form, setForm] = useState({});
  const [loading,setLoading] = useState(false);
  const [error,setError] =useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: form.username,
      email: form.email,
      password: form.password,
    };
    setLoading(true)
    setError(false);
    axios
      .post('http://localhost:3000/api/auth/signup', data)
      .then(() => {
        
        if(data.success === false){
          setError(true);
          setLoading(false);
          return
        }
        navigate('/sign-in');
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <div className='text-center my-16 font-bold text-4xl'>Sign Up</div>
        <form  onSubmit={handleSubmit} className='flex flex-col max-w-lg gap-4 mx-auto'>
          <input
            type='name'
            placeholder='Username'
            id="username"
            onChange={handleChange}
            value={form.username || ''}
            className='focus:outline-none focus:border-slate-900 p-3 rounded-lg bg-slate-200'
          />
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
           {loading ? "Vanakam..." : error ? "Thambi credentials enum varala " :'Signup'}
          </button>
          <OAuth/>           
            </form>
            
        <div className='flex max-w-lg mx-auto'>
          <p>Having an account?</p>
          <Link to='/sign-in'>
            <span className='text-blue-800'>Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup
