import profilePic from '../assets/img/profilePic.jpg';
import styles from './About.module.css';

function About() {
    return (
        <>
        <div className={styles.primaryContainer}>
            <div className={styles.welcomeHero}>
                
                    <h2>Welcome!</h2>
                    <p>Blah blah blah blah blah</p>
                
            
                <img src={profilePic} alt="Photo of Cambria Sullivan" />

            </div>
        </div>  

        <div className={styles.primaryContainerMobile}>
        <h1>Welcome!</h1>
        </div>
     
            <div className={styles.welcomeHeroMobile}>
                <h3>I'm glad you're here.</h3>
            </div>
                <div className={styles.welcomeHeroMobile}>
                <img src={profilePic} alt="Photo of Cambria Sullivan" />
            </div>
            <div className={styles.primaryAboutInformationContainer}>
                <div className={styles.primaryAboutInformationText}>
                <p>I am Cambria Sullivan, a front-end developer with experience in HTML, CSS, JavaScript, React.js, Node.js, Python, PHP, SQL, and more on the way!</p>
                <p>I am fascinated by computers and the relationship between computers and mankind. I am also a passionate fan of <a href="https://en.wikipedia.org/wiki/Nerdcore">Nerdcore hip hop</a>, a guitarist, and an autodidact.</p>
                <p>Have a look at my projects or resume, and feel free to reach out with any questions (or just to say 'hi'!)</p>
                </div>
            </div>
            
   


        </>
        
        
        
    )
}

export default About;