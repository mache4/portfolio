import './Main.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const MainSection = () => {
    return (
        <div className="main section">
            <div className="title">
                <span className="title--1">Branislav Rendulić.</span>
                <span className="title--2"><b>Web Developer</b>.</span>
                <AnchorLink className="view-projects-btn" href="#projects">View Projects</AnchorLink>
            </div>
        </div>
    );
}

export default MainSection;