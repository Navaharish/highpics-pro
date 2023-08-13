import React from 'react';
import highpics_logo from '../asserts/images/highpic_logo.png'
const Header = () => {
    return (
        <header className="header">
            <div className="header-brand">
                <span className="header-brand--name">
                    <img src={highpics_logo} alt='highpic_logo' className='header-brand--logo' />
                </span>
            </div>

            <div>
                <span> HIGHPIC PRO </span>

            </div>
            <div className="nav-toggler">
                <span className="nav-icon ">
                    <i className="fas fa-bars header--bars "></i>
                </span>
                <span className="nav-icon hidden">
                    <i className=" fas fa-times header--tites "></i>
                </span>
            </div>
            <ul className="header-menu">

                <li className="header-menu--item">
                    <a href="/" className="header-menu--link active">home</a>
                </li>

                <li className="header-menu--item">
                    <a href="#about" className="header-menu--link ">About us</a>
                </li>

                <li className="header-menu--item">
                    <a href="./service.html" className="header-menu--link">our service</a>
                </li>

                <li className="header-menu--item">
                    <a href="./price.html" className="header-menu--link">Price</a>
                </li>
                <li>
                    <button className="btn-primary"><a href="#register">Regester</a></button>
                </li>
            </ul>

        </header >
    )
}

export default Header
