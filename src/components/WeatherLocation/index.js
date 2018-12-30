import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {CLOUD , CLOUDY, SUN ,RAIN ,SNOW , WINDY } from './../../constants/weathers';
import './styles.css';


const data = {
    temperature: 5, 
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

const WeatherLocation = () => (
    <div className="weatherLocationCont">
         <Location city={"Bogota"}/> 
        <WeatherData data={data} />
    </div>
);

export default WeatherLocation;