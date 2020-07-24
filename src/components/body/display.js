import React from "react";
import Test from "../images/Test.jpg"

class Display extends React.Component{

    renderCameras = () =>{
        console.log(this.props.images)
        // const t = [1,23,4]
        // return t.map((results, index) =>
        // <div className = "displayImage">
        //     <img className = "images" />
        //     <div></div>
        // </div>
        // )
    }

    render(){
        return(
            <div className="display">
                {/*
                <div className = "displayImage">
                    <img className = "images" src = {Test}/>
                    <div>Description</div>
                </div>
                <div className = "displayImage">
                    <img className = "images" src = {Test}/>
                    <div>Description</div>
                </div>
                <div className = "displayImage">
                    <img className = "images" src = {Test}/>
                    <div>Description</div>
                </div>
                <div className = "displayImage">
                    <img className = "images" src = {Test}/>
                    <div>Description</div>
                </div>
                <div className = "displayImage">
                    <img className = "images" src = {Test}/>
                    <div>Description</div>
                </div>
                <div className = "displayImage">
                    <img className = "images" src = {Test}/>
                    <div>Description</div>
                </div>*/}
                {this.renderCameras(this.props.cameras)}
            </div>
        )
    }
}

export default Display;