import { useState, useEffect } from "react";
import ProjectCard from '../ProjectCard/ProjectCard';

const WebProjects = (props) => {
    const [projects] = useState([
        {
            id: 1,
            title: 'Web Project 1',
            description: 'Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatibus ipsum harum, soluta cumque libero praesentium id nisi in dolores.',
            tools: [],
            image: 'project.png',
            websiteURL: '',
            codeURL: ''
        },
        {
            id: 2,
            title: 'Music Player',
            description: 'Small app containing 3 songs which you can pause, play or set timer to. You can also switch between songs.',
            tools: ['HTML', 'CSS', 'JavaScript'],
            image: 'music-player.png',
            websiteURL: 'https://boring-bhaskara-d58c92.netlify.app',
            codeURL: 'https://github.com/mache1/music-player'
        },
        {
            id: 3,
            title: 'My Custom Carousel',
            description: 'Custom carousel I created for practice. Contains 3 dummy slides which you can switch between using prev and next buttons, or 3 dotts below.',
            tools: ['HTML', 'CSS', 'JavaScript'],
            image: 'my-custom-carousel.png',
            websiteURL: '',
            codeURL: ''
        }
    ]);

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

    const projectCards = projects.map(project => {
        return <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tools={project.tools}
            image={project.image}
            websiteURL={project.websiteURL}
            codeURL={project.codeURL} />;
    });

    return (
        <>
            {(useWindowSize() > 680) ? <div className="web-projects" style={{
                display: !props.show ? 'block' : 'none'
            }}>{projectCards}</div> : <div className="web-projects" style={{ display: 'block' }}>{projectCards}</div>}
        </>
    );
}

export default WebProjects;