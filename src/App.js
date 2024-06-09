import React from 'react'
import { Navbar, Hero, Experience, Projects, Education, Footer } from './Components'
const App = () => {
  return (
    <div className='bg-bg-purple'>
      <div>
        <Navbar/>
        <Hero/>
        <Projects/>
        <Experience/>
        <Education/>
        <Footer/>
      </div>
    </div>
  )
}

export default App