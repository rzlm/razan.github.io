import React from 'react'

const Footer = () => {
  return (
    <div className='flex p-6 font-figtree  bg-bg-purple items-center text-center'>
        <ul className='flex flex-row text-txt-light items-center '>
            <li> &copy; 2024. All rights reserved | </li>
            <li>  Made by Razan <a href="https://github.com/rzlm" className=' text-purple-300'>@rzlm</a> </li>
        </ul>
    </div>
  )
}

export default Footer