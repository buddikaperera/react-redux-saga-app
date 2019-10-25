import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Favorites from '../Favorites';
import NotFound from './NotFound';

const Navigation = () => {
    return (
        <Router>

            <div className="my-4">

                <Link to="/">Home</Link>
                <small> | </small>

                <small> | </small>
                <Link to="/favorites">Favorite</Link>

            </div>

            <div className="container">

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/favorites" component={Favorites} />
                    <Route component={NotFound} />

                </Switch>




            </div>

        </Router>
    )
}



export default Navigation;