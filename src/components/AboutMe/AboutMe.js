import './AboutMe.scss';
import Pdf from '../../assets/resume.pdf';

const AboutMe = () => {
    return (
        <div className="about-me" id="about-me">
            <h1>About me</h1>
            <h3>I started with
                programming in 2018, when I first encountered C language. Later I started learning new things like Web Development
                and Mobile Development. After exploring the programming world, my interests shifted onto other fields.
                I got interested in Mechanics and Physics. I am currently studying Computer and Software Engineering while looking for a job.
            </h3>
            <div className="link-buttons">
                <button className="linkedin-btn btn" onClick={() => window.open('https://www.linkedin.com/in/branislav-rendulić-9b6411205/')} >LinkedIn</button>
                <button onClick={() => window.open(Pdf)} className="resume-btn btn">
                    Resume
                </button>
            </div>
        </div>
    );
};

export default AboutMe;