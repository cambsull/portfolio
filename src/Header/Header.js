//Functional imports
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; //Imports fonts directly into Header.js

//Stylistic imports
import styles from './Header.module.css'
import desktopLogo from '../assets/img/logo/transparentLogo.svg';
import wavyGradient from '../assets/svg/wavyGradient.svg';
import mobileLogo from '../assets/img/logo/faviconTransparent.ico';

function Header({ onButtonClick  }) {

    //State to detect window size to prevent blurring effect on mobile (will still happen because it thinks a button press is a hover)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //Blurring effect for non-selected buttons via state mangement
    const [hoveredButton, setHoveredButton] = useState(null);
    
    const buttons = ['About', 'Projects', 'Resume', 'Contact'];

    useEffect(() => { //Handle not animating on mobile
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize); //Cleanup
        }
    }, [])

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
               
                let buttonStyle = {};
                if (windowWidth > 1281) { //Only apply blurring effect to non-mobile devices
                    const isButtonHovered = hoveredButton === index;
                    const isAnotherButtonHovered = hoveredButton !== null && hoveredButton !== index;
                

                if (isButtonHovered) {
                    buttonStyle.backgroundImage = `url(${wavyGradient})`;
                } else if (isAnotherButtonHovered) {
                buttonStyle.filter = 'blur(1.8px)';
                }
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