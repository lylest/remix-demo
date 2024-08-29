"use client"
import React, { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { Dialog, Transition } from "@headlessui/react";

const portalRoot = document.getElementById("portal-root");

export interface IModal {
    open: boolean;
    children: ReactNode;
    dialogClass?: string;
    onClose: (value: boolean) => void;
    appendTo?: React.RefObject<Element>;
}

const Modal: FC<IModal> = (props) => {
    const {
        open,
        onClose,
        children,
        appendTo,
        dialogClass = "",
    } = props;

    useEffect(() => {
        let clonedModal: HTMLElement | null = null;

        if (appendTo?.current) {
            clonedModal = document.createElement("div");
            appendTo.current.appendChild(clonedModal);
        }

        return () => {
            if (appendTo?.current && clonedModal) {
                appendTo.current.removeChild(clonedModal);
            }
        };
    }, [appendTo]);

    const _modal = (
        <Transition appear show={open}>
            <Dialog
                as={"div"}
                onClose={onClose}
                className={`fixed inset-0 top-10 lg:top-0 z-50  ${dialogClass}`}
            >
                <Transition.Child
                    enter="ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed   inset-0 bg-neutral-900/60 transition-opacity"/>
                </Transition.Child>

                <Transition.Child
                    className="mx-auto min-h-screen  px-4 lg:px-0 lg:w-fit"
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-50"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {children}
                </Transition.Child>
            </Dialog>
        </Transition>
    );

    if (appendTo?.current) {
        return createPortal(_modal, appendTo.current);
    }
    //@ts-ignore
    return createPortal(_modal, portalRoot);
};

export default Modal;
