import React from "react";
import "./header.css";
import headerImage from "./images/security-camera.png";
class Header extends React.Component{

    render(){
        return(
            <header>
                <div className="top-nav container">
                    <img className="headerImg" src={headerImage}/>
                    <div className="name"> Assessment App</div>              
                </div>
        </header>
        )
    }}

export default Header;