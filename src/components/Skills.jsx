import { useRef } from "react"
import { motion } from "framer-motion"
import bootstrap from '../pictures/skills/bootstrap.png'
import CSS from '../pictures/skills/CSS.png'
import figma from '../pictures/skills/figma.png'
import git from '../pictures/skills/git.png'
import HTML from '../pictures/skills/HTML.png'
import JS from '../pictures/skills/JS.png'
import REACT from '../pictures/skills/REACT.png'
import sass from '../pictures/skills/sass.png'
import framerMotion from '../pictures/skills/framerMotion.png'
import redux from '../pictures/skills/redux.png'
import './Skills.css'

const SkillsARR = [
    { id: 0, text: "Bootstrap", src: bootstrap },
    { id: 1, text: "CSS", src: CSS },
    { id: 2, text: "Figma", src: figma },
    { id: 3, text: "Git", src: git },
    { id: 4, text: "JS", src: JS },
    { id: 5, text: "React", src: REACT },
    { id: 6, text: "Sass", src: sass },
    { id: 7, text: "HTML", src: HTML },
    { id: 8, text: "Framer Motion", src: framerMotion },
    { id: 9, text: "Redux", src: redux }];

function Skills() {


    const animationSkills = {
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    }

    return (
        <>
            <div id="main-skills" className='main-skills'>
                {SkillsARR.map((obj) => <motion.div key={obj.id}
                    id="card-skills"
                    className='card-skills'
                    variants={animationSkills}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.5, once: true }}
                >
                    <img className="card-skils-img" key={obj.src} src={obj.src}></img>
                    <p key={obj.text}>{obj.text}</p>
                </motion.div>)}
            </div>
        </>
    )
}

export default Skills
