import React from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div onClick={props.onHide} className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return <>
	  {createPortal( <Backdrop onHide = {props.onHide} />,portalElement )}
	   {createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
  </>
};

export default Modal;


//   <Fragment>
//     {(createPortal(<Backdrop />), portalElement)}
//     {
//       (createPortal(<ModalOverlay>{props.children}</ModalOverlay>),
//       portalElement)
//     }
//   </Fragment>