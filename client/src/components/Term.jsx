import React from 'react'
import TermMenu from './TermMenu';

const Term = () => {

    const randomImage = 'https://source.unsplash.com/1920x1080/?nature,photography';


    if(!randomImage) return (
        <div className='text-2xl text-black'>Loading</div>
    )
    

  return (
    <div className='flex flex-col w-full h-screen transition-height duration-75 ease-out text-black'>
        <div >
            <div className='flex '>
                <div className='blur-[1px] h-screen flex-shrink-0 z-10'>
                    <img className='bg-center' src={randomImage}/>
                </div>
                <div className='absolute w-full z-20'>
                    <div className='hidden md:contents w-full'>
                        <TermMenu />
                    </div>
                    <div className='contents md:hidden w-full'>
                Resp Menu
                    </div>
                    
                </div>

                
                
                

                
                {/* <div className='absolute top-1/2 left-1/2 z-10 '>
                        <div className='isolate bg-slate-300'>
                            Hey
                        </div>
                    
                        <div className='p-10  transform -translate-x-1/2 -translate-y-1/2 flex rounded-2xl bg-white z-0' >
                            <div className=''>
                                Terms And Conditions
                            </div>
                        </div>
                    </div>  

                <div className='blur-[2px] z-20'>
                    <img className='' src={randomImage}/>
                </div> */}
            </div>
        </div>
    </div>



    
    // <div className='text-black'>
    //         <div className='absolute bg-white z-9'>
    //             Home
    //         </div>
    //   <div className='relative'>
        
            
            // <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
            //     <div className='p-10 flex rounded-2xl bg-white' >
            //         <div className=''>
            //             Terms And Conditions
            //         </div>
            //     </div>
            // </div>
            
    //         <div className='blur-[3px] z-1'>
    //             <img className='overflow-hidden' src={randomImage} />
    //         </div>
    //   </div>
      
    // </div>
  )
}

export default Term
