import React, { useState } from 'react'
import { Link } from 'react-router'
import { assets } from '../assets/assets'
import { AlignJustifyIcon, SearchIcon, X, XIcon } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {

  const [isopen ,setIsopen]=useState(false)


  const { user } = useUser()
  const { openSignIn } = useClerk()

  return (
    <div className='top-0 left-0  flex justify-around items-center p-6  w-full fixed z-50 md:px-16 lg:px-36'>
      <Link to={'/'}>
        <img src={assets.logo} alt='Error' className='w-44 bg-blend-color-burn bg-transparent cursor-pointer'  ></img>
      </Link>


      <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-large z-50 flex-col md:flex-row items-center md:justify-center gap-8 min-md:px-8 py-24 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70  md:bg-white/10  overflow-hidden transition-[width] duration-300 md:border border-gray-300/20  cursor-pointer  flex ${isopen ? 'max-sm:w-full':'max-sm:w-0'}`}>

        <X onClick={()=>setIsopen(!isopen)} className='sm:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer' />

        <Link onClick={()=>{scrollTo(0,0), setIsopen(!isopen) }} to='/'>Home</Link>
        <Link onClick={()=>{scrollTo(0,0), setIsopen(!isopen) }} to='/Movies'>Movies</Link>
        <Link onClick={()=>{scrollTo(0,0), setIsopen(!isopen) }} to='/Theaters'>Theaters</Link>
        <Link onClick={()=>{scrollTo(0,0), setIsopen(!isopen) }} to='/Favorite'>Favourite</Link>

      </div>

      <div className='flex gap-8 max-md:gap-3 text-center'>
        <SearchIcon className='m-auto max-md:hidden cursor-pointer' />
        {
          !user ? (<button onClick={openSignIn} className='bg-[#f74566] px-8 py-2 rounded-4xl'>Login</button>) : (
            <UserButton />
          )
        }
        <AlignJustifyIcon onClick={()=> setIsopen(!isopen)} className='md:hidden m-auto cursor-pointer ' />
      </div>
    </div>
  )
}

export default Navbar
