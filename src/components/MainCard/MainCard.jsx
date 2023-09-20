import React from 'react';
import {handleDate} from "../../utils/handleDate";


const MainCard = ({cityWeather, favorites, setFavorites}) => {

    const handleFavoriteClick = ()=>{

        let favoriteCities;
        if(favorites.includes(cityWeather.name)) {
            favoriteCities = favorites.filter(city => cityWeather.name !== city);
        }else {
            favoriteCities = [...favorites, cityWeather.name];
        }
        localStorage.setItem('favorites', JSON.stringify(favoriteCities));
        return setFavorites(favoriteCities);
    }


    return (
        <div className={"flex justify-center mb-4"}>
        <div className={'md:w-1/3 bg-white p-4 shadow shadow-lime-600 rounded-xl flex flex-col items-center'}>
            <div className={"font-bold text-2xl text-lime-700"}>
                {cityWeather.name}
            </div>
            <div>
                 <img src={`http://openweathermap.org/img/wn/${cityWeather?.weather[0].icon}@2x.png`} alt=""/>
            </div>
            <div>
                Jellemző: {cityWeather.weather[0].description}
            </div>
            <div>
                Frissítés dátuma: {handleDate(cityWeather.dt, cityWeather.timezone)}
            </div>
            <div>
                Hőmérséklet: {cityWeather.main.temp}°C
            </div>
            <div>
                Hőérzet: {cityWeather.main.feels_like} °C
            </div>
            <div>
                Páratartalom: {cityWeather.main.humidity}%
            </div>
            <div className={"flex items-center gap-4"}>
                Kedvencek: <svg xmlns="http://www.w3.org/2000/svg" fill={favorites.includes(cityWeather.name) ? 'red' : 'none' } viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-6 h-6" onClick={handleFavoriteClick}>
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
            </svg>

            </div>
        </div>
        </div>
    );
};

export default MainCard;