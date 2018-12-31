import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {CLOUD , CLOUDY, SUN ,RAIN ,SNOW , WINDY } from './../../constants/weathers';


const KEY = "52b76b3f52d59070d4fea53f62bc4977";
const URL = "https://api.openweathermap.org/data/2.5/weather";
const CITY = "London";
const API_WEATHER =`${URL}?q=${CITY}&APPID=${KEY}&units=metric`;


class WeatherLocation extends Component {

    constructor(){
        super();
        this.state ={
            city: CITY,
            data: null,
        };
    }

    componentDidMount = () => {
      this.handleUpdateClick();
    }
    
    componentDidUpdate = (prevProps, prevState) => {
      
    }
    

    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data =>{
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);

        const data = {
            humidity,
            temperature:temp,
            weatherState,
            wind: `${speed} m/s`,
        }
        
        return data;
    }



    handleUpdateClick = () => {
        fetch( API_WEATHER ).then(resolve =>{
            return resolve.json();
        }).then(data =>{
            const newWeather = this.getData(data);
            this.setState({
                data: newWeather
            });
        });
        
    }

    render (){
        const { city, data } =this.state;

        return(
            <div className="weatherLocationCont">
                <Location city={city}/> 
                { data ? <WeatherData data={data} /> :
                "Cargando..."}
            </div>
        )
    }
}

export default WeatherLocation;