import React from 'react'

const Skills = () => {
  return (
    <div id="Skills" className='padding-sm text-font-figtree flex flex-col text-center items-center '>
        <h1 className='relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-purple-500 via-pink-300 to-pink-300 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto'>Technologies</h1>

        <div className=' flex flex-row gap-8'>
          <div className='  text-txt-light font-bold text-left '>
            <h2 className='relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-purple-500 via-pink-200 to-pink-300 bg-clip-text text-2xl font-extrabold text-transparent text-center select-auto'>Languages</h2>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>Typescript</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className=' text-txt-light font-bold text-left'>
            <h1 className='relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-purple-300 via-pink-200 to-pink-300 bg-clip-text text-2xl font-extrabold text-transparent text-center select-auto'>Frameworks</h1>
            <p>React.js</p>
            <p>Node.js</p>

          </div>
          <div className=' text-txt-light font-bold text-left'>
            <h1 className='relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-pink-300 via-pink-300 to-pink-400 bg-clip-text text-2xl font-extrabold text-transparent text-center select-auto'>Dev Tools</h1>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Postman</li>
            </ul>

          </div>
        </div>
    </div>

  )
}

export default Skills