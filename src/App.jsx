import React from 'react'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import Marquee from './components/LandingPage/Marquee'
import About from './components/About/About'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      {/* <LandingPage /> */}
      {/* <Marquee /> */}
      {/* <About /> */}
    </div>
  )
}

export default App