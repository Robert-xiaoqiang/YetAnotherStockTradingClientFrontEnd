import React from 'react';
import {Router, Route, Switch, BrowserRouter} from 'react-router-dom';
import App from '../component/App';
import NormalLoginForm from '../component/NormalLoginForm';

const APPRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={NormalLoginForm} />
            <Route path="/app" component={App}/>
            <Route path="/login" component={NormalLoginForm} />
        </Switch>
    </BrowserRouter>
);


export default APPRouter;