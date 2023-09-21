import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import resumeOne from '../assets/img/resumeOne.jpg';
import resumeTwo from '../assets/img/resumeTwo.jpg';
import styles from './ResumeImages.module.css';

function ResumeImages() {
    const [currentPage, setCurrentPage] = useState(0);
    const pages = [ resumeOne, resumeTwo ];
   

    return (
        <div>
            <img src={pages[currentPage]} alt={`Resume page ${currentPage + 1}`} width="100%" />

            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <button className={styles.navButton} onClick={() => setCurrentPage(0)} disabled={currentPage === 0}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className={styles.navButton} onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
}

export default ResumeImages;
