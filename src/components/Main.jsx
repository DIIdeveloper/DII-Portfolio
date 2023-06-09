import { useState, useRef, useEffect } from 'react'
import { motion, useScroll } from "framer-motion"
import AnimationLogo from './AnimationLogo.jsx'
import Discord from '../pictures/contacts/Discord.svg'
import Github from '../pictures/contacts/Github.svg'
import Telegram from '../pictures/contacts/Telegram.svg'

import Slider from './Slider.jsx'
import Skills from './Skills.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import ContactMe from './ContactMe.jsx'
import './Main.css'


function Main() {
const [WinWidth, setWinWidth] = useState (window.innerWidth);
  const MainARR = [
    { id: 0, src: Discord, link: "a", NameId:"Discord" },
    { id: 1, src: Github, link: "b",NameId:"Github"},
    { id: 2, src: Telegram, link: "c", NameId:"Telegram"}];

  const mainRef = useRef();

  const scrollSliderRef = useRef()

  useEffect(() => {
    setWinWidth(window.innerWidth);
    console.log(window.innerWidth);
    const onWheel = (e) => {
      scrollSliderRef.current.scrollLeft = (e.deltaY + 40);
    };
    scrollSliderRef.current.addEventListener('wheel', onWheel, {
      passive: true,
      smooth: true,
    });
    return () => {
      scrollSliderRef.current.removeEventListener('wheel', onWheel, { passive: true });
    };
  }, []);


  return (
    <>
      <Header WinWidth={WinWidth}></Header>
      <div id='main' className='main'>

        <div className='main-bg-white' >
        {(WinWidth < 1200) && (WinWidth > 900) &&
            <AnimationLogo></AnimationLogo>
          }
          <div id='main-countainer' className='main-countainer'>
            <h2>Ivan Demidov</h2>
            <h3>Frontend/Backend Developer</h3>
            <div className='main-contacts'>
              {MainARR && MainARR.map(obj => (<a id={obj.NameId} key={obj.link}><img key={obj.id} src={obj.src}/></a>))}
            </div>
            
            <motion.button className='main-button'
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
            ><a href='#ContactMe'><h2 id='main-button-h2'>Contact me</h2></a></motion.button>
            </div>

        </div>
        
        {WinWidth > 1200 &&
        <motion.div className='main-bg-black'
          whileInView={{ scale: 1.5, once: true }}
          viewport={{ once: true }}
          transition={{
            duration: 2
          }}
        >
          <AnimationLogo></AnimationLogo>
        </motion.div>
        }
      </div>
      <div id='main-about' className='main-about' >
        <h1>ABOUT ME</h1>
        <h4>There is my description. To be honest, I’m the most beautiful, smartest and just perfect guy. Only ME can help you to develop your web site!</h4>
      </div>
      <div className='main-skills-portfolio'>
        <div id="skills" className='skills'>
          <p className='skills-portfolio-p'>SKILLS</p>
          <Skills></Skills>
        </div>
        <div className='portfolio' id='portfolio' ref={scrollSliderRef}>
          <p className='skills-portfolio-p'>PORTFOLIO</p>
          <div className='Slider-wrapper'><Slider></Slider></div>
        </div>
        <ContactMe></ContactMe>
      </div>

      <div className='Footer'>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Main
