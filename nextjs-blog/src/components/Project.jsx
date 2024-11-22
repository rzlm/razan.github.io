import React from 'react'

const Project = ({name, link, image, desc, skills}) => {
  return (
    <div className='flex flex-col justify-center items-center px-5 py-4 text-font-figtree'>
     
  <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
    <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
      <img src={image} />
    </div>
    <div class="p-4">
    <ul className='flex flex-row'>
                {skills.map((skill, index) => (
                  <div class=" items-center flex  mb-4 rounded-lg m-1 bg-btn-purple border-bg-purple p-2  border text-xs text-bg-purple  shadow-sm text-center">
                    <li key={index}>{skill}</li>  
                  </div>
                   // <li className='uppercase border-bg-purple p-1 border m-1 rounded-md bg-txt-light' key={index}>{skill}</li>
                ))}
          </ul>
      
      <h1 className="mb-2 text-slate-800 text-xl font-semibold">{name}</h1>
      <p className="text-slate-600 leading-normal font-light">
        {desc}
      </p>
    </div>
    <div>
      <button className='border border-purple-800 uppercase font-bold m-2 p-3 bg-pink-400 rounded-lg'> <a href={link}>Link</a></button>
    </div>
  </div> 


        {/* <div  className="flex flex-col items-center bg-slate-50 border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-slate-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt="image"></img>

    <div className="flex flex-col justify-between p-6 leading-normal">
      <div className='flex justify-between'>
      <h1 className="font-extrabold mb-2 text-3xl  tracking-tight text-purplemid dark:text-white">{name}</h1>
      <a href={link} target='_blank'>  <button className='p-2 border hover:bg-slate-200 rounded-md font-bold text-purplemid'>   </button> </a>
      </div>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{desc}</p>
       <div className='flex flex-col'>
       <ul className='flex flex-row'>
                {skills.map((skill, index) => (
                    <li className='border-bg-purple px-4 py-2 border mx-2 rounded-md bg-txt-light' key={index}>{skill}</li>
                ))}
          </ul>
       </div>
    </div>
</div> */}
    </div>
  )
}

export default Project