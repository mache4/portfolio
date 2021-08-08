import './AboutMe.scss';
import { Link } from 'react-router-dom';

const AboutMe = (props) => {
    return (
        <div className="about-me" id="about-me">
            <h1>About me</h1>
            <h3>My name is Branislav, and I am 17 years old.
                I've been
                programming since 2017, when I first encountered C language. Since then I started learning new
                things,
                like JavaScript, Python and C#. My knowledge and interest about web development has expanded over
                years,
                so my
                next step is to become a professional.
            </h3>
            <button className="linkedin-btn btn" onClick={() => window.open('https://www.linkedin.com/in/branislav-rendulic-9b6411205/')} >LinkedIn</button>
            <button className="resume-btn btn"><Link to="/resume">Resume</Link></button>
        </div>
    );
};

export default AboutMe;