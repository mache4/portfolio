import './App.scss';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Page from './components/Page/Page';

const App = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => {
                return <div className="app">
                    <header>
                        <NavBar />
                    </header>
                    <Page />
                </div>
            }} />

            <Route exact path="/resume" render={() =>
                <p style={{ fontFamily: 'sans-serif' }}>Resume is not ready yet :(</p>
            } />
        </Switch>
    );
}

export default App;
