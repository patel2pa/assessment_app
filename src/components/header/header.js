import React from "react";
import { Link } from 'react-router-dom';
import "./header.css";
import headerImage from "../images/security-camera.png";
class Header extends React.Component{

    render(){
        return(
            <header>
                <div className="top-nav">
                    <div className= "container">
                        <img className="headerImg" src={headerImage}/>
                        <div className="name"> Assessment App</div>              
                    </div>
                    <div className = "link" >
                        <Link style = {{textDecoration: 'none', color: 'white', marginRight:'20px'}} to="/">Home</Link>            
                        <Link style = {{textDecoration: 'none', color: 'white'}} to="/pi">Pi</Link>
                    </div>
                </div>
            </header>
        )
    }}

export default Header;