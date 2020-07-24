import React from "react";
import Image from "../images/Test.jpg";

class Menu extends React.Component{

    render(){
        return(
            <div className = "menu">
                <div className="menuDisplay">
                    <img className="menuImage" src = {Image}/>
                    <div>
                        Caption
                    </div>
                </div>
                <div className="menuDisplay"> 
                    <img className="menuImage" src = {Image}/>
                    <div>
                        Caption
                    </div>
                </div>
                <div className="menuDisplay"> 
                    <img className="menuImage" src = {Image}/>
                    <div>
                        Caption
                    </div>
                </div>
                <div className="menuDisplay"> 
                    <img className="menuImage" src = {Image}/>
                    <div>
                        Caption
                    </div>
                </div>              
                
            </div>
        )
    }
}

export default Menu;