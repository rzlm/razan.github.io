import React from 'react'
import Tabs from './Tabs'

const Experience = () => {
  return (
    <div className='padding'>
        <div className='flex flex-col text-center items-center'>
    <h1
        class="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-purple-500 via-pink-300 to-pink-400 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        My Experience
    </h1> <p className='font-nunito  text-md text-center text-yellow-light'>I love learning and I'm always open to new opporunities! </p>
        </div>
    <Tabs/>
    </div>
  )
}

export default Experience