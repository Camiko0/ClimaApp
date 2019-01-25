import React from 'react';
import WeatherData from '../WeatherLocation/WeatherData';


const ForecastItem = ({weekDay,hour,data}) =>(
    <div>
        <div>{weekDay} Hora: {hour} hs </div>
        <WeatherData data={data}/>
    </div>
    
    
);

export default ForecastItem;
