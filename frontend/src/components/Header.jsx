import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' bg-gray-200 shadow-lg shadow-slate-500 h-10 p-2 flex flex-wrap justify-between align-center'>
        <Link to='/Home'><h1 className='font-bold'>Authenticate</h1> </Link> 
        <ul className='flex gap-4 flex-wrap '>
        <Link to='/profile'><li>Profile</li></Link> 
           <Link to='/about'><li>About</li></Link> 
           <Link to='/sign-up'><li>Sign-up</li></Link> 
           <Link to='/sign-in'><li>Sign in</li></Link>
        </ul>
    </div>

  )
}

export default Header