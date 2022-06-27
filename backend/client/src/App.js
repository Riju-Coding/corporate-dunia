
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import Company from './components/Company';
import About from './components/About';
import Companystate from './context/notes/Companystate';
import LoadingBar from "react-top-loading-bar";
import CompanyIndex from './components/CompanyIndex';

import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';


export default class App extends Component{
  state={
    progress : 0
  }

 setProgress=(progress)=>{
this.setState({progress : progress})

 }
 render(){
  return (
    <Companystate>
    <Router>
    <NavBar/> 
    <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
       
      />
    
    <div className="container">
   <Routes>

  
  <Route exact path="/company" element={ <Company setProgress={this.setProgress} /> } />
  <Route exact path="/about" element={ <About  />} />
   <Route exact path="/companies/:alias" element={ <CompanyIndex/>}/>

 
 

 </Routes>
 </div>
 </Router>
 </Companystate>
  );
 }
  
}


