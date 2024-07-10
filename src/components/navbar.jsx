import "../styles/navbar.css"
import logo from "/logoJose.png"
import { useState } from "react"

export const Navbar = () => {
    const [show, setShow] = useState(true)
    const showToggle = ()=>{
        setShow(!show)
    }
  return (
    <>
    
    <div className="nav-container">

     <div className="nav-content">

        <div className="logo">
            <img src={logo} />
            <span>JOSE</span>
        </div>
        <ul className={show ? "ul-items": "ul-items active"}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li> 
            <select className="languaje-buton">
            <option type='button'>Es</option>
            <option type='button'>en</option>
            </select>
        </ul>

        <div onClick={showToggle} className= {show ? "fa-solid fa-bars  " :"fa-solid fa-xmark"}>

        </div>
     </div>

    </div>
    
    </>
  )
}
