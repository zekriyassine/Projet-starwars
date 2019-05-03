import React from 'react';
import './index.css';
import star from '../../assets/images/star.jpg';
import {NavLink} from 'react-router-dom'

const Header = ()=> (

    <React.Fragment>
            <header className="header" style={{backgroundImage:`url(${star})`}}>

            </header>
           <nav>
            <ul className="container-nav">
                <li className="item-nav"><NavLink to="/">Home</NavLink></li>
                <li className="item-nav">Films</li>
                <li className="item-nav"><NavLink to="/perssonages/">Perssonages</NavLink></li>
                <li className="item-nav">About us</li>
            </ul>
        </nav>

    </React.Fragment>
)

export default Header;