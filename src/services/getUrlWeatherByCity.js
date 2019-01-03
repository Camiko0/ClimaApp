import {API_WEATHER} from './../constants/api_url';
import {KEY, URL} from './../constants/api_url';


const getUrlWeatherByCity = city =>{
    return `${URL}?q=${city}&APPID=${KEY}&units=metric`;
}

export default getUrlWeatherByCity;