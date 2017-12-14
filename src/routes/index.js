import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
    </BrowserRouter>
);