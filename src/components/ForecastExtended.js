import React, { Component } from 'react';
import './styles.css';
import ForecastItem from './ForecastItem';
import {KEY, URL, URL_FORECAST} from './../constants/api_url';
import transformForecast from './../services/transformForecast';

/*const days =["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

const data={
    temperature: 10,
    humidity: 5,
    weatherState: 'normal',
    wind: 'normal',
}; */

class ForecastExtended extends Component {
    
    constructor(){
        super();
        this.state={
            forecastData:null,
        };
    }
    
    componentDidMount = () => {
      const forecast_url=`${URL_FORECAST}?q=${this.props.city}&appid=${KEY}`;
      fetch(forecast_url).then(
          data => (data.json())
      ).then( weather_data =>{
          console.log(weather_data);
          const forecastData = transformForecast(weather_data);
          console.log(forecastData);
          this.setState({forecastData});
      });
    }
    

    renderForecastItemDays() {
      //  days.map(day => (<ForecastItem key={day} weekDay={day} hour={10} data={data} />))
    }
    
    renderProgress = () => {
        return <h3>Cargando Pronostico Extendido...</h3>;
    }

    render(){
        const {city} = this.props;
        const {forecastData}=this.state;
        return(
            <div>
               <h2 className="forecast-title"> Pronóstico Extendido para {city} </h2>
                {forecastData ? 
                this.renderForecastItemDays():
                this.renderProgress()}
            </div>
        );
    }
}

export default ForecastExtended;
