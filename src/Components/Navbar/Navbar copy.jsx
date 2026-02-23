import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className=' w-full h-16 bg-mainDark text-white font-semibold flex items-center justify-center gap-5 sticky top-0 z-10 '>
            <Link to="/" className='text-white  font-semibold hover:text-main duration-200 '>Home </Link>
            <Link to="/categories" className='text-white  font-semibold hover:text-main duration-200 '>Categories </Link>
            <Link to="/areas" className='text-white  font-semibold hover:text-main duration-200 '>Areas </Link>
            <Link to="/ingredients" className='text-white  font-semibold hover:text-main duration-200 '>Ingredients </Link>
            <Link to="/recipes" className='text-white  font-semibold hover:text-main duration-200 '>Recipes </Link>
        </div>
    )
}



