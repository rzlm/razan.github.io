import React from 'react'
import person from '../Assets/person.webp'
import person2 from '../Assets/person2.png'
import photo from '../Assets/photo.jpeg'
const Hero = () => {
  return (
    <div className='padding font-figtree '>
       <div>
        <div className='  grid grid-cols-2'>
            <div className='padding-sm '>
                <div className=''>
                
    <h1
        class="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-purple-400 via-blue-300 to-purple-400 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        Razan Mohamed
    </h1>
                             </div>
              <p className='font-bold py-2 text-xl text-txt-light '>Hello :) I am an aspiring software engineer passionate about innovation and dedicated to making a positive impact on people's lives.</p> 
              <p className='font-bold py-2 text-xl text-txt-light'>Outside of work, I like reading and I enjoy volunteering in the community.</p>            
              <p className='font-light py-2 text-xl text-txt-light'>Currently, I'm in my third year of Computer Science at Wilfrid Laurier University, interested in software engineering and data science.</p>              
              <div className=' py-10 items- justify-start text-yellow-light '>
            <div className='font-semibold text-lg flex items-center  justify-center py-4'>
                
            <button class="transition delay-150 duration-200 mx-2 bg-[#40327a] button flex items-center justify-center bg-transparent text-txt-light w-[8.5em] h-[2.9em] border-[0.1em] border-purple-300 rounded-[11px] transition-all duration-600 ease-in-out  hover:bg-purple-300 hover:text-bg-purple hover:cursor-pointer">
            <span class="text">LinkedIn</span>
            </button>
            
            <button class=" transition delay-150 duration-200 mx-2 bg-[#40327a] button flex items-center justify-center bg-transparent text-txt-light w-[8.5em] h-[2.9em] border-[0.1em] border-purple-300 rounded-[11px] transition-all duration-600 ease-in-out  hover:bg-purple-300 hover:text-bg-purple hover:cursor-pointer">
            
            <span class="text">GitHub</span>
            </button>
            
             <button class="transition delay-150 duration-200 mx-2 bg-[#40327a] button flex items-center justify-center bg-transparent  text-txt-light w-[8.5em] h-[2.9em] border-[0.1em]  border-purple-300 rounded-[11px] transition-all duration-600 ease-in-out hover:bg-purple-300 hover:text-bg-purple hover:cursor-pointer">
                <span class="text">Email</span>
            </button> 


            
            </div>
        </div>
            </div>
            <div className='rounded-full items-center justify-center  p-8 '>
                <img src={person2} className=' m-16 shadow-2xl rounded-lg w-80 h-80 object-cover '/>
                <p className='text-yellow-light'>hi its meee</p>
            </div>
        </div>

        </div>
       
        

        
    </div>
  )
}

export default Hero