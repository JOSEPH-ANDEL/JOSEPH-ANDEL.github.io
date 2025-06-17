import React from "react";
import SudokuVideo from '../assets/images/SudokuVideo.gif';
import InventoryVideo from '../assets/images/InventoryVideo.gif';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/JOSEPH-ANDEL/Sudoku-Solver" target="_blank" rel="noreferrer"><img src={SudokuVideo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/JOSEPH-ANDEL/Sudoku-Solver" target="_blank" rel="noreferrer"><h2>Sudoku Solver</h2></a>
                <p>Developed a Sudoku Solver app using the AMPL mathematical language with optimization techniques and Python for the UI elements.</p>
            </div>
            <div className="project">
                <a href="https://github.com/JOSEPH-ANDEL/Android-Inventory" target="_blank" rel="noreferrer"><img src={InventoryVideo} className="zoom" alt="thumbnail" width="71%"/></a>
                <a href="https://github.com/JOSEPH-ANDEL/Android-Inventory" target="_blank" rel="noreferrer"><h2>Mobile Inventory</h2></a>
                <p>Created a Mobile Inventory app for android using Java, Android Studio, and Firebase that allows users to add items to an inventory database and checkout those items with an order.  </p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;