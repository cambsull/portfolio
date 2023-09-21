import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import ResumeImages from '../ResumeImages/ResumeImages.js'
import resume from "../assets/pdf/Sanitized_Cambria_Sullivan_Resume.pdf"
import styles from './Resume.module.css';


function Resume() {

    return (
        <>
    <div className={styles.primaryContainer}>
        <div className={styles.iconContainer}>
            <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/cambria-sullivan-ab3647a6/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className={styles.iconLinkedin} />
        </a>
        <a href={resume} download>
            <FontAwesomeIcon icon={faFileDownload} size="2x" className={styles.iconDownload} />
        </a>
        <a href="https://github.com/cambsull" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className={styles.iconGithub} />
        </a>
        </div>
       
        <div className={styles.imagesContainer}>
            <ResumeImages />
  
   
    </div>
        
    </div>
    </div>
    
    </>
    );
}

export default Resume; 