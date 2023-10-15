import React from 'react'
import { Link } from 'react-router-dom'

export default function Signout() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className=' my-7 text-3xl text-center font-semibold'>Sign up</h1>
    <form className='flex flex-col gap-4'>
    <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' />
    <input type="text" placeholder='email' className='border p-3 rounded-lg' id='email' />
    <input type="text" placeholder='password' className='border p-3 rounded-lg' id='password' />
    <button className='bg-slate-700 text-zinc-50 p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>sign up</button>
    </form>
    <div className='flex gap-3 mt-4' >
      <p>Have an account?</p>
      <Link to='/signin'>
        <span className='text-blue-800'>Signin</span>
      </Link>
    </div>
    </div>
  )
}
