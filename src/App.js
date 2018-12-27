import React, { Component } from 'react';
import './App.css';
import ClimaApi from './components/ClimaApi';


class App extends Component {
  render() {
    return (
      <div className="App">
       
        <ClimaApi/>
        
      </div>
    );
  }
}

export default App;
