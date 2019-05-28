import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../js/Home';
import Stocksinfo from '../js/Stocksinfo';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/stocksinfo" component={Stocksinfo}/>
        </Switch>
    </HashRouter>

);


export default BasicRoute;