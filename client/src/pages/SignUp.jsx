import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col items-center space-y-3'>
        <input type='text' placeholder='Username' className='border p-2 rounded-md' />
        <input type='email' placeholder='Email' className='border p-2 rounded-md' />
        <input type='password' placeholder='Password' className='border p-2 rounded-md' />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded-md  hover:opacity-80'>Sign Up</button>
      </form>
      <div className="flex gap-5 mt-7">
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-500'>Sign in</span>
          </Link>
      </div>
    </div>
  )
}
