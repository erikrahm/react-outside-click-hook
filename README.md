# react-outside-click-hook
A React hook that handles clicks outside of a given element and calls a provided function.

# Install

    // Install the package
    npm install react-outside-click-handler
	
	// Install Typescript Types
    npm install --save-dev @types/react-outside-click-handler

# Usage

### Props
- element: This accepts a React ref to a DOM element
- onOutsideClick: Accepts a callback function that will be called on click outside of the bounds of the element provided
- active: This accepts a boolean that tells the hook wether to be listening for clicks or not, ture is actively listening for clicks, false is inactive/disabled

### Modal Example (typescript)
    import  React,  {  useState,  useRef,  RefObject  }
    import useOutsideClick from "react-outside-click-handler"
    
    const  [show,  updateShow]  =  useState(false); // Modal open/close state
    const  modalContainer:  RefObject<HTMLDivElement>  =  useRef(null); // React ref to be applied to the container element
    
    useOutsideClick({
      element:  modalContainer, // Ref to the container element
      onOutsideClick:  updateShow, // Callback function to be called on outside click
      active: show, // When to disable the outside click handler, ie. when the modal is closed.
    });

### Modal Example (javascript)
    import  React,  {  useState,  useRef  }
    import useOutsideClick from "react-outside-click-handler"
    
    const  [show,  updateShow]  =  useState(false); // Modal open/close state
    const  modalContainer =  useRef(null); // React ref to be applied to the container element
    
    useOutsideClick({
      element:  modalContainer, // Ref to the container element
      onOutsideClick:  updateShow, // Callback function to be called on outside click
      active: show, // When to disable the outside click handler, ie. when the modal is closed.
    });

