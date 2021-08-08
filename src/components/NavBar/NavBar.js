import './NavBar.scss';
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import Overlay from '../Overlay/Overlay';
import Sidebar from '../Sidebar/Sidebar';

const NavBar = (props) => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(true);
    }

    const hideSidebar = () => {
        setSidebar(false);
    }

    return (
        <div className="nav-bar">
            <ul>
                <li className="nav__item"><AnchorLink className="nav__link" href="#about-me">About me</AnchorLink></li>
                <li className="nav__item"><AnchorLink className="nav__link" href="#contact-me">Contact</AnchorLink></li>
                <li className="nav__item"><Link className="nav__link" to="/resume">Resume</Link></li>
            </ul>

            <div className="mobile-nav">
                <ul>
                    <li><i
                        onClick={() => window.open('https://github.com/mache1')}
                        className="fab fa-github"></i></li>
                    <li><i className="sidebar-btn fas fa-bars" onClick={showSidebar}></i></li>
                </ul>
            </div>
            <Sidebar show={sidebar} clicked={hideSidebar} />
            <Overlay show={sidebar} clicked={hideSidebar} />
        </div>
    );
}

export default NavBar;