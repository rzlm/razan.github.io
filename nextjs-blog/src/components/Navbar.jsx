import React from 'react'


const Navbar = () => {
  return (
    <div className='fixed flex font-nunito px-4  w-full m-4 rounded-xl'>
        <div className='p-4 font-extrabold text-2xl'>
           <p className='text-primary'>Razan Mohamed</p> 
        </div>
        <div className=' font-regular flex p-4 text-lg  items-center text-primary ml-auto px-8 justify-between'>
          <a href='#About'> <p className='transition delay-150 duration-200 hover:bg-[#7060a6] hover: hover:cursor-pointer  p-2 rounded-md mx-2'>About</p> </a> 
          <a href='#Skills'> <p className='transition delay-150 duration-200 hover:bg-[#7060a6] hover: hover:cursor-pointer  p-2 rounded-md mx-2'>Skills</p> </a>
          <a href='#Projects'> <p className='transition delay-150 duration-200 hover:bg-[#7060a6] hover: hover:cursor-pointer  p-2 rounded-md mx-2'>Projects</p> </a> 
          <a href='#Experience'>  <p className='transition delay-150 duration-200 hover:bg-[#7060a6] hover: hover:cursor-pointer  p-2 rounded-md mx-2'>Experience</p> </a> 
          <a href='#Education'>  <p className='transition delay-150 duration-200 hover:bg-[#7060a6] hover: hover:cursor-pointer  p-2 rounded-md mx-2'>Education</p></a> 

        </div>
    </div>
  )
}

export default Navbar