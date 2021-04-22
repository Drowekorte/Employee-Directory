import React from 'react'
import "./style.css"; 

function Header(props) {
    return (
      <h1 className="header">Employee Directory{props.example} </h1>
    )
}

export default Header
