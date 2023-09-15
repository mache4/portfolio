import { useState, useEffect } from "react";
import ProjectCard from '../ProjectCard/ProjectCard';

const WebProjects = (props) => {
    const [projects] = useState([
        // {
        //     id: 1,
        //     title: 'Music Player',
        //     description: 'Small app containing 3 songs which you can pause, play or set timer to. You can also switch between songs.',
        //     tools: ['HTML', 'CSS', 'JavaScript'],
        //     image: 'music-player.png',
        //     websiteURL: 'https://boring-bhaskara-d58c92.netlify.app',
        //     codeURL: 'https://github.com/mache1/music-player'
        // },
        {
            id: 2,
            title: 'Dice Game',
            description: 'JavaScript game based on rolling a dice. First player who gets the score of 20 wins.',
            tools: ['HTML', 'CSS', 'JavaScript'],
            image: 'dice-game.png',
            websiteURL: 'https://naughty-benz-8b7b17.netlify.app',
            codeURL: 'https://github.com/mache1/dice-game'
        },
        // {
        //     id: 3,
        //     title: 'Tic Tac Toe',
        //     description: 'Tic Tac Toe game created in JavaScript.',
        //     tools: ['HTML', 'CSS', 'JavaScript'],
        //     image: 'tic-tac-toe.png',
        //     websiteURL: 'https://fervent-williams-6dc5a9.netlify.app',
        //     codeURL: 'https://github.com/mache1/tic-tac-toe'
        // },
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