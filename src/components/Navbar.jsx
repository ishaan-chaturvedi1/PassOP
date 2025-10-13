import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-800 flex justify-between items-center p-5 md:px-[5em] px-[2em] text-white w-full">
        <div onClick={() => window.location.href = "/"} className="logo text-2xl font-bold cursor-pointer">
          <span className='text-green-700'>&lt;</span>
            <span className='cursor-pointer '>Pass</span>
          <span className='text-green-700'>OP/&gt;</span>
        </div>
      <ul className='flex items-center justify-center gap-5'>
        <li className='hover:underline hidden md:flex'>
            <a href="/">Home</a>
        </li>
        <li className='hover:underline hidden md:flex'>
            <a href="/About">About</a>
        </li>
        <li className='hover:underline hidden md:flex'>
            <a href="/Generate">Generate</a>
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
