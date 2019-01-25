import React, { Component } from 'react';
import './styles.css';
import ForecastItem from './ForecastItem';

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
    
    renderForecastItemDays() {
        return "render items";
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
