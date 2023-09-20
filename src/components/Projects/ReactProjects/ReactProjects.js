import { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const WebProjects = (props) => {
    const [projects] = useState([
        {
            id: 1,
            title: "Ecommerce",
            description: "Fully functioning ecommerce with features like sorting and categorizing. Customers can add products to their cart, and pay with their credit card.",
            tools: ["React.js", "Redux.js", "Typescript", "TailwindCSS", "Node.js", "Express", "MongoDB", "Stripe"],
            image: "ecommerce.png",
            websiteURL: "https://ecommerce-client-gilt.vercel.app",
            codeURL: "https://github.com/mache4/ecommerce"
        },
        {
            id: 2,
            title: "Blogs",
            description: "Nextjs app where you can read someones posts and create your own.",
            tools: ["Next.js", "Redux.js", "TypeScript", "SASS", "MongoDB"],
            image: "blogs-project.png",
            websiteURL: "https://blogs-project-red.vercel.app",
            codeURL: "https://github.com/mache4/blogs-project"
        },
        {
            id: 3,
            title: "Cinema",
            description: "An App fetching Movie API and displaying its content. You can search for movies and see the most popular ones.",
            tools: ["React.js", "Redux.js", "SASS", "API"],
            image: "cinema-project.png",
            websiteURL: "https://cinema-proj.netlify.app",
            codeURL: "https://github.com/mache4/cinema-project"
        }
    ]);

    const useWindowSize = () => {
        const [size, setSize] = useState(0);
        useEffect(() => {
            const updateSize = () => {
                setSize(window.innerWidth);
            }
            window.addEventListener("resize", updateSize);
            updateSize();
            return () => window.removeEventListener("resize", updateSize);
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
                display: props.show ? "block" : "none"
            }}>{projectCards}</div> : <div className="web-projects" style={{ display: "block" }}>{projectCards}</div>}
        </>
    );
}

export default WebProjects;