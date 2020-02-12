import {Component} from "react";
import React from "react";
import {Link} from "react-router-dom";

export class Login extends Component {
    render () {
        return (
            <nav className='header-nav'>
                <div className='header-account'>
                    <span><Link to="/login">Zaloguj</Link></span>
                    <span><Link to="/register">Załóż konto</Link></span>
                </div>
            </nav>
        )
    }
}