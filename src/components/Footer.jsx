import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 w-full mt-6 p-2 flex flex-col justify-center items-center'>
            <div className="logo text-2xl font-bold text-center">
                <span className='text-green-700'>&lt;</span>
                <span className='text-white'>Pass</span>
                <span className='text-green-700'>OP/&gt;</span>
            </div>
            <div>
                <p className='text-white flex text-center m-1 items-center justify-center'>Created with<img className='mx-[1.5px]' width="23px" src="icons/heart.png" alt="love" />by Ishaan Chaturvedi</p>
            </div>
        </div>
    )
}

export default Footer
