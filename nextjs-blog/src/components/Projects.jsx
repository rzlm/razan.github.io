import React from 'react'
import Project from './Project'

const projects = [{
  
    name:'COVID-19 Data Analysis',
    desc: 'Analysed two distinct COVID-19 datasets Python from 2020-2024 to determine if there was a correlation between age groups and cases counts (before and after vaccinations), and created several visualizations.',
    skills: ['Data Analysis', 'Python', 'Visualization', 'Jupyter Notebook'],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link:"https://github.com/CoderMF/Data-Visualization-Project/tree/main"
  },{
  
  name:'COVID-19 Data Analysis',
  desc: 'Analysed two distinct COVID-19 datasets Python from 2020-2024 to determine if there was a correlation between age groups and cases counts (before and after vaccinations), and created several visualizations.',
  skills: ['Data Analysis', 'Python', 'Visualization', 'Jupyter Notebook'],
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  link:"https://github.com/CoderMF/Data-Visualization-Project/tree/main"
}, {
  
    name:'COVID-19 Data Analysis',
    desc: 'Analysed two distinct COVID-19 datasets Python from 2020-2024 to determine if there was a correlation between age groups and cases counts (before and after vaccinations), and created several visualizations.',
    skills: ['Data Analysis', 'Python', 'Visualization', 'Jupyter Notebook'],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link:"https://github.com/CoderMF/Data-Visualization-Project/tree/main"
  }
];
const Projects = () => {
  return (
    <div id='Projects' className='padding-sm text-font-figtree '>
      
        <div className='flex flex-col text-center items-center justify-center'>
       
    <h1
        class="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-purple-500 via-pink-300 to-pink-300 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        My projects
    </h1> <p className='font-nunito  text-md text-center text-yellow-light'>I have experience creating user friendly, modular and object-oriented programs, using a wide variety of technologies. </p>
        </div>
      <div className='flex flex-row justify-center items-center gap-4'>
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