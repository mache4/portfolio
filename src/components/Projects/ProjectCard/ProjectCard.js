import './ProjectCard.scss';

const ProjectCard = (props) => {
    let tools = props.tools.map((i, index) => {
        return <li key={index}>{i}</li>
    });

    return (
        <div className="project">
            <div className="text-wrapper">
                <div className="text">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <ul className="tools">
                        {tools}
                    </ul>
                    <button className="btn project-link"
                        onClick={() => props.websiteURL && window.open(`${props.websiteURL}`)}>Demo</button>
                    <button className="btn code-link"
                        onClick={() => props.codeURL && window.open(`${props.codeURL}`)}>Code</button>
                </div>
            </div>
            <div className="project-image">
                <img src={require(`../../../assets/${props.image}`).default} alt="" />
                <button className="btn project-link"
                    onClick={() => props.websiteURL && window.open(`${props.websiteURL}`)}>Demo</button>
            </div>
        </div>
    );
}

export default ProjectCard;