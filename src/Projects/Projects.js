import React from 'react';
import kitten from '../assets/img/kittenTestPic.PNG';
import styles from './Projects.module.css';

function DisplayProjects() {
    return (
        <div className={styles.tempCenterDiv}>
            <div className={styles.tempContainer}>
        <img src={kitten} alt="Kitten" />
            </div>
        </div>
        )
    
}

export default DisplayProjects;