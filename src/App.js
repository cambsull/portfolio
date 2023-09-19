import './App.css';
import Header from './Header/Header.js';
import About from './About/About.js';
import Projects from './Projects/Projects.js'
import Resume from './Resume/Resume.js'
import Contact from './Contact/Contact.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { useState } from 'react';

function App() {

    //Handle state management of which component is displayed
    const [displayComponent, setDisplayComponent] = useState('about');
    
    //Callback function for displaying specific component
    const handleButtonClick = (buttonLabel) => {
        setDisplayComponent(buttonLabel.toLowerCase());
    }
   
    return (
       <>
        <Header onButtonClick={handleButtonClick} />

        <TransitionGroup>
            <CSSTransition key={displayComponent} classNames="opacityEffect" timeout={300}>
                <>
                    {displayComponent === 'contact' && <Contact />}
                    {displayComponent === 'projects' && <Projects />}
                    {displayComponent === 'resume' && <Resume /> }
                    {displayComponent === 'about' && <About />} 
                </>
            </CSSTransition>
        </TransitionGroup>
        <div style={{color: 'white'}}>Development Build: 0.5</div>
       </>
       
    )
  
}

export default App;
