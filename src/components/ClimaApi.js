import React, { Component } from 'react';


const KEY = "52b76b3f52d59070d4fea53f62bc4977";
const URL = "https://api.openweathermap.org/data/2.5";
const CITY = "London";

class ClimaApi extends Component {

constructor(){
    super();

    this.state ={
        datos : [],
    };
}

componentDidMount(){
    var url = `${URL}/weather?q=${CITY}&APPID=${KEY}&units=metric`; 
   fetch(url).then(response => response.json())
  .then(myJson => {
    this.setState({datos:myJson.main.temp});
    //console.log("nuevos datos son:",myJson.main.temp) ;
    console.log(this.state.datos);
  } );
  }


render(){
 
    return(
      
       <div>la temperatura en {CITY} es:  {this.state.datos}</div>
    //  </div>
    )
}


}

export default ClimaApi;