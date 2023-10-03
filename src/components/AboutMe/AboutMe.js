import './AboutMe.scss';
import Pdf from '../../assets/resume.pdf';

const AboutMe = () => {
    return (
        <div className="about-me" id="about-me">
            <h1>About me</h1>
            <h3>Hello I'm Branislav. I started with programming in 2021, when I first encountered HTML and CSS.
                After deciding which stack to choose, I chose React/Node. After one year of studying I started building large-scale web applications.
                This experience has brought my skills to the next level and allowed me to learn how big applications work.
                My goal is to become even better every day, and learn from the professionals. I'm currently studying and looking for a job.
            </h3>
            <div className="link-buttons">
                {/* <button className="linkedin-btn btn" onClick={() => window.open('https://www.linkedin.com/in/branislav-rendulić-9b6411205/')} >LinkedIn</button> */}
                <button onClick={() => window.open(Pdf)} className="resume-btn btn">
                    Resume
                </button>
            </div>
        </div>
    );
};

/* 

Later I started learning new things in Web Development and Mobile Development.

After exploring the programming world, my interests shifted onto other fields.
I got interested in Mechanics and Physics. I am currently studying Computer and Software Engineering while looking for a job.

*/

export default AboutMe;