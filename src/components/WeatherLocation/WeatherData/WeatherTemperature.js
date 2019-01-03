import React, {Component} from 'react';
import WeatherIcons from 'react-weathericons';
import {THUNDER, DRIZZLE, SUN ,RAIN ,SNOW , WINDY, CLOUDY } from './../../../constants/weathers';
import './styles.css';


const icons ={
    [SUN] : "day-sunny",
    [CLOUDY]: "cloudy",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
    [THUNDER]: "day-thunderstore",
    [DRIZZLE]: "day-showers",
};

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];

    const sizeIcon = "4x";

    if (icon)
            return <WeatherIcons className="wicon"  name ={ icon } size={sizeIcon}/>;
    else
            return <WeatherIcons className="wicon" name ={"day-sunny"} size={sizeIcon}/>;        
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div  className="weatherTemperatureCont">
       {
           getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`Cº`}</span>
    </div>
);

export default WeatherTemperature;