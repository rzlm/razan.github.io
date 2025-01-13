import React from 'react'

const Project = ({name, link, image, desc, skills}) => {
  return (
    <div className='flex flex-col justify-center items-center px-5 py-4 text-font-figtree'>
<div class="card w-[300px] h-[325px] bg-[#e8e8e8] rounded-[15px] overflow-hidden flex flex-col justify-center relative text-[#212121] border-2 border-primary transition-all duration-500 ease-in-out hover:shadow-[5px_5px_10px_0px_primary]">
  <div class="icons flex flex-row gap-[5px] absolute right-[15px] top-[15px] opacity-0 transition-opacity duration-500 ease-in-out z-0 group-hover:z-10 group-hover:opacity-100">
  </div>
  <div class="image w-[300px] h-[148px] bg-gradient-to-r from-purple-300 via-pink-200 to-pink-200 hover:brightness-90 transition-filter duration-500"></div>
  <div class="card__info flex flex-col flex-grow justify-center p-[15px] gap-[3px]">
 <div className='flex flex-row gap-2'>

  {  skills.map((skill, index) => ( 
    <span class="tag text-primary text-[12px] font-semibold rounded-[5px] px-[5px] py-[2px]">{skill}</span>
    ))
  }
   </div>
    <a href="#" class="title text-[17px] font-semibold no-underline text-black hover:text-primary">{name}</a>
    <p class="content text-[14px]">{desc}</p>
  </div>
  <div class="buttons flex flex-row gap-[5px] justify-center p-[5px]">
    {/* <button class="save bg-primary text-white border-none rounded-[5px] flex flex-row justify-center items-center gap-[5px] px-2 py-1">
      <svg class="save__icon w-[15px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      </svg>
      Save
    </button> */}
    <button class="see-more bg-primary text-white border-none rounded-[5px] flex flex-row justify-center items-center gap-[5px] px-2 py-1">
      <svg class="see-more__icon w-[15px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      </svg>
     <a href={link} target="_blank" rel="noreferrer">Link</a> 
    </button>
  </div>
</div>

    </div>
  )
}

export default Project