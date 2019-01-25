import React, { Component } from 'react';
import './styles.css';
import ForecastItem from './ForecastItem';

class ForecastExtended extends Component {
    
    render(){
        const {city} = this.props;
        return(
            <div>
               <h2 className="forecast-title"> Pronóstico Extendido para {city} </h2>
               <ForecastItem/>
            </div>
        );
    }
}

export default ForecastExtended;
