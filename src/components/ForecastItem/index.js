import React from 'react';
import WeatherData from '../WeatherLocation/WeatherData';


const ForecastItem = ({weekDay,hour,data}) =>(
    <div>
        <div className="text-capitalize"><h4>{weekDay} - {hour} hs </h4></div>
        <WeatherData data={data}/>
    </div>
    
    
);

export default ForecastItem;
