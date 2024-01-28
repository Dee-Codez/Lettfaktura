import React, { useState } from 'react'
import {HiMenu} from 'react-icons/hi';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { FaUserCircle, FaLanguage } from "react-icons/fa";
import {AiFillCloseCircle} from 'react-icons/ai';



const Home = () => {

    const [toggleSidebar,setToggleSidebar] = useState(false);


  return (
    <div className='flex flex-col w-full h-screen transition-height duration-75 ease-out'>
        
        <div className='hidden md:flex'>
            <Navbar />
        </div>
        <div className='hidden md:flex h-screen flex-initial'>
            <Sidebar/>
        </div>
        <div className='flex md:hidden flex-row'>
            <div className='p-2 w-screen bg-[#0f7ee9] flex flex-row justify-between items-center shadow-md'>
                <HiMenu fontSize={40} className='cursor-pointer' onClick={() => setToggleSidebar(true)}/>
                <div className='flex flex-row gap-2 md:gap-5'>
                    <div className='md:ml-20 ml-7'>
                        <FaUserCircle fontSize={50} className='text-white' />
                    </div>
                </div>
                <div className='flex flex-row gap-5 items-center'>
                    <div className=''>
                        <FaLanguage fontSize={40} className='text-white' />
                    </div>
                    <div>
                        <div className='font-lg'>English</div>
                    </div>
                </div>
        </div>
        {toggleSidebar && (
                    <div className='fixed bg-white h-screen overflow-y-auto z-50 shadow-lg shadow-slate-300 transition-all duration-500 ease-in-out animate-slide-in'>
                        <div className='absolute w-full flex justify-end items-center p-2'>
                            <AiFillCloseCircle fontSize={30} className='cursor-pointer text-black' onClick={() => setToggleSidebar(false)}/>
                        </div>
                        <Sidebar closeToggle={setToggleSidebar}/>
                    </div>
                )}
            </div>
        <div className='flex text-black md:flex-row'> 
            
        </div>
    </div>
  )
}

export default Home
