import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';

const Routers = () => {
    const login = useSelector(response => response.login);

    return (
        <Router>
            <Header />
            {
                !login.isLoggedin ?
                    (<Switch>
                        <Route
                            path='/'
                            exact={true}
                            component={Login}
                        />
                        <Route
                            path='/login'
                            exact={true}
                            component={Login}
                        />
                        <Redirect to='/' />
                    </Switch>) :
                    (<Switch>
                        <Route
                            path='/dashboard'
                            component={Dashboard}
                        />
                        <Redirect to='/dashboard' />
                    </Switch>)
            }
        </Router>
    )
}

export default Routers;