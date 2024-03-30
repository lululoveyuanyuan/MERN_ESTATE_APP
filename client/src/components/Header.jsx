import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center container mx-auto p-4'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-slate-800'>Selling</span>
          <span className='text-slate-600'>Sunset</span>
        </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input
            type='text'
            className='bg-transparent border-none focus:outline-none w-24 sm:w-48 text-slate-800'
            placeholder='Search...'
          />
          <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>
        <Link to='/'>
          <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
        </Link>
        <Link to='/about'>
          <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
        </Link>
        <Link to='/sign-in'>
          <li className='hidden sm:inline text-slate-700 hover:underline'>Sign in</li>
        </Link>
        </ul>
      </div>
    </header>
  )
}
