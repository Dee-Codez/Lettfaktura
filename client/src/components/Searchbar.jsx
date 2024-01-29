import React from 'react'
import { IoMdAdd, IoMdSearch} from 'react-icons/io'
import { FaPrint } from "react-icons/fa6";
import { LuSettings2 } from "react-icons/lu";
import {Link, useNavigate} from 'react-router-dom'


const Searchbar = ({searchATerm, setsearchATerm, searchPTerm, setsearchPTerm}) => {
    const navigate = useNavigate();
  return (
    <div className='flex gap-2 md:gap-5 w-full mt-5 justify-center items-center '>
        <div className='flex flex-col px-4 w-full md:flex-row flex-wrap items-center justify-center gap-10 lg:gap-20'>
            <div className='flex flex-col mt-5 gap-5 text-black'>
                <div className='flex justify-start items-center border w-full mx-4 border-slate-400 ml-0 lg:ml-10 px-6 rounded-2xl bg-white outline-none focus-within:shadow-sm'>
                    <input 
                    type="text" 
                    onChange={(e) => setsearchATerm(e.target.value)}
                    placeholder='Search Article No.'
                    value={searchATerm}
                    onFocus={() => navigate('/search')}
                    className='p-2 w-full bg-white outline-none'
                    />
                    <IoMdSearch color='cyan' fontSize={30} className='text-blue ml-1' />
                </div>
                <div className='flex justify-start items-center border w-full mx-4 border-slate-400 ml-0 lg:ml-10 px-6 rounded-2xl bg-white outline-none focus-within:shadow-sm'>
                    <input 
                    type="text" 
                    onChange={(e) => setsearchPTerm(e.target.value)}
                    placeholder='Search Product'
                    value={searchPTerm}
                    onFocus={() => navigate('/search')}
                    className='p-2 w-full bg-white outline-none'
                    />
                    <IoMdSearch color='cyan' fontSize={30} className='text-blue ml-1' />
                </div>
            </div>
            <div className='flex flex-row pl-0 md:pl-16 gap-8 lg:gap-20'>
                <div className='rounded-3xl h-fit p-2 w-fit flex flex-row text-black justify-center items-center border hover:bg-slate-100 shadow-md hover:shadow-none border-slate-400'>
                    <Link to={'create-article'} className='flex flex-row flex-wrap gap-1 px-6 2xl:px-2 items-center md:w-50 h-full transition ease-in-out duration-300'>
                        <div className='hidden 2xl:flex text-black'>New Product</div>
                        <IoMdAdd fontSize={30} color='lime'/>
                    </Link>
                </div>
                <div className='rounded-3xl h-fit p-2 w-fit flex flex-row text-black justify-center items-center border hover:bg-slate-100 shadow-md hover:shadow-none border-slate-400'>
                    <Link to={'print'} className='flex flex-row flex-wrap gap-1 px-6 2xl:px-2 items-center md:w-50 h-full transition ease-in-out duration-300'>
                        <div className='hidden 2xl:flex text-black pr-1'>Print List</div>
                        <FaPrint fontSize={30} color='yellow'/>
                    </Link>
                </div>
                <div className='rounded-3xl h-fit p-2 w-fit flex flex-row text-black justify-center items-center border hover:bg-slate-100 shadow-md hover:shadow-none border-slate-400'>
                    <Link to={'advanced'} className='flex flex-row flex-wrap gap-1 px-6 2xl:px-2 items-center md:w-50 h-full transition ease-in-out duration-300'>
                        <div className='hidden 2xl:flex text-black'>Advanced Mode</div>
                        <LuSettings2 fontSize={30} color='cyan'/>
                    </Link>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Searchbar
