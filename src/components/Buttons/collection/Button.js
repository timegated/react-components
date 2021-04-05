import React from 'react'
import { ButtonOne }from '../styles/styles';

const Button = ({ bg, color, boxShadow, text }) => {
  
  console.log(bg, color)
  return (
    <>
      <ButtonOne bg={bg} color={color} boxShadow={boxShadow}>{ text }</ButtonOne>
    </>
  )
}

export default Button
