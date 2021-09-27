import './Sidebar.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    return (
        <div className="sidebar" style={{
            transform: props.show ? 'translateX(0)' : 'translateX(100%)'
        }}>
            <i className="fas fa-times" onClick={props.clicked}></i>
            <i className="fab fa-linkedin" onClick={() => window.open('https://www.linkedin.com/in/branislav-rendulić-9b6411205/')}></i>
            <ul>
                <li className="nav__item">
                    <AnchorLink className="sidebar__nav__link nav__link btn"
                        offset={() => 100}
                        onClick={props.clicked}
                        href="#about-me">About me</AnchorLink>
                </li>
                <li className="nav__item">
                    <AnchorLink className="sidebar__nav__link nav__link btn"
                        offset={() => 100}
                        onClick={props.clicked}
                        href="#contact-me">Contact</AnchorLink>
                </li>
                <li className="nav__item">
                    <Link to="/resume" className="sidebar__nav__link nav__link btn"
                        onClick={props.clicked}
                        href="/resume">Resume</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;