import React from 'react'
import {Link} from 'react-router-dom';

const Signin = () => {
  return (
    <div>
      <div >
      <div className='text-center my-16 font-bold text-4xl'>
        Sign In
      </div>
      <form className='flex flex-col max-w-lg gap-4 mx-auto'>
        <input type='email' placeholder='Email' className='border-none p-3 rounded-lg bg-slate-200  '/>
        <input type='password' placeholder='Password' className='border-none p-3 rounded-lg bg-slate-200  '/>
        
        <button className='bg-slate-700 border-none p-3 rounded-lg text-white '>Sign In</button>
      </form>
       </div>
      </div>
   
  )
}

export default Signin