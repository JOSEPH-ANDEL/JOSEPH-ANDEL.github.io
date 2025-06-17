import React from "react";
import SudokuVideo from '../assets/images/SudokuVideo.gif';
import InventoryVideo from '../assets/images/InventoryVideo.gif';
import OS161 from '../assets/images/OS161.png';
import MovieDatabase from '../assets/images/MovieDatabase.gif';

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
                <a href="https://gitshare.me/repo/57028763-16be-4e85-949d-1c7a7849196f" target="_blank" rel="noreferrer"><img src={OS161} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://gitshare.me/repo/57028763-16be-4e85-949d-1c7a7849196f" target="_blank" rel="noreferrer"><h2>OS 161</h2></a>
                <p>Implemented syncronization and system calls within a simulated OS based on MIPS. C was used to implement the necessary functions and system calls for processes including fork, exec, exit, getpid, getppid, and waitpid</p>
            </div>
            <div className="project">
                <a href="https://github.com/JOSEPH-ANDEL/Movie-Database" target="_blank" rel="noreferrer"><img src={MovieDatabase} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/JOSEPH-ANDEL/Movie-Database" target="_blank" rel="noreferrer"><h2>Movie Database</h2></a>
                <p>This is a local Movie Database that uses SQL and Java in order to easily add, remove, and view both ratings and movies.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;