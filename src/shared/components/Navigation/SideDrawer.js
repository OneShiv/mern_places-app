import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import "./SideDrawer.css";

const SideDrawer = (props) =>{
    const Drawer =(<CSSTransition
        in={props.show}
        timeout={200}
        classNames={"slide-in-left"}
        mountOnEnter
        unmountOnExit>
        <aside onClick={props.onClick}className="side-drawer">
        {props.children}
    </aside></CSSTransition>);
    return ReactDOM.createPortal(Drawer,document.getElementById('drawer-hook'));
}

export default SideDrawer;
