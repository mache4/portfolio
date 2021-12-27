import { useState, useEffect } from "react";
import ProjectCard from '../ProjectCard/ProjectCard';

const ReactProjects = (props) => {
    const [projects] = useState([
        {
            id: 1,
            title: 'Shirts Project',
            description: 'React online market where you can create or log in into an existing accout, set up your own cart, order it and see your order history.',
            tools: ['React.js', 'Redux.js', 'SASS', 'Typescript', 'MongoDB'],
            image: 'shirts-project.png',
            websiteURL: 'https://shirts-project.netlify.app',
            codeURL: 'https://github.com/mache4/shirts-project'
        },
        {
            id: 2,
            title: 'Blogs Project',
            description: 'Nextjs app where you can read someones post or create your own.',
            tools: ['Next.js', 'Redux.js', 'TypeScript', 'SASS', 'Firebase'],
            image: 'blogs-project.png',
            websiteURL: 'https://blogs-project-nextjs.vercel.app',
            codeURL: 'https://github.com/mache4/blogs-project'
        },
        {
            id: 3,
            title: 'Cinema Project',
            description: 'App who is fetching Movie API and displaying its content. You can search for movies or see the most popular ones.',
            tools: ['React.js', 'Redux.js', 'SASS', 'API'],
            image: 'cinema-project.png',
            websiteURL: 'https://blissful-nobel-3f064d.netlify.app',
            codeURL: 'https://github.com/mache4/cinema-project'
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