import React from 'react';
import Frames from '../body/frames';
import "./main.css"

class Main extends React.Component{

  state = {
    activeCameras:[], //will contain available cameras  
    images:[], //will contain frames 
    cameraDescription:[], //will contain frame description
  }

  /*
  react's built in method, is invoked before the DOM gets render,
  used to set session and get camera frames through fetch request
  */
  componentWillMount = () =>{
    /*
      setSession gets called which returns sid
      that get passed down to getCameras 
      which returns available cameras,
      the return from getCameras is set to
      activeCameras in the state object.
      The getImageUrls gets called 
      in the interval of 5 second
    */
    this.setSession().then((data)=>{
      return this.getCameras(data);
    })
    .then(data => this.setState({activeCameras:data['cameras']}))
    .then(()=>{this.getImageUrls();
      this.timer = setInterval(()=>this.getImageUrls(),5000)
    })
  }


  /*
  used to send user credentials and get sid 
  */
  setSession = () =>{
    return new Promise((resolve, reject)=>{
      fetch("https://orchid.ipconfigure.com/service/sessions/user",
        {method:'POST', 
        credentials: 'include',
        body:JSON.stringify({  
        "username": "liveviewer",
        "password": "tpain",
        "expiresIn": 2592000,
        "cookie": "session"})}
      )
      .then(response =>{return response.json();})
      .then(data => {resolve(data);})
      .catch(err => {reject(err);})
    })
  }

  /*
  used to get the available cameras
  */
  getCameras = (sid) => {
    return new Promise((resolve, reject) =>{
      fetch(`https://orchid.ipconfigure.com/service/cameras?sid${sid['id']}`,
      {credentials:'include'})
      .then(response =>{return response.json();})
      .then(data => {resolve(data);})
      .catch(err => {reject(err);})
    })
  }

  /*
  get the image frame for the cameras,
  get called each 5 seconds  
  */
  getImageUrls = () =>{
    if(this.state.activeCameras !== undefined){
    let imageFrames = [];
    let cameraName = []; 
    this.state.activeCameras.map((cameraInfo) =>{
      imageFrames.push(fetch(`https://orchid.ipconfigure.com/service/streams/${cameraInfo['primaryStream']['id']}/frame`, 
      {credentials:'include'})) 
      cameraName.push(cameraInfo['name'])
      }
    )
    this.setState({cameraDescription:cameraName})
    this.getImage(imageFrames)
    }
  }

  /*
  gets called in the getImageUrls function,
  the input is array of fetch requests,
  which get called in a promise that fetch
  the frame of each cameras,
  this get class each 5 seconds and each time
  this method updates the current frame with 
  the new one
  */
  getImage = (imageFrames) => {
    Promise.all(imageFrames).then((responses) => {
      Promise.all(responses.map((response, index) =>{
      response.blob().then(data => {
        let image = URL.createObjectURL(data);
        let images = [...this.state.images];
        images[index] = image
          this.setState({images})
          })
        })
      );
      }
    )
  }

  render(){
  return (
      <div>
        {/* 
          the frames of cameras and camera description gets passed down to
          the Frames component as a prop
        */}
        <Frames images = {this.state.images} cameraDescription = {this.state.cameraDescription}/>
      </div>
  );
}}

export default Main;
