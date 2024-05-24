import React from 'react'
import { Navbar, Hero, Experience, Projects } from './Components'
const App = () => {
  return (
    <div className='bg-bg-purple'>
      <div>
        <Navbar/>
        <Hero/>
        <Projects/>
        <Experience/>
      </div>
    </div>
  )
}

export default App