import React from 'react'
import highpic_logo from '../Asserts/images/highpic_logo.png'
import { FaBars, FaXmark } from 'react-icons/fa6'
const Header = () => {
    return (
        <header className="header">


            <div className="header-brand">
                <img src={highpic_logo} alt='highpic_pro_logo' className='header-brand--logo' />
            </div>

            <span className="header-brand--name">
                HIGHPIC PRO
            </span>
            <div className="nav-toggler">
                <span className="nav-icon ">
                    <FaBars className='header--bars' />
                </span>
                <span className="nav-icon hidden">
                    <FaXmark className='header--tites' />
                </span>
            </div>
            <ul className="header-menu">

                <li className="header-menu--item">
                    <a href="#" className="header-menu--link active">home</a>
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
