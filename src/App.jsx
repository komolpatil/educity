import React, { useState } from 'react'
import Navbar1 from './Components/Navbar/Navbar1.jsx';
import Hero from './Components/Hero/Hero.jsx'
import Programs from './Components/Programs/Programs.jsx';
import Title from './Components/Title/Title.jsx';
import About from './Components/About/About.jsx';
import Campus from './Components/Campus/Campus.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer.jsx';
const App = () => {
  const [playState,setPlayState]=useState(false)
  return (
    <div>
      <Navbar1 />
      <Hero />
      <div className='container'>
        <Title subTitle='Our Program' title='What We Offer'/>
      <Programs />
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallary' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What student says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in touch'/>
      <Contact/>
      <Footer/>
      </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App