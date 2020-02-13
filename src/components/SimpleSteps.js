import {Component} from "react";
import React from 'react';
import {Link} from 'react-router-dom';
import Shirt from '../assets/Icon-1.svg'
import Download from '../assets/Icon-2.svg'
import MagnifyingGlass from '../assets/Icon-3.svg'
import Recycle from '../assets/Icon-4.svg'

export default class simpleSteps extends Component {
    render() {
        return (
            <section className='simpleStepsContainer'>
                <h2>Wystarczą 4 proste kroki</h2>
                <div className='header-decoration'/>
                <div className='simpleStepsMain'>
                    <div className='simpleStepsBanner'>
                        <div className='simpleStepsSection'>
                            <img src={Shirt} alt='Shirt'/>
                            <h3>Wybierz rzeczy</h3>
                            <hr/>
                            <p>ubrania, zabawki,<br/> sprzęt i inne</p>
                        </div>
                        <div className='simpleStepsSection'>
                            <img src={Download} alt='Download'/>
                            <h3>Spakuj je</h3>
                            <hr/>
                            <p>skorzystaj z<br/> worków na śmieci</p>
                        </div>
                        <div className='simpleStepsSection'>
                            <img src={MagnifyingGlass} alt='Magnifying Glass'/>
                            <h3>Zdecyduj komu <br/>chcesz pomóc</h3>
                            <hr/>
                            <p>wybierz zaufane <br/> miejsce</p>
                        </div>
                        <div className='simpleStepsSection'>
                            <img src={Recycle} alt='Recycle'/>
                            <h3>Zamów kuriera</h3>
                            <hr/>
                            <p>kurier przyjedzie<br/> w dogodnym terminie</p>
                        </div>
                    </div>
                </div>
                <button><Link to='/login'>ODDAJ <br/>RZECZY</Link></button>
            </section>
        );
    }
}