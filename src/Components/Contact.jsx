import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  return (
    <div id='Contact' className='flex flex-col font-figtree padding'>
        <div className=' flex font-figtree text-center items-center justify-center'>
        <h1
        class="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-purple-500 via-pink-300 to-pink-400 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
       Get in Touch
    </h1> 
        </div>
        <div className='text-white'>
            <form>
                <div className='flex flex-row gap-4 py-6'>
                    <div className='flex flex-col gap-2'>
                        <label> First Name:</label>
                        <input type='text' placeholder='First Name'  className='rounded text-purple-400 p-2'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Last Name:</label>
                        <input type='text' placeholder='Last Name'  className='rounded text-purple-400 p-2 '/>
                    </div>
                </div>
                <div className='flex flex-col '>
                    <div className='flex flex-col gap-2 py-6'>
                        <label>Email:</label>
                        <input type='email' placeholder='Email' className='rounded text-purple-400 p-2 w-2/4' />
                    </div>
                    <div className='flex flex-col gap-2 py-6'>
                        <label>Message:</label>
                        <input type='text' placeholder='Message'  className='rounded text-purple-400 p-2 w-2/4'/>
                    </div>
                    <div className='py-6'>
                        <button className='font-bold bg-gradient-to-r from-purple-500 via-pink-300 to-pink-300 text-white px-6 py-4 rounded'>Submit</button>
                    </div>
                   
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact