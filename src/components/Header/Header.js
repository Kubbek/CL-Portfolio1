import React, {Component} from 'react';
import {Login} from "./Login";
import {Nav} from "./Nav";
import {Main} from "./Main";
;

export default class Header extends Component {
    render() {
        return (
            <header className='header-container' id={'start-page'}>
                <div className='header-img'></div>
                <div className='header-nav-and-heading'>
                    <Login/>
                    <Nav/>
                    <Main/>
                </div>
            </header>
        )
    }
}