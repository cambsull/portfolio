import React from 'react';
import styles from './Projects.module.css';
import trakStackLogo from '../assets/img/trakStackLogo.PNG';
import trakStackFunctioning from '../assets/img/trakStackFunctioning.PNG';

function Projects() {
    return (
        <div className={styles.primaryContainer}>
            <div className={styles.projectsContainer}>
               <div className={styles.displayProjects}>
                <span>
                <a href="https://development--trakstack.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src={trakStackLogo} alt='TrakStack Logo' />
                </a>
                </span> 
                </div>
                <div className={styles.projectDescriptionHeader}>
                    <a href="https://development--trakstack.netlify.app/" target="_blank" rel="noopener noreferrer"><h1>TrakStack</h1></a>
                </div>
                <div className={styles.projectDescriptionText}><p>TrakStack is a React app that lets you search Spotify for tracks, albums, and artists, and then save unique tracks to a custom Spotify playlist!</p></div>
                <div className={styles.projectDescriptionText}><p>Please note: TrakStack is still in development, and due to Spotify's developer requirements 
                                                                  some features may not work correctly unless you are manually authenicated via the Spotify Developer Dashboard. 
                                                                  Please contact me for assistance.</p></div>
                                                                  <div className={styles.gitHubTextLink}>
                                                                  <p>TrakStack is open source! Feel free to check out the <a href="https://github.com/cambsull/TrakStack/tree/master" alt="TrakStack source">GitHub Repo </a> here!
                                                                  </p></div>
                <div className={styles.displayProjectsSecondary}>
                    <span>
                    <img src={trakStackFunctioning} alt='TrakStack Functioning' />
                    <div className={styles.projectDescriptionTextSecondary}><p>Hover for a closer look!</p></div>
                    </span>
                   
                </div>
            </div>
                
        </div>
        )
    
}

export default Projects;