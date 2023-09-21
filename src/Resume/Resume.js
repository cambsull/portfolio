import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import resume from '../assets/pdf/Cambria_Sullivan_Resume.pdf';
import styles from './Resume.module.css';
import PDFViewer from '../PDFViewer/PDFViewer.js';

function Resume() {

    return (
    <div className={styles.primaryContainer}>
        <div className={styles.iconContainer}>
        <a href="https://www.linkedin.com/in/cambria-sullivan-ab3647a6/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className={styles.iconLinkedin} />
        </a>
        <a href={resume} download>
            <FontAwesomeIcon icon={faFileDownload} size="2x" className={styles.iconDownload} />
        </a>
        <a href="https://github.com/cambsull" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className={styles.iconGithub} />
        </a>
        
        <div className={styles.pdfContainer}>
           <PDFViewer url="/Cambria_Sullivan_Resume.pdf" />
           
            </div>
        </div>
    </div>
    );
}

export default Resume; 