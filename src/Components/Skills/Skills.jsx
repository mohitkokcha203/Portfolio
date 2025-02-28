import React from 'react'
import skills from './Skills.json'
import './Skills.css'

function Skills() {
  return (
    <section id='skills' className='container-skills'>
        
        <h2 className='title-skill'>Skill<span className='skill-span'>'s</span></h2>
        
        
        <div className='content-skill'>
            {skills.map((skill,id)=>{
                return(
                    <div key={skill.id} className='skill'>
                        <div className='skill-image-container'>
                        <img src={skill.img} alt="skill.title" className='skill-image' />
                        </div>
                        
                        <p className='skill-para'>{skill.title}</p>
                        
                        
                    </div>
                    )
            })}
        </div>
    </section>
  )
}

export default Skills