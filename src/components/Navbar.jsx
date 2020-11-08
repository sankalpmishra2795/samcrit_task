import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Showcase from './Showcase';
import ViewNote from './ViewNote';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                 <nav className="col-sm navbar-light bg-blue  text-center p-3">
                    <i className="fas fa-book-open bg-light fa-2x mx-4 p-1"></i>
                    <span className="org" style={{ fontSize: 'large' }}>
                    My Note
                    </span>
                    <i className="fas fa-book-open bg-light fa-2x mx-4 p-1"></i>
                </nav>
                <Route exact path='/' component={Showcase} />
                <Route path='/login' component={Login} />
                <Route path='/view-note/:id' component={ViewNote} />
            </div>
        )
    }
}
