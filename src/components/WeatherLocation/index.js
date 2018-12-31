import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from './../../services/transformWeather';
import {API_WEATHER} from './../../constants/api_url';

class WeatherLocation extends Component {

    constructor(props){
        super(props);
        const {city} = props;
        this.state ={
            city ,
            data: null,
        };
    }

    componentDidMount = () => {
      this.handleUpdateClick();
    }
  

    handleUpdateClick = () => {
        fetch( API_WEATHER ).then(resolve =>{
            return resolve.json();
        }).then(data =>{
            const newWeather = transformWeather(data);
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
                    <CircularProgress size={50}/>
                    }
            </div>
        )
    }
}

export default WeatherLocation;