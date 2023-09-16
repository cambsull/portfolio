import profilePic from '../assets/img/profilePic.jpg';
import styles from './About.module.css';

function About() {
    return (
      
        <>



            <div className={styles.primaryContainer}>
                <h1>Welcome!</h1>


                <div className={styles.welcomeHero}>
                    <h3>I'm glad you're here.</h3>

                </div>
                <div className={styles.welcomeHero}>
                    <img src={profilePic} alt="Cambria Sullivan" />
                </div>
                <div className={styles.primaryAboutInformationContainer}>
                    <div className={styles.primaryAboutInformationText}>
                        <p>I am Cambria Sullivan, a front-end developer with experience in HTML, CSS, JavaScript, React.js, Node.js, Python, PHP, SQL, and more on the way!</p>
                        <p>I am fascinated by computers and the relationship between computers and mankind. I am also a passionate fan of <a href="https://en.wikipedia.org/wiki/Nerdcore">Nerdcore hip hop</a>, a guitarist, and an autodidact.</p>
                        <p>Have a look at my projects or resume, and feel free to reach out with any questions (or just to say 'hi'!)</p>
                    </div>
                </div>
            </div>




        </>



    )
}

export default About;