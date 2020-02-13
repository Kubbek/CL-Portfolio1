import React, {Component} from 'react';
import Header from "./Header/Header";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./Header/AboutUs";


export default class Home extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <Header/>
                    <ThreeColumns/>
                    <SimpleSteps/>
                    <AboutUs/>
                </div>
            </>
        )
    }
}