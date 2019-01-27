import React, { Component } from 'react';
import './styles.css';
import ForecastItem from './ForecastItem';
import {KEY, URL, URL_FORECAST} from './../constants/api_url';
import transformForecast from './../services/transformForecast';


class ForecastExtended extends Component {
    
    constructor(){
        super();
        this.state={
            forecastData:null,
        };
    }
    
    componentDidMount = () => {
        this.updateCity(this.props.city);
    }

    componentDidUpdate = prevProps => {
        if(prevProps.city !== this.props.city){
            console.log("prop de ciudad previa",prevProps.city);
            console.log("prop de ciudad actual actualizada en el render",this.props.city);
            this.setState({forecastData:null});
            this.updateCity(this.props.city);//this.props.ciudad es la que vienen al hacer click y se actualiza cuando entra al render
        }
    }
    
    updateCity = city =>{
        const forecast_url=`${URL_FORECAST}?q=${this.props.city}&appid=${KEY}&units=metric`;
        fetch(forecast_url).then(
            data => (data.json())
        ).then( weather_data =>{
            console.log(weather_data);
            const forecastData = transformForecast(weather_data);
            console.log(forecastData);
            this.setState({forecastData});
        });
    }

  
    

    renderForecastItemDays(forecastData) {
     return forecastData.map(forecast => (<ForecastItem 
        key={`${forecast.weekDay}${forecast.hour}`} 
        weekDay={forecast.weekDay} 
        hour={forecast.hour}
        data={forecast.data} />))
    }
    
    renderProgress = () => {
        return <h3>Cargando Pronostico Extendido...</h3>;
    }

    render(){
        const {city} = this.props;
        const {forecastData}=this.state;
        return(
            <div>
               <h3 className="forecast-title"> Pronóstico Extendido para {city} </h3>
                {forecastData ? 
                this.renderForecastItemDays(forecastData):
                this.renderProgress()}
            </div>
        );
    }
}

export default ForecastExtended;
