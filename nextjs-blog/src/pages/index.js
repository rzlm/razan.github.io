import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Education from '../components/Education';
import Experience from '../components/Experience';
import SkillCard from '../components/SkillCard';

export default function Home() {
  return (
    <div className='bg-bg-white text-font-figtree'>
      <Navbar />
      <Hero />
      <SkillCard />
      <Projects />
      <Experience />
      <Education />
      <Footer />  
    </div>
  );
}
