import React from 'react'
import { IoMdAdd, IoMdSearch} from 'react-icons/io'
import {Link, useNavigate} from 'react-router-dom'


const Searchbar = ({searchATerm, setsearchATerm, searchPTerm, setsearchPTerm}) => {
    const navigate = useNavigate();
  return (
    <div className='flex gap-2 md:gap-5 w-full mt-5 '>
        <div className='flex flex-row'>
            <div className='flex flex-col gap-5 text-black'>
                <div className='flex justify-start items-center border min-w-90 md:w-[400px] border-slate-400 w-full mx-6 px-4 rounded-2xl bg-white outline-none focus-within:shadow-sm'>
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
                <div className='flex justify-start items-center border min-w-90 md:w-[400px] border-slate-400 w-full mx-6 px-4 rounded-2xl bg-white outline-none focus-within:shadow-sm'>
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
            <div className='rounded-lg flex flex-row text-black justify-center items-center border border-slate-400'>
                <Link to={'create-article'} className='flex flex-row gap-1 p-0 m-0 items-center md:w-50 h-full'>
                    <div>New Product</div>
                    <IoMdAdd fontSize={30} color='black'/>
                </Link>
            </div>

        </div>
        
        
    </div>
  )
}

export default Searchbar
