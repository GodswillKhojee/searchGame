import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (

    <div className='bg-black'>
        <div className='w-full h-full bg-purple-500 flex justify-between items-center px-10 rounded-xl' >
        <div className='text-2xl font-bold text-white'>
            <Link to='/'>FreeToGames</Link>
        </div>

        <div className='nav-links flex gap-8 items-center'>
            <Link to='/'>Home</Link>
            <Link to='/Wishlist'>Wishlist</Link>

        </div>
    </div>
    </div>
  )
}

export default NavBar