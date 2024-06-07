import React from 'react'
import data from '../Assets/data.png';
import website from '../Assets/website.png';
import Project from './Project'


const projects = [{
  name:'COVID-19 Data Analysis',
  desc: 'Analysed two distinct COVID-19 datasets Python from 2020-2024 to determine if there was a correlation between age groups and cases counts (before and after vaccinations), and created several visualizations.',
  skills: ['Data Analysis', 'Python', 'Visualization', 'Jupyter Notebook'],
  image: data,
}, {
  name:'Search Algorithm Visualizer',
  desc: 'Developed an interactive graphical user interface (GUI) that allows users to explore, visualize, and compare the performance of popular search algorithms including Depth-first, Breadth-first, Djikstra searches in different scenarios on a randomly generated maze.',
  image: data,
  skills: ['Java', 'Object Oriented Programming', 'Algorithms', 'Eclipse'],
},
{
  name:'Disease Propogation Simulation',
  desc: 'Modelled the spread of an infectious disease using a popular epidemilogical model (SEIR, deterministic approach) and Ontario COVID-19 data. This was motivated by several research articles on the topc.',
  image: data,
  skills: ['Python', 'Data analysis', 'Web development', 'React', 'HTML', 'CSS', 'Javascript'],
}
];
const Projects = () => {
  return (
    <div className='padding-sm font-figtree  '>
      
        <div className='flex flex-col text-center items-center'>
        <span class="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-lg from-purple-400 via-blue-300 to-pink-400 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
My Project  </span>
    <h1
        class="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-purple-400 via-blue-300 to-pink-400 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        My projects
    </h1> <p className='font-nunito  text-md text-center text-yellow-light'>Some things I've worked on in the past. I'm always working on something new :)</p>
        </div>
      <div>
      {projects.map((data, index) => (
    <div key={index}>
        <Project 
            key={data.id} 
            image={data.image}
            name={data.name} 
            desc={data.desc} 
           skills={data.skills}
        />
    </div>
))}
      </div>

    </div>
  )
}

export default Projects