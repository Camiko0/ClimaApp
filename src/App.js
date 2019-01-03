import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';




class App extends Component {

  constructor(){
    super();
  }
   


  

render(){
 
  return(
    <div className="container">
        <LocationList/>
    </div>
  )
}


}


export default App;
