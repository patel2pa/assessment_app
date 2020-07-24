import React from 'react';
import "./App.css";
import Main from "./components/Main/Main"
import Header from "./components/header/header"
import Pi from "./components/pi/pi"
import { Route, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';


class App extends React.Component{
  render(){
  return (
    <BrowserRouter>
        <Header/>
        <Route path="/" exact component={Main} />
        <Route path="/pi" component={Pi} />
    </BrowserRouter>
  );
}}

export default App;
