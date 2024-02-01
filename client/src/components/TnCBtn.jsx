import React from 'react'
import { useNavigate } from 'react-router-dom'

const TnCBtn = () => {
    const navigate = useNavigate();

  return (
    <div>
        <div className='visible text-black justify-center items-center flex grow h-screen w-full'>
            <div onClick={()=>{navigate('/terms')}} className='text-lg p-3 border border-slate-600 rounded-2xl text-center text-[#0f7ee9] hover:bg-slate-300 transition cursor-pointer hover:scale-110'>
                Terms And Conditions
            </div>
        </div>
    </div>
  )
}

export default TnCBtn
