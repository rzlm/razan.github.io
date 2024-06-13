import React from 'react'
import data from '../Assets/data.png';
import website from '../Assets/website.png';
import word from '../Assets/word.png'
import Project from './Project'
import mosaic from '../Assets/mosaic.png'

const projects = [{
  name:'Photo Mosaic Creation Using Genetic Algorithm',
  desc: 'This is a web application made with Flask and Python, users can upload source photos, and a target image will be created using a genetic algorithm. ',
  skills: ['Python', 'Flask', 'HTML', 'CSS', 'Web development', 'Data Analysis'],
  image: mosaic,
  link:"https://github.com/CoderMF/Data-Visualization-Project/tree/main"
},{
  
  name:'COVID-19 Data Analysis',
  desc: 'Analysed two distinct COVID-19 datasets Python from 2020-2024 to determine if there was a correlation between age groups and cases counts (before and after vaccinations), and created several visualizations.',
  skills: ['Data Analysis', 'Python', 'Visualization', 'Jupyter Notebook'],
  image: data,
  link:"https://github.com/CoderMF/Data-Visualization-Project/tree/main"
}, {
  name:'AI Next Word Predictor',
  desc: 'This is a natural language processing project, where I developed and trained a Bidirectional Long Short-Term Memory (Bi-LSTM) model from scratch in python with multiple layers to predict the next word to an input sentence.  ',
  image: word,
  skills: ['Python', 'Pandas', 'NumPy', 'TensorFlow'],
  link: ''
}, /* {
  name:'Search Algorithm Visualizer',
  desc: 'Developed an interactive graphical user interface (GUI) that allows users to explore, visualize, and compare the performance of popular search algorithms including Depth-first, Breadth-first, Djikstra searches in different scenarios on a randomly generated maze.',
  image: data,
  skills: ['Java', 'Object Oriented Programming', 'Algorithms', 'Eclipse'],
  link: ''
} */,
/* {
  name:'Disease Propogation Simulation',
  desc: 'Modelled the spread of an infectious disease using a popular epidemilogical model (SEIR, deterministic approach) and Ontario COVID-19 data. This was motivated by several research articles on the topc.',
  image: data,
  skills: ['Python', 'Data analysis', 'Web development', 'React', 'HTML', 'CSS', 'Javascript'],
  link: ''
} */
];
const Projects = () => {
  return (
    <div className='padding-sm font-figtree  '>
      
        <div className='flex flex-col text-center items-center'>
       
    <h1
        class="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-purple-500 via-pink-300 to-pink-300 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        My projects
    </h1> <p className='font-nunito  text-md text-center text-yellow-light'>I have experience creating user friendly, modular and object-oriented programs, using a wide variety of technologies. </p>
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