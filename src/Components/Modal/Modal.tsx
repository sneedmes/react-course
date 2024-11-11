import React from "react";
import './Modal.css'

type ModalProps={
    children: React.ReactNode;
    open: boolean
}

export default function Modal({children, open }:ModalProps){
    return (
        <dialog open={open}>{children}</dialog>
    )
}