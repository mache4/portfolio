import './Projects.scss';
import ReactProjects from './ReactProjects/ReactProjects';
import WebProjects from './WebProjects/WebProjects';
import { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Projects = (props) => {
    const [active, setActive] = useState(true);
    const useWindowSize = () => {
        const [size, setSize] = useState(0);
        useEffect(() => {
            const updateSize = () => {
                setSize(window.innerWidth);
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);

        return size;
    }

    const changeActiveHandler = (e) => {
        if (e.target.classList.contains('btn-projects-react') && active === false)
            setActive(true);
        else if (e.target.classList.contains('btn-projects-web') && active === true)
            setActive(false);
    };

    const changeActiveHandler2 = (e) => {
        if (e.target.classList.contains('switch-projects-react-btn') && active === false)
            setActive(true);
        else if (e.target.classList.contains('switch-projects-web-btn') && active === true)
            setActive(false);
    };

    return (
        <div className="projects section" id="projects">
            <h1>Projects</h1>

            <div className="project-picker">
                <button
                    className="btn-projects btn-projects-react"
                    onClick={changeActiveHandler} style={{
                        borderBottomColor: active ? '#071C39' : '#eee'
                    }} >React
                    Projects</button>

                <button
                    className="btn-projects btn-projects-web"
                    onClick={changeActiveHandler} style={{
                        borderBottomColor: !active ? '#071C39' : '#eee'
                    }}>Web Projects</button>
            </div>
            <ReactProjects show={active} />
            <WebProjects show={active} />

            <button className="github-btn" onClick={() => window.open('https://github.com/mache1')}>See More <i className="fab fa-github"></i></button>
            {(useWindowSize() > 1000) && <>
                <AnchorLink className="switch-projects-btn switch-projects-web-btn"
                    onClick={changeActiveHandler2}
                    href="#projects"
                    style={{ display: active ? 'block' : 'none' }}>My Web Projects <i className="fas fa-arrow-right"></i></AnchorLink>
                <AnchorLink className="switch-projects-btn switch-projects-react-btn"
                    onClick={changeActiveHandler2}
                    href="#projects"
                    style={{ display: !active ? 'block' : 'none' }}><i className="fas fa-arrow-left"></i> My React Projects</AnchorLink>
            </>}
        </div>
    );
}

export default Projects;