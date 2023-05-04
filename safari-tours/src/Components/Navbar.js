import React from "react"
import "./header.css"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
const Navbar = () =>{
  return(
      <div className="Navbar">
        <div>
          <img src={logo} alt="logo"/>
        </div>
        <div className="list">
        <Link to="/">Home</Link>
        <Link to ="Tours">Tours</Link>
        <Link to="/">price</Link>
        </div>
      </div>
  )
}

export default Navbar;