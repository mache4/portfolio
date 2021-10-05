import './Main.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const MainSection = (props) => {
    return (
        <div className="main section">
            <div className="title">
                <span className="title--1">My name is Branislav Rendulić.</span>
                <span className="title--2">I am a <b>Front End Developer</b>.</span>
                <AnchorLink className="view-projects-btn" href="#projects">View Projects</AnchorLink>
            </div>
        </div>
    );
}

export default MainSection;