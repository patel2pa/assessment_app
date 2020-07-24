import React from "react";

//class used to render the frames of the cameras

class Frames extends React.Component{

    /*
    used to get current time 
    */
    getTime = () =>{
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        return time
    }

    /*
    used to render the frames,
    this.props.images gets passed down as a props
    which contains the frames that are being rendered,
    this method iterates through the array and renders the frames,
    get invoked in the return statement of this app  
    */
    renderCameras = () =>{
        if(this.props.images !== undefined){
            return this.props.images.map((results, index) =>(
                <div className = "displayImage">
                    <img className = "images" src={results} />
                    <div>{this.props.cameraDescription[index]} {this.getTime()}</div>
                </div>
            )
        )}
        else{
            return <div className = "displayImage">
                    Loading ...
                    </div>
        }
    }


    render(){
        return(
            <div className="Main">
                {this.renderCameras()}
            </div>
        )
    }
}

export default Frames;