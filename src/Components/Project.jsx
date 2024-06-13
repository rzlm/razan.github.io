import React from 'react'
import linkimg from '../Assets/link.png';

const Project = ({name, link, image, desc, skills}) => {
  return (
    <div className='flex flex-col items-center px-10 py-4 '>
        <div  className="flex flex-col items-center bg-slate-50 border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-slate-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt="image"></img>

    <div className="flex flex-col justify-between p-6 leading-normal">
      <div className='flex justify-between'>
      <h1 className="font-extrabold mb-2 text-3xl  tracking-tight text-purplemid dark:text-white">{name}</h1>
      <a href={link} target='_blank'>  <button className='p-2 border hover:bg-slate-200 rounded-md font-bold text-purplemid'>  <img src={linkimg} alt="link" ></img>  </button> </a>
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
</div>
    </div>
  )
}

export default Project