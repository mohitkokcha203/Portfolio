import React from 'react'
import './Hero.css'
import HeroImage from '../../assets/m1-modified.png'
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className='container'>
        <div className='content'>
            <h1 className='titlehero'>
                Hello,
            </h1>
            <h1 className='userName'>
                I'm Mohit Kumar Kokcha
            </h1>
            
            <h3 className='description'>
              I'm a{" "}
              <TypeAnimation
                sequence={[
                  1000,
                  "Web Designer",
                  1000,
                  "Forntend Developer",
                  1000,
                  "Backend Developer",
                  1000,
                  "MERN Stack Developer",
                  1000,
                ]}
                wrapper="span"
                speed={40}
                className="render-strings"
                repeat={Infinity}
              />
            </h3>
            <a href='https://drive.google.com/file/d/1O1BpHV9gM6b8GeKU-Rx3JoXbK493GLHu/view?usp=drive_link' className='contactBtn'>Resume</a>
        </div>
        <div className='HeroImg-container'>
        <img src={HeroImage} alt="Hero Image"  className='HeroImg'/>
        </div>
        
        <div className='topBlur'></div>
       
    </section>
  )
}

export default Hero
