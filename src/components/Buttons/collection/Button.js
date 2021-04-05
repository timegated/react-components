import React from 'react'
import { ButtonOne }from '../styles/styles';

const Button = ({ bg, color, boxShadow, fontSize, text }) => {
  
  console.log(bg, color)
  return (
    <>
      <ButtonOne
        bg={bg}
        color={color}
        boxShadow={boxShadow}
        fontSize={fontSize}
      >
        {text}
      </ButtonOne>
    </>
  )
}

export default Button
