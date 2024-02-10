import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import About from '../components/About'


function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
