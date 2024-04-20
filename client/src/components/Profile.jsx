import React from 'react'

const Profile = () => {
  return (
    <div>
      <div>
        <div>
            <div className='flex justify-center mt-[10vh] text-black '>
                <div className='flex flex-col mt-10'>
                    <div className='p-5 border bg-black/30 rounded-xl'>
                        <div className='flex text-5xl gap-20'>
                            <p className='mt-3 font-semibold'>Dee-Codez</p>
                            <img className='w-20 h-20 rounded-full' src="https://avatars.githubusercontent.com/u/114132607?v=4" />
                        </div>
                        <div className='mt-10'>
                            <p className='text-lg'>Business Name : Dee-Codez</p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-lg'>Corporate Mail : <a href="mailto:debampati44@gmail.com">debampati44@gmail.com</a></p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-lg'>Business Address : 123 Main St, Bay Area, SA, USA</p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-lg'>Phone Number : (+1)23456-7890</p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-lg'>Business GSTIN Number: 123456789</p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-lg'>Find us on social media : 
                                <a href="http://facebook.com/yourbusiness"> Facebook</a>, 
                                <a href="http://twitter.com/yourbusiness">Twitter</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
