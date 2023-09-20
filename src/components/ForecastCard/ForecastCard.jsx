import React from 'react';
import {handleDate} from "../../utils/handleDate";

const ForecastCard = ({forecastData, timezone}) => {
    return (
        <div className={'flex flex-col items-center px-3 py-5 bg-lime-600 text-white rounded-xl'}>
                {forecastData.main.temp}°C
                <img src={`http://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`} alt=""/>
            {handleDate(forecastData.dt, timezone)}
        </div>
    );
};

export default ForecastCard;