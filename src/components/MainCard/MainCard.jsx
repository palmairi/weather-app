import React from 'react';
import {handleDate} from "../../utils/handleDate";

const MainCard = ({cityWeather}) => {
    return (
        <div className={'container mx-auto bg-gray-50 p-4 border-2 border-gray-400 rounded-xl'}>
            <div>
                {cityWeather.name}
            </div>
            <div>
                 <img src={`http://openweathermap.org/img/wn/${cityWeather?.weather[0].icon}@2x.png`} alt=""/>
            </div>
            <div>
                {cityWeather.weather[0].description}
            </div>
            <div>
                frissítés dátuma: {handleDate(cityWeather.dt, cityWeather.timezone)}
            </div>
            <div>
                {cityWeather.main.temp}°C
            </div>
            <div>
                feel like: {cityWeather.main.feels_like}
            </div>
            <div>
                humidity: {cityWeather.main.humidity}%
            </div>
        </div>
    );
};

export default MainCard;