import React from 'react'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen text-white bg-black'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
    </div>
  )
}

export default App