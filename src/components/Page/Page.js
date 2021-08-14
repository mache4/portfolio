import './Page.scss';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import NavBar from '../NavBar/NavBar';

const Page = (props) => {
    return (
        <div className="page">
            <header>
                <NavBar />
            </header>
            <Main />
            <Projects />
            <AboutMe />
            <ContactMe />
        </div>
    );
}

export default Page;