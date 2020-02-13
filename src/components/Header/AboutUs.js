import React, {Component} from 'react';
import Signature from '../../assets/Signature.svg';

export default class AboutUs extends Component {
    render() {
        return (
            <section className='aboutUsContainer'>
                <div className='aboutUsMain'>
                    <div className='aboutUsSection'>
                        <h2>O nas</h2>
                        <div className='header-decoration'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                        <img src={Signature} alt='Signature'/>
                    </div>
                </div>
                <div className='aboutUsImage'/>
            </section>
        )
    }
}