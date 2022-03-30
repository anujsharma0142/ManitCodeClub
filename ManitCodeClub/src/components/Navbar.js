import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {


    return (
    <>

    <nav className="navbar">
        <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
                MANIT CODE CLUB
                <i className="fa fa-code" aria-hidden="true"></i>
            </NavLink>

            <ul className="nav-menu">
                <li className="nav-item">
                <NavLink exact to="/" className="nav-links">
                HOME
            </NavLink>
                </li>

                <li className="nav-item">
                <NavLink exact to="/Contest" className="nav-links">
               CONTEST
            </NavLink>
                </li>

                <li className="nav-item">
                <NavLink exact to="/Dev" className="nav-links">
                DEV
            </NavLink>
                </li>

                <li className="nav-item">
                <NavLink exact to="/Forum" className="nav-links">
                FORUM
            </NavLink>
                </li>

                <li className="nav-item">
                <NavLink exact to="/Contact" className="nav-links">
                CONTACT US
            </NavLink>
                </li>
            </ul>

        </div>

    </nav>

    </>
    );
}

export default Navbar;
