import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
//import person from '../Assets/person.webp'
//import person2 from '../Assets/person2.png'
const Hero = () => {
  return (
    <div id='About' className='padding text-font-figtree h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100'>
       <div>
        <div className=' '>
            <div className='padding-sm '>
            <div className=''>
        
    
      </div>
      <h1
        className=" py-2 justify-center flex items-center text-secondary text-3xl font-extrabold text-center">
learning · designing · developing
    </h1>  
 
           <h1 className=' py-2  mx-auto text-6xl font-extrabold text-center text-primary '>Razan Mohamed</h1> 

              <p className=' py-2 w-3/4 mx-auto text-xl text-center text-primary '>I’m an aspiring software engineer that loves tackling problems and turning them into innovative solutions.</p> 
              {/* <p className='font-bold py-2 text-xl text-txt-light'>In my free time, I like reading and I enjoy volunteering in the community.</p>             */}
              <div className=' py-10 items- justify-start text-yellow-light '>
            <div className='font-regular text-lg flex items-center  justify-center py-4 gap-4'>
                
             <button className=" mx-2 bg-primary  flex items-center justify-center drop-shadow-xl

 text-txt-light w-fit p-3 px-4  rounded-xl transition-all duration-600 ease-in-out  hover:bg-purple-100 hover:text-secondary hover:cursor-pointer">
             <FontAwesomeIcon icon={faGithub}  style={{ fontSize: '40px'}} />
            </button> 
            <button className=" mx-2 bg-primary  flex items-center justify-center drop-shadow-xl

 text-txt-light w-fit p-3 px-4  rounded-xl transition-all duration-600 ease-in-out  hover:bg-purple-100 hover:text-secondary hover:cursor-pointer">
             <FontAwesomeIcon icon={faLinkedin}  style={{ fontSize: '40px'}} />
            </button> 
            <button className=" mx-2 bg-primary  flex items-center justify-center drop-shadow-xl

 text-txt-light w-fit p-3 px-4  rounded-xl transition-all duration-600 ease-in-out  hover:bg-purple-100 hover:text-secondary hover:cursor-pointer">
             <FontAwesomeIcon icon={faEnvelope}  style={{ fontSize: '40px'}} />
            </button> 
            
            </div>
        </div>
            </div>
           
        </div>

        </div>
       
        

        
    </div>
  )
}

export default Hero