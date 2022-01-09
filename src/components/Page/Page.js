import './Page.scss';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Page = () => {
    return (
        <div className="page">
            <NavBar />
            <Main />
            <Projects />
            <AboutMe />
            <ContactMe />
            <Footer />
        </div>
    );
}

export default Page;