import React from "react"
import "./ErrorButton.css"

export const ErrorButton = (props) => {
    return(

        <button className ="btn__error">
            {props.children} An error has occured
            </button>
    ) 
};