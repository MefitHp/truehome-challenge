import React from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainLayout from './pages/MainLayout';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={MainLayout} />
            </Switch>
        </Router>
    )
}

export default Routes
