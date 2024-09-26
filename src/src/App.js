import React from 'react'
import { Navbar, Hero, Experience, Projects, Education, Contact, Footer } from './Components'
const App = () => {
  return (
    <div className='bg-bg-purple'>
      <div>
        <Navbar/>
        <Hero/>
        <Projects/>
        <Experience/>
        <Education/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App