import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Profile = () => {
  const {currentUser} = useSelector (state => state.user );
  return (
    <div className='p-3 max-w-lg mx-auto '>
      <h1 className='font-bold p-10 max-w-auto text-center text-4xl '>Profile</h1>
      <form className='flex flex-col'>
        <img src={currentUser.photo} alt='profile' className='h-24 w-24 self-center object-cover cursor-pointer rounded-full '/>
        <input defaultValue={currentUser.name}  type='text' placeholder='username' id='username' className='bg-gray-300 p-3 max-w-auto my-5 rounded-lg '/>
        <input defaultValue={currentUser.email} type='email' placeholder='username' id='username' className='bg-gray-300 p-3 max-w-auto  rounded-lg '/>
        <input type='password' id='paswword'placeholder='Password' className='bg-gray-300 p-3 my-4 max-w-auto  rounded-lg '/>
        <button className='bg-slate-700 text-white p-3 rounded-lg upprcase font-bold hover:opacity-95 disabled:opacity-80 '>Update</button>        

      </form>
      <div className='flex justify-between mt-3'>
        <span className='text-red-800'>Delete Account</span>
        <span className='text-red-800'>Sign-out </span>
      </div>
    </div>
  )
}

export default Profile 