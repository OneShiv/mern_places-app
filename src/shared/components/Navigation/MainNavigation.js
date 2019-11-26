import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import "./MainNavigation.css";
import "./MainHeader";
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from "./SideDrawer";
import BackDrop from "../UIElements/Backdrop/Backdrop";

const MainNavigation = (props) =>{
    const [isSideDrawerOpen,setSideDrawer] = useState(false);
    const openDrawer = () =>{
        setSideDrawer(true)
    }
    const closeDrawer = () =>{
        setSideDrawer(false)
    }
    return(
    <React.Fragment>
        {isSideDrawerOpen && <BackDrop onClick={closeDrawer} />}
         <SideDrawer show={isSideDrawerOpen} onClick={closeDrawer}>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>
        <MainHeader>
            <button onClick={openDrawer} className="main-navigation__menu-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <h1 className="main-navigation__title">
                <Link to="/">Your Places</Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>
        </MainHeader>
    </React.Fragment>
    );
}

export default MainNavigation;