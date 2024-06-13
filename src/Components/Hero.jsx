import React from 'react'
import person from '../Assets/person.webp'
import person2 from '../Assets/person2.png'
const Hero = () => {
  return (
    <div id='About' className='padding font-figtree '>
       <div>
        <div className=' '>
            <div className='padding-sm '>
                <div className=''>
                
    <h1
        className="relative top-0  h-auto py-4 justify-center  bg-gradient-to-r items-center from-purple-700 via-blue-300 to-purple-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        Razan Mohamed
    </h1>
    
      </div>
      <div className=''>
      <h1
        className="relative top-0  py-2 justify-center flex bg-gradient-to-r items-center from-purple-600 via-blue-300 to-purple-500 bg-clip-text text-3xl font-extrabold text-transparent text-center select-auto">
learning · designing · developing
    </h1>    
     
   
    
      </div>
              <p className='font-bold py-2 text-xl text-center text-txt-light '>Hello! I am interested in software engineering and data science. I'm passionate about innovation and dedicated to making a positive impact on people's lives.</p> 
              {/* <p className='font-bold py-2 text-xl text-txt-light'>In my free time, I like reading and I enjoy volunteering in the community.</p>             */}
              <div className=' py-10 items- justify-start text-yellow-light '>
            <div className='font-regular text-lg flex items-center  justify-center py-4'>
                
          {/*   <button class="transition delay-150 duration-200 mx-2 bg-[#40327a] button flex items-center justify-center bg-transparent text-txt-light w-[8.5em] h-[2.9em] border-[0.1em] border-purple-300 rounded-[11px] transition-all duration-600 ease-in-out  hover:bg-purple-300 hover:text-bg-purple hover:cursor-pointer">
            <span class="text">LinkedIn</span>
            </button> */}
            
         {/*    <a href="https://github.com/rzlm"  target="_blank">  <button class=" transition delay-150 duration-200 mx-2 bg-[#40327a] button flex items-center justify-center bg-transparent text-txt-light w-[8.5em] h-[2.9em] border-[0.1em] border-purple-300 rounded-[11px] transition-all duration-600 ease-in-out  hover:bg-purple-300 hover:text-bg-purple hover:cursor-pointer">
            <span class="text">GitHub</span> 
            </button> </a>  */}
            
            <a href="mailto:razan4424@gmail.com"> <span class="text">  <button class="transition delay-150 duration-200 mx-2 bg-[#40327a] button flex items-center justify-center bg-transparent  text-txt-light w-[8.5em] h-[2.9em] border-[0.1em]  border-purple-300 rounded-[11px] transition-all duration-600 ease-in-out hover:bg-purple-300 hover:text-bg-purple hover:cursor-pointer">
           Email</button></span>  </a>


            
            </div>
        </div>
            </div>
           
        </div>

        </div>
       
        

        
    </div>
  )
}

export default Hero