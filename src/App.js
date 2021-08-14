import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Page from './components/Page/Page';

const App = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => {
                return <div className="app">
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
