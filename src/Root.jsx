import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { history } from './redux/store/history'
import { Top } from './common/containers/pages'
import { PrivateRoute } from './PrivateRoot';

const Root = () => (
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={Top} />
        </Switch>
    </Router>
)

export default Root;