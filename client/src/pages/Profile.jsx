import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserStart,
} from '../redux/user/userSlice';


export default function Profile() {
  const { currentUser } = userSelector(state => state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <image src={currentUser.avatar} alt='profile' className='rounded-full w-24 h-24 mx-auto' />
        <input
          type='text'
          placeholder='username'
          className='border p-3 rounded-lg'
          id='username'
        />
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
        />
        <input
          type='text'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
        />
        <button className='bg-blue-500 text-white p-3 rounded-lg hover:opacity-90'>Update</button>
      </form>
      <div className="">  
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-blue-700 cursor-pointer'>Sign out</span>
      </div>

    </div>
  )
}
