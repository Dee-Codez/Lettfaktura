import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='flex flex-row w-screen p-4 items-center bg-[#0f7ee9]'>
        <div className='flex flex-row gap-2 md:gap-5'>
            <div className='md:ml-20 ml-7'>
                <FaUserCircle fontSize={50} className='text-white' />
            </div>
            <div className='flex flex-col'>
                <div className='text-white text-xl'>Guest</div>
                <div className='italic'>Designation</div>
            </div>
        </div>
        <div className='flex flex-row gap-5 md:mr-20 mr-7 items-center ml-auto'>
            <div className=''>
                <FaLanguage fontSize={40} className='text-white' />
            </div>
            <div>
                <div className='font-lg'>English</div>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar
