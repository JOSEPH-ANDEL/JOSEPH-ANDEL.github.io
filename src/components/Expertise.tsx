import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';



const labelsSecond = [
    "C",
    "C++",
    "C#",
    "Python",
    "Java",
    "Javascript",
    "Typescript",
    "AMPL",
];

const labelsThird = [
    "Git",
    "HTML",
    "CSS",
    "React",
    "Machine Learning",
    "Pandas",
    "NumPy",
    "SQL",
    "MongoDB",
    "Firebase"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise and Education</h1>
            <div className="skills-grid">
                <div className="skill">
                    <img
                      src={`${process.env.PUBLIC_URL}/George-Mason-University-Symbol.png`}
                      style={{ width: 85, height: 48 }}
                    />
                    <h3>B.S. in Computer Science</h3>
                    <p>I graduated Cum Laude from George Mason University in 2025 with a final GPA of 3.53</p>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Programming Languages</h3>
                    <p>Over the years I have picked up skills in a wide variety of OOP programming languages such as Java, Python, C++, C#, Javascript, and Typescript. I also have 
                        experience with non OOP languages such as C and AMPL.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Languages:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGithub} size="3x"/>
                    <h3>Technical Skills</h3>
                    <p>I have acquired a wide variety of technical skills not directly tied to programming languages including Git,
                        HTML, CSS, React, and various data science libraries such as Pandas and NumPy. I also have experience with databases such as SQL, MongoDB, and Firebase.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Technical Skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;