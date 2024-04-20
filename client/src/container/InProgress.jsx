import React from 'react'
import { useParams } from 'react-router-dom'


const InProgress = () => {
    let { component } = useParams();
    let fincomp = component.replace(/([A-Z])/g, ' $1').trim();
  return (
    <div className='flex justify-center text-black'>
        <div className='flex flex-col mt-[10vh] mx-2'>
            <img src="/wip_v3.gif" className='scale-100'/>
            <p className='text-center text-xl'>
                {fincomp} are Currently Under Development
            </p>
            <p className='text-center mt-2 text-xl'>
                Until Then Please Explore Other Features
            </p>
        </div>
        
    </div>
  )
}

export default InProgress
