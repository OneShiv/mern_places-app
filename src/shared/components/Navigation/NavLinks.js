import React from 'react';
import "./NavLinks.css"
import {NavLink} from 'react-router-dom';

const Navlinks = (props) =>{
    return(
        <ul className="nav-links">
            <li><NavLink to="" exact>All Users</NavLink></li>
            <li><NavLink to="/u1/places" exact>My Places</NavLink></li>
            <li><NavLink to="/places/new" exact>New Place</NavLink></li>
            <li><NavLink to="/auth" exact>Authenticate</NavLink></li>
        </ul>
    );
}

export default Navlinks;