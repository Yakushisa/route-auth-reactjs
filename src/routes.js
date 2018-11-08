import React from 'react';

import {
    BrowserRouter, // To work with navigate state
    Route,
    Switch,
    Redirect
} from 'react-router-dom';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={() => <h1>Hello</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;

