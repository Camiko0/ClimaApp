import React, { Component } from 'react';
import './App.css';
import WeatherLocation from './components/WeatherLocation';




class App extends Component {

  constructor(){
    super();
  }
   


  

render(){
 
  return(
    <div className="container">
        <WeatherLocation city="London"/>
    </div>
  )
}


}


export default App;
