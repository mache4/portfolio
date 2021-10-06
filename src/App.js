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
        </Switch>
    );
}

export default App;
