import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-green-neon font-nunito px-4 '>
        <div className='p-4 font-bold text-2xl'>
           <p className='text-bgpurple'>Razan Mohamed</p> 
        </div>
        <div className=' flex p-4 text-2xl  items-center text-bg-purple ml-auto px-8 justify-between'>
            <p className='px-4'>About me</p>
            <p className='px-4'>Experience</p>
            <p className='px-4'>Skills</p>
            <p className='px-4'>Projects</p>
            <p className='px-4'>Contact</p>
        </div>
    </div>
  )
}

export default Navbar