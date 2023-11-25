import React from 'react'
import {Link} from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <div >
      <div className='text-center my-16 font-bold text-4xl'>
        Sign Up
      </div>
      <form className='flex flex-col max-w-lg gap-4 mx-auto '>
        <input type='name' placeholder='Username' className='focus:outline-none focus:border-slate-900 p-3 rounded-lg bg-slate-200'/>
        <input type='email' placeholder='Email' className=' p-3 rounded-lg bg-slate-200  '/>
        <input type='password' placeholder='Password' className='border-none p-3 rounded-lg bg-slate-200  '/>
        <button className='bg-slate-700 border-none p-3 rounded-lg text-white '>Sign In</button>
        <button className='bg-red-900 border-none  p-3 rounded-lg text-white '>Sign In with gmail</button>
      </form>
       <div className='flex max-w-lg mx-auto'> <p>Having an account?</p>
       <Link to= '/sign-in'><span className='text-blue-800'>Sign in</span></Link>
       </div>
      </div>
    </div>
  )
}

export default Signup