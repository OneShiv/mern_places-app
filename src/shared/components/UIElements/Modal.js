import React from 'react';
import ReactDOM from "react-dom";
import "./Modal.css";
import BackDrop from "./Backdrop/Backdrop";
import {CSSTransition} from "react-transition-group";


const ModalOverLay = props => {
    const content = (<div className={`${props.className}`} style={props.style}>
    <header className={`modal__header ${props.headerClass}`}>
    <h2>{props.header}</h2></header>
    <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
        <div className={`modal__content ${props.contentClass}`}>
            {props.children}
        </div>
        <div className={`modal__footer ${props.footerClass}`}>
            {props.footer}
        </div>
    </form>
    </div>);
    return ReactDOM.createPortal(content,document.getElementById("modal-hook"));
}
const Modal = props =>{
    return(
        <React.Fragment>
            {props.show && <BackDrop onClick={props.onClick}/>}
            <CSSTransition in={props.show}
            timeout={200}
            mountOnEnter
            unmountOnExit
            className={"modal"}
            ><ModalOverLay {...props}/></CSSTransition>
        </React.Fragment>
    )
}

export default Modal;