import React from 'react'
import person from '../Assets/person.webp'
import person2 from '../Assets/person2.png'
import photo from '../Assets/photo.jpeg'
const Hero = () => {
  return (
    <div className='padding font-nunito bg-gradient-to-l from-[#53458E] via-bg-purple to-'>
       <div>
        <div className='  grid grid-cols-2'>
            <div className='padding-sm '>
                <div className=''>
                <h1 className=' py-10 text-6xl font-bold text-green-neon hover:cursor-pointer hover:text-purple-light'>Razan Mohamed</h1> 

                </div>
              <p className='font-bold py-2 text-xl text-yellow-light h'>Hello :) I am an aspiring software engineer passionate about innovation and dedicated to making a positive impact on people's lives.</p> 
              <p className='font-bold py-2 text-xl text-yellow-light'>Outside of work, I like reading and I enjoy volunteering in the community.</p>
              <h1 className='text-purple-light font-bold text-xl py-2'>Interests</h1>
              <p className='text-yellow-light text-xl'>Software engineering, web development, data analytics, it </p>
              <h1 className='text-purple-light font-bold text-xl py-2'>Education</h1>
              <p className='text-yellow-light text-xl'>third year Computer Science at wilfrid Laurier university</p>
              <p className='text-yellow-light text-xl'>coursework in big data, alogtihm design and analysis,data strcutres.  Gpa: 11.1/12</p>
            </div>
            <div className='rounded-full items-center justify-center  p-8 '>
                <img src={photo} className=' m-16 shadow-2xl rounded-lg w-80 h-80 object-cover '/>
                <p className='text-yellow-light'>hi its meee</p>
            </div>
        </div>

        </div>
        <div className=' items-center justify-center text-yellow-light '>
            <h1 className='text-center text-3xl text-green-neon font-bold'>Connect with me</h1>
            <div className='font-bold text-lg flex items-center  justify-center py-4'>
                
            <button class="mx-2 button flex items-center justify-center bg-transparent text-white w-[8.5em] h-[2.9em] border-[0.2em] border-green-neon rounded-[11px] transition-all duration-600 ease-in-out hover:bg-green-neon hover:text-bg-purple hover:cursor-pointer">
            <span class="text">LinkedIn</span>
            </button>
            <button class="mx-2 button flex items-center justify-center bg-transparent text-yellow-light w-[8.5em] h-[2.9em] border-[0.2em] border-green-neon rounded-[11px] transition-all duration-600 ease-in-out hover:bg-green-neon hover:text-bg-purple hover:cursor-pointer">
            <span class="text">GitHub</span>
            </button>
            
            <button class="mx-2 button flex items-center justify-center bg-transparent text-white w-[8.5em] h-[2.9em] border-[0.2em] border-green-neon rounded-[11px] transition-all duration-600 ease-in-out hover:bg-green-neon hover:text-bg-purple hover:cursor-pointer">
            <span class="text">Email</span>
            </button>


            
            </div>
        </div>
        

        
    </div>
  )
}

export default Hero