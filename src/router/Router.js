import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from '../component/App';
import NormalLoginForm from '../component/NormalLoginForm';

const APPRouter = () => (
    <Router history={createHistory}>
        <Switch>
            <Route path="/" component={App}/>
            <Route exact path="/login" component={NormalLoginForm}/>
        </Switch>
    </Router>
);


export default APPRouter;