import React from 'react'


const Navbar = () => {
  return (
    <div className='flex font-nunito px-4 '>
        <div className='p-4 font-extrabold text-2xl'>
           <p className='text-white'>Razan Mohamed</p> 
        </div>
        <div className=' font-regular flex p-4 text-lg  items-center text-white ml-auto px-8 justify-between'>
            <p className='transition delay-150 duration-200 hover:bg-[#7060a6] hover: hover:cursor-pointer  p-2 rounded-md mx-2'>About</p>
            <p className='transition delay-150 duration-200 hover:bg-[#7060a6] hover: hover:cursor-pointer  p-2 rounded-md mx-2'>Projects</p>
            <p className='transition delay-150 duration-200 hover:bg-[#7060a6] hover: hover:cursor-pointer  p-2 rounded-md mx-2'>Experience</p>

        </div>
    </div>
  )
}

export default Navbar