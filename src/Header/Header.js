//Functional imports
import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; //Imports fonts directly into Header.js

//Stylistic imports
import styles from './Header.module.css'
import desktopLogo from '../assets/img/logo/transparentLogo.svg';
import wavyGradient from '../assets/svg/wavyGradient.svg';
import mobileLogo from '../assets/img/logo/faviconTransparent.ico';

function Header({ onButtonClick  }) {

    //Blurring effect for non-selected buttons via state mangement
    const [hoveredButton, setHoveredButton] = useState(null);
    const buttons = ['About', 'Projects', 'Resume', 'Contact'];

    function handleButtonHover(btnId) {
        setHoveredButton(btnId);
    };

    function handleButtonLeave() {
        setHoveredButton(null);
    }

    return (
        <>
    <Helmet> 
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />  
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />  
    </Helmet>

        <header className={styles.appHeader}>
            <img className={styles.desktopLogo} src={desktopLogo} alt="Digital Chemist Logo" style={{backgroundImage: `url(${wavyGradient})`}}/>
            
            
            <nav className={styles.navbar}>    
                
                {buttons.map((btn, index) => {
                const isButtonHovered = hoveredButton === index;
                const isAnotherButtonHovered = hoveredButton !== null && hoveredButton !== index;

                let buttonStyle = {};

                if (isButtonHovered) {
                    buttonStyle.backgroundImage = `url(${wavyGradient})`;
                } else if (isAnotherButtonHovered) {
                buttonStyle.filter = 'blur(1.8px)';
                }

                    return (
                              <button key={index} 
                               className={styles.navButton} 
                               onMouseEnter={() => handleButtonHover(index)} 
                               onMouseLeave={handleButtonLeave}
                               style={buttonStyle}
                               onClick={() => onButtonClick(btn)}>
                               {btn}
                             </button>
                              );
                            }
                        )
                    }   
            </nav>

    </header>
    <div className={styles.secondaryContainer}>
    <img className={styles.mobileLogo} src={mobileLogo} alt="Digital Chemist Logo" />
    </div>
    <div className={styles.mobileTextLogo} alt="Digital Chemist Web Studio">
                Digital Chemist Web Studio
    </div>
    </>
    );

}

export default Header;