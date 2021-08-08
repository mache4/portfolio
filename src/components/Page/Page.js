import './Page.scss';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';

const Page = (props) => {
    return (
        <div className="page">
            <Main />
            <Projects />
            <AboutMe />
            <ContactMe />
        </div>
    );
}

export default Page;