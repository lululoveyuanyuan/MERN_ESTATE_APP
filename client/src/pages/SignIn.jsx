import { set } from 'mongoose'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value
      }
    )
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/auth/signin',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    } 
    )
    const data = await res.json()
    if(data.success == false){
      setError(data.message)
      setLoading(false)
      return
    }
    setLoading(false)
    console.log(data)
  }
  console.log(formData);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>

      <form onSubmit={handleSubmit} className='flex flex-col items-center space-y-3'>
        <input type='email' placeholder='Email'  className='border p-2 rounded-md' id='email' onChange={handleChange}/>
        <input type='password' placeholder='Password'  className='border p-2 rounded-md' id='password' onChange={handleChange}/>
        <button disable={loading} type='submit' className='bg-blue-500 text-white p-2 rounded-md  hover:opacity-80'>{loading? 'Loading...' : 'Sign In'}</button>
      </form>
      <div className="flex gap-5 mt-7">
        <p>Don't have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-500'>Sign up</span>
          </Link>
      </div>
    </div>
  )
}

