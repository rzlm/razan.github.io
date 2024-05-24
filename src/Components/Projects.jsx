import React from 'react'
import data from '../Assets/data.png';
import website from '../Assets/website.png';

const Projects = () => {
  return (
    <div className='padding bg-gradient-to-l from-[#53458E] via-bg-purple to'>
        <div>
            <h1 className='font-nunito  text-center py-10 text-4xl font-bold text-green-neon hover:cursor-pointer hover:text-purple-light'>Projects </h1>
            <p className='font-nunito  text-md text-center text-yellow-light'>Some things I've worked on in the past. I'm always working on something new :)</p>
        </div>


<div class=" padding grid gap-16 mb-6  rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2  dark:bg-gray-800">
    <figure class=" bg-slate-100	 rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 font-nunito flex flex-col items-center justify-center p-4 text-center bg-white border-b border-gray-200   dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-2 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-2xl  font-bold text-purplemid dark:text-white">Search Algorithm Visualizer</h3>
            <p class="my-4 text-md"> A interactive GUI that allows users to visualize and compare the performance of popular search algorithms (Depth-first, Breadth-first, Djikstra's) in different scenarios.</p>
           
           
        </blockquote>
  <div >
      <ul class="flex font-bold  font-nunito text-sm *:rounded-full  *:bg-green-neon *:border *:border-bg-purple *:px-3 *:py-1 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
        <li className='m-2 '>Java</li>
        <li className='m-2 '>Object Oriented Programming</li>
      </ul>
</div>
    </figure>
    <figure class="bg-slate-100	 rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 font-nunito flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class=" text-gray-500  dark:text-gray-400">
            <h1 class="text-2xl font-bold text-purplemid dark:text-white">YM Sisters Website</h1>
            <p class="my-4 text-md">I lead the design and development of this website for Young muslim sisters, non-profit organization. A peersonalized website was needed for marketing/branding purposes. </p>
        </blockquote>
        <div>
          <div>
            <img className='rounded h-[300px] w-[500px]' src={website}/>
          </div>
      <ul class="flex font-bold  font-nunito text-sm *:rounded-full  *:border *:border-bg-purple *:bg-green-neon *:px-3 *:py-1 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
        <li className='m-1'>React</li>
        <li className='m-1'>Javascript</li>
        <li className='m-2'>Tailwind CSS</li>
        <li className='m-2'>Node js</li>
        <li className='m-2'>MongoDB</li>
      </ul>
</div>
    </figure>
    <figure class="bg-slate-100	 rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 font-nunito flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-2xl  font-bold text-purplemid dark:text-white">COVID-19 Data Analysis</h3>
            <p class="my-4 text-md">Analysed two distinct COVID-19 datasets from 2020-2024 to determine if there was a correlation between age groups and cases counts (before and after vaccinations), and created several visualizations.</p>
        </blockquote>
        <div>
        <div className=''>
              <img className='rounded h-[300px] w-[500px]' src={data}/>
            </div>
      <ul class="flex font-bold font-nunito text-sm *:rounded-full  *:border *:border-bg-purple *:bg-green-neon *:px-3 *:py-1 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
        <li className='m-1'>Python</li>
        <li className='m-1'>MatPlotLib</li>
      </ul>
</div>
    </figure>
    <figure class="bg-slate-100	 rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 font-nunito flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-2xl font-bold text-purplemid dark:text-white">Disease Propogation Simulation</h3>
            <p class="my-4 text-md">Modelled the spread of an infectious disease using a popular epidemilogical model (SEIR, deterministic approach) and Ontario COVID-19 data. Inspired by a research article.</p>
        </blockquote>
        <ul class="flex font-bold font-nunito text-sm *:rounded-full  *:border *:border-bg-purple *:bg-green-neon *:px-3 *:py-1 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
        <li className='m-1'>Java</li>
        <li className='m-1'>Object Oriented Programming</li>
      </ul>
    </figure>
    
</div>

    </div>
  )
}

export default Projects