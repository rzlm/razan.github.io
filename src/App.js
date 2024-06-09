import React from 'react'
import { Navbar, Hero, Experience, Projects, Education } from './Components'
const App = () => {
  return (
    <div className='bg-bg-purple'>
      <div>
        <Navbar/>
        <Hero/>
        <Projects/>
        <Experience/>
        <Education/>
      </div>
    </div>
  )
}

export default App