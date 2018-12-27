import React, { Component } from 'react';
import './App.css';
import InfoClima from './components/InfoClima';


const KEY = "52b76b3f52d59070d4fea53f62bc4977";
const URL = "https://api.openweathermap.org/data/2.5";
const CITY = "London";

class App extends Component {

  constructor(){
    super();

    this.state ={
       temperatura: undefined,
       humedad: undefined,
       temp_min:undefined,
       temp_max:undefined,
    };
}

componentDidMount(){
  var url = `${URL}/weather?q=${CITY}&APPID=${KEY}&units=metric`; 
 fetch(url).then(response => response.json())
.then(myJson => {
  this.setState({
    temperatura:myJson.main.temp ,
    humedad: myJson.main.humidity,
    temp_min:myJson.main.temp_min,
    temp_max:myJson.main.temp_max,
  });
} );
}



render(){
 
  return(
    
     <div>
       <p>la temperatura final recogia:{this.state.temperatura}&deg;
 </p>
       <p>la humedad recogia:{this.state.humedad}</p>
       <p>la temperatura min final recogia:{this.state.temp_min}&deg;
</p>
       <p>la temperatura max final recogia:{this.state.temp_max}&deg;
</p>
     </div>
  )
}


}


export default App;
