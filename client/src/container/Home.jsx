import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className='flex flex-col w-full h-screen transition-height duration-75 ease-out'>
        <Navbar />
        <Sidebar />
        <div className='flex text-black md:flex-row'> 
            Hi
        </div>
    </div>
  )
}

export default Home
