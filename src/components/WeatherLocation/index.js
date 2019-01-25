import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from './../../services/transformWeather';

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
        const API_WEATHER = getUrlWeatherByCity(this.state.city);
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
        const {onWeatherLocationClick}=this.props;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                <Location city={city}/>  
                { data ? <WeatherData data={data} /> :
                    <CircularProgress size={50}/>
                    }
            </div>
        )
    }
}

export default WeatherLocation;