import React from 'react'
import { Link } from 'react-router'
import { assets } from '../assets/assets'
import { AlignJustifyIcon, SearchIcon, XIcon } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {

  const click =()=>{
    scrollTo(0,0)
  }

  const {user}=useUser()
  const {openSignIn}=useClerk()

  return (
    <div className=' flex justify-around items-center p-6  w-[100%] fixed z-1'>
      <Link to={'/'}>
        <img src={assets.logo} alt='Error' className='w-44 bg-blend-color-burn bg-transparent cursor-pointer'  ></img>
      </Link>


      <div className='border-1 border-[grey] px-10 py-3 rounded-4xl backdrop-blur-md bg-white/30 shadow-lg cursor-pointer gap-8 flex max-lg:hidden '>

        <Link onClick={click} to='/'>Home</Link>
        <Link onClick={click} to='/Movies'>Movies</Link>
        <Link onClick={click} to='/Theaters'>Theaters</Link>
        <Link onClick={click} to='/Favorite'>Favourite</Link>

      </div>

      <div className='flex gap-8 max-md:gap-3 text-center'>
        <SearchIcon className='m-auto max-md:hidden cursor-pointer' />
       {
        !user ? ( <button onClick={openSignIn} className='bg-[#f74566] px-8 py-2 rounded-4xl'>Login</button>) : (
          <UserButton/>
        )
       }
        <AlignJustifyIcon className='md:hidden m-auto cursor-pointer '/>
      </div>
    </div>
  )
}

export default Navbar
