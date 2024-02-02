import React from 'react'
import diamond from '../assets/diamond.png'
import england from "../assets/england.png"
import { useNavigate } from 'react-router-dom'


const TermMenu = () => {

    const navigate = useNavigate();

  return (
                <div>
                    <div className='flex flex-col text-white'>
                        <div className='flex mt-3 h-[70px] justify-around '>
                            <div className='flex cursor-pointer items-center ml-10 w-[70px]' onClick={()=>{navigate('/home')}}>
                                <img src={diamond}/>
                           </div>
                           <div className='flex flex-row items-center font-semibold gap-5 mr-20'>
                                <div className='p-1 text-md hover:text-slate-400 cursor-pointer' onClick={()=>{navigate('/home')}}>
                                    <p className='drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-slate-900'>Home</p>
                                </div>
                                <div className='p-1 text-md hover:text-slate-400 cursor-pointer' onClick={()=>{navigate('/invoices')}}>
                                    <h2 className='drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-slate-900'>Orders</h2>
                                </div>
                                <div className='p-1 text-md hover:text-slate-400 cursor-pointer' onClick={()=>{navigate('/invoices')}}>
                                    <h2 className='drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-slate-900'>Our Customers</h2>
                                </div>
                                <div className='p-1 text-md hover:text-slate-400 cursor-pointer' onClick={()=>{navigate('/home')}}>
                                    <h2 className='drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-slate-900'>About Us</h2>
                                </div>
                                <div className='p-1 text-md hover:text-slate-400 cursor-pointer' onClick={()=>{navigate('/home')}}>
                                    <h2 className='drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-slate-900'>Contact Us</h2>
                                </div>
                                <div className='p-1 flex flex-row items-center gap-5 text-sm cursor-pointer drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-slate-900'>
                                    English
                                    <img className='h-4' src={england} />
                                </div>
                           </div>
                            
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
  )
}

export default TermMenu
