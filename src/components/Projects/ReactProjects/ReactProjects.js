import { useState, useEffect } from "react";
import ProjectCard from '../ProjectCard/ProjectCard';

const ReactProjects = (props) => {
    const [projects] = useState([
        {
            id: 1,
            title: 'Shirts Project',
            description: 'React online market where you can create, log in or log out of an existing accout, set up your own cart, order it and see your order history.',
            tools: ['React.js', 'Redux.js', 'SASS', 'Authentication', 'Firebase'],
            image: 'shirts-project.png',
            websiteURL: 'https://jovial-bassi-ef8fd7.netlify.app',
            codeURL: 'https://github.com/mache1/shirts-project'
        },
        {
            id: 2,
            title: 'Cinema Project',
            description: 'App who is fetching Movie API and displaying its content. You can search for movies or see the most popular ones.',
            tools: ['React.js', 'Redux.js', 'SASS', 'API'],
            image: 'cinema-project.png',
            websiteURL: 'https://blissful-nobel-3f064d.netlify.app',
            codeURL: 'https://github.com/mache1/cinema-project'
        },
        {
            id: 3,
            title: 'React Project 3',
            description: 'Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, nesciunt? Maiores voluptates, incidunt possimus molestiae, quod a dicta quia quos tempora officia suscipit dolorum enim.',
            tools: [],
            image: 'project.png',
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
            {(useWindowSize() > 680) ? <div className="react-projects" style={{
                display: props.show ? 'block' : 'none'
            }}>{projectCards}</div> : <div className="web-projects" style={{ display: 'block' }}>{projectCards}</div>}
        </>
    );
}

export default ReactProjects;