import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-slate-800 flex justify-evenly md:justify-between items-center p-5 md:px-[5em] px-[1em] text-white w-full">
        <div onClick={() => window.location.href = "/"} className="logo text-2xl font-bold cursor-pointer">
          <span className='text-green-700'>&lt;</span>
            <span className='cursor-pointer '>Pass</span>
          <span className='text-green-700'>OP/&gt;</span>
        </div>
      <ul className='flex items-center justify-evenly md:justify-center gap-2 md:gap-5'>
        <li className='hover:underline text-md'>
            <NavLink className="text-sm md:text-base" to ="/">Home</NavLink>
        </li>
        <li className='hover:underline md:flex text-md'>
            <NavLink className="text-sm md:text-base" to ="/generator">Generator</NavLink>
        </li>
        <a href='https://github.com/ishaan-chaturvedi1/PassOP' target='__blank' className='text-white bg-green-700 rounded-full flex justify-center items-center px-[2px] cursor-pointer'>
          <img src="/icons/github.svg" alt="Github" className='invert w-9 p-1 ' />
          <span className='font-bold px-2 text-md'>Github</span>
        </a>
      </ul>
    </nav>
  )
}

export default Navbar
