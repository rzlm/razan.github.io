import React from 'react'
import IconSquareJs from './Icons/javascript'
import IconTypescript from './Icons/typescript'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
const Skills = () => {
  return (
    // <div id="Skills" className='padding-sm text-font-figtree flex flex-col text-center items-center '>
    //     <h1 className='relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-purple-500 via-pink-300 to-pink-300 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto'>Technologies</h1>

    //     <div className=' flex flex-row gap-8'>
    //       <div className='  text-txt-light font-bold text-left '>
    //         <h2 className='relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-purple-500 via-pink-200 to-pink-300 bg-clip-text text-2xl font-extrabold text-transparent text-center select-auto'>Languages</h2>
    //         <ul>
    //           <li>Python</li>
    //           <li>JavaScript</li>
    //           <li>Java</li>
    //           <li>Typescript</li>
    //           <li>SQL</li>
    //           <li>HTML</li>
    //           <li>CSS</li>
    //         </ul>
    //       </div>
    //       <div className=' text-txt-light font-bold text-left'>
    //         <h1 className='relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-purple-300 via-pink-200 to-pink-300 bg-clip-text text-2xl font-extrabold text-transparent text-center select-auto'>Frameworks</h1>
    //         <p>React.js</p>
    //         <p>Node.js</p>

    //       </div>
    //       <div className=' text-txt-light font-bold text-left'>
    //         <h1 className='relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-pink-300 via-pink-300 to-pink-400 bg-clip-text text-2xl font-extrabold text-transparent text-center select-auto'>Dev Tools</h1>
    //         <ul>
    //           <li>Git</li>
    //           <li>GitHub</li>
    //           <li>Postman</li>
    //         </ul>

    //       </div>
    //     </div>
    // </div>
    <div className=' bg-secondary rounded-xl m-20 flex flex-row'>
      <div className='rounded-xl bg-primary p-12 w-fit flex flex-row gap-4 items-center'>
        <FontAwesomeIcon icon={faCode} style={{ fontSize: '40px', color:'#1E0450' }} />
        <h1 className='text-2xl text-white text-font-figtree '>Frameworks</h1>
        <i class="fa-brands fa-js"></i>            </div>
      <div className='flex flex-row gap-4'>
        <div className='flex flex-col text-center m-2'>
          {/* <FontAwesomeIcon icon="fa-brands fa-js" /> */}
          <FontAwesomeIcon icon={faJs}  style={{ fontSize: '70px', color:'#1E0450' }} />

          <h1 className='text-white font-bold'>JavaScript</h1>
        </div>
        <div className='m-2 flex flex-col text-center'>
          <FontAwesomeIcon icon={faJava} style={{ fontSize: '70px', color:'#1E0450' }} />
          <h1 className='text-white font-bold'>Java</h1>
        </div>

      </div>
    </div>
  )
}

export default Skills