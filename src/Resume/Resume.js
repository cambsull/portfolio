import React from 'react';
import kitten from '../assets/img/kittenTestPic.PNG';
import styles from './Resume.module.css';

function Resume() {
    return (
        <div className={styles.tempCenterDiv}>
        <img src={kitten} alt="kitten" />
        </div>
    );
}

export default Resume; 