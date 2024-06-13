import React from 'react'
import Tabs from './Tabs'

const Experience = () => {
  return (
    <div className='padding'>
        <div className='flex flex-col text-center items-center'>
    <h1
        class="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-purple-500 via-pink-300 to-pink-400 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        My Work Experience
    </h1> 
        </div>
    <Tabs/>
    </div>
  )
}

export default Experience