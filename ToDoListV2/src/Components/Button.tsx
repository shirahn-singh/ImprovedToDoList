//Handles button components 
import React from 'react'
import "../App.css";

interface ButtonProp {
    text: string; 
    onButtonTask: () => void; 
}

const Button = ({text, onButtonTask}: ButtonProp) => {
  return (
    <button  type="button"
    className="button-padding"
    onClick={onButtonTask}>
    {text}
    </button>
  )
}

export default Button