import React from 'react';
import {handleDate} from "../../utils/handleDate";


const MainCard = ({cityWeather, favorites, setFavorites}) => {

    const handleFavoriteClick = ()=>{
        console.log(favorites);

        if(favorites.includes(cityWeather.name)){
            localStorage.setItem('favorites', JSON.stringify(favorites.filter(city => cityWeather.name !== city)));
            return setFavorites( prevState => prevState.filter(city => cityWeather.name !== city))

        }
        localStorage.setItem('favorites', JSON.stringify([...favorites, cityWeather.name]));
        return setFavorites( prevState => [...prevState, cityWeather.name] )

    }


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
            <div>
                Kedvenc: <svg xmlns="http://www.w3.org/2000/svg" fill={favorites.includes(cityWeather.name)? 'red' : 'none' } viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-6 h-6" onClick={handleFavoriteClick}>
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
            </svg>

            </div>
        </div>
    );
};

export default MainCard;