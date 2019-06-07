# react-outside-click-hook

A React hook that handles clicks outside of a given element and calls a provided function.

# Install

    // Install the package
    npm install react-outside-click-hook

    // Install Typescript Types
    npm install --save-dev @types/react-outside-click-hook

# Usage

### Arguments

Structure:
`useOutsideClick(element, onOutsideClick, active)`

- element: This accepts a React ref to a DOM element
- onOutsideClick : Accepts a callback function that will be called on click outside of the bounds of the element provided. When called this will return a truthy value as to wether a click was inside or outside of the provided element (`true` if inside, `false` if outside).
- active: This accepts a boolean that tells the hook wether to be listening for clicks or not, ture is actively listening for clicks, false is inactive/disabled. (If you want it to always be active, just set this value to `true`)

### Modal Example (typescript)

    import  React,  {  useState,  useRef,  RefObject  } form "react";
    import useOutsideClick from "react-outside-click-hook";

    const  [show,  updateShow]  =  useState(false); // Modal open/close state
    const  modalContainer:  RefObject<HTMLDivElement>  =  useRef(null); // React ref to be applied to the container element

    useOutsideClick(
      modalContainer, // Ref to the container element
      updateShow, // Callback function to be called on outside click
      show // When to disable the outside click handler, ie. when the modal is closed.
    );

### Modal Example (javascript)

    import  React,  {  useState,  useRef  } from "react";
    import useOutsideClick from "react-outside-click-hook";

    const  [show,  updateShow]  =  useState(false); // Modal open/close state
    const  modalContainer =  useRef(null); // React ref to be applied to the container element

    useOutsideClick(
      modalContainer, // Ref to the container element
      updateShow, // Callback function to be called on outside click
      show // When to disable the outside click handler, ie. when the modal is closed.
    );
