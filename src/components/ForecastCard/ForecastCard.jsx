import React from 'react';
import {handleDate} from "../../utils/handleDate";

const ForecastCard = ({forecastData, timezone}) => {
    return (
        <div className={'px-3 py-5 bg-rose-200 text-rose-400 rounded-xl'}>
                {forecastData.main.temp}°C
                <img src={`http://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`} alt=""/>
            {handleDate(forecastData.dt, timezone)}
        </div>
    );
};

export default ForecastCard;