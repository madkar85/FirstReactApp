import React from 'react'
import './GreetUser.css'

export const GreetUser = (props) => {
    const showAlert = () => {
        alert ("You've clicked me!") 
    }

    return (       
        <div className="greetuser">
            <h1 className="greetuser__header" onClick = {() => showAlert()} >
                Welcome to my website, {props.name}!
            </h1>
            <p className="error">I am {props.age} years old</p>
        </div>
     
    )
}