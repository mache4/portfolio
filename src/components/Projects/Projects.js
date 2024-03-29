import './Projects.scss';
import WebProjects from './WebProjects/WebProjects';
import OtherProjects from './OtherProjects/OtherProjects';
import { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

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

    const Button1 = styled.button`
        border: none;
        border-bottom: 4px solid ${active ? '#071C39' : '#eee'};

        &:hover {
            border-bottom-color: ${active ? 'inherit' : '#ccc'};
        }
    `;

    const Button2 = styled.button`
        border: none;
        border-bottom: 4px solid ${!active ? '#071C39' : '#eee'};

        &:hover {
            border-bottom-color: ${active ? '#ccc' : 'inherit'};
        }
    `;

    return (
        <div className="projects section" id="projects">
            <h1>Portfolio</h1>

            <div className="project-picker">
                <Button1
                    className="btn-projects btn-projects-react"
                    onClick={changeActiveHandler}>Web Projects</Button1>

                <Button2
                    className="btn-projects btn-projects-web"
                    onClick={changeActiveHandler}>Other Projects</Button2>
            </div>
            <WebProjects show={active} />
            <OtherProjects show={active} />

            <button className="github-btn" onClick={() => window.open('https://github.com/mache4')}>See More <i className="fab fa-github"></i></button>
            {(useWindowSize() > 1000) && <>
                <AnchorLink className="switch-projects-btn switch-projects-web-btn"
                    onClick={changeActiveHandler2}
                    href="#projects"
                    style={{ display: active ? 'block' : 'none' }}>My Other Projects <i className="fas fa-arrow-right"></i></AnchorLink>
                <AnchorLink className="switch-projects-btn switch-projects-react-btn"
                    onClick={changeActiveHandler2}
                    href="#projects"
                    style={{ display: !active ? 'block' : 'none' }}><i className="fas fa-arrow-left"></i> My React Projects</AnchorLink>
            </>}
        </div>
    );
}

export default Projects;