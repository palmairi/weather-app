import './App.css';
import React, {useEffect, useState} from "react";
import {getCityForecast, getCityWeather} from "./services/api.services";
import MainCard from "./components/MainCard/MainCard";
import ForecastCard from "./components/ForecastCard/ForecastCard";
import InputText from "./components/Form/InputText";
import Button from "./components/Form/Button";

const App = () => {

    const [cityWeather, setCityWeather] = useState(null);
    const [searchCity, setSearchCity] = useState('');
    const [cityForForecast, setCityForForecast] = useState('');
    const [searchCityForecast, setSearchCityForecast] = useState(null);
    const [hourlyForecast, setHourlyForecast] = useState('3');
    const [favoriteCities, setFavoriteCities] = useState(JSON.parse(localStorage.getItem('favorites')) ?? []);


    const getNewCityWeather = () => {
        if(searchCity === ""){
            return;
        }

        getCityWeather(searchCity).then(response => {
            setCityWeather(response)
        }).catch(error => {
            console.log(error)
        });
    }

    const getNewCityForecast = () => {

        getCityForecast(cityForForecast).then(r => {
            setSearchCityForecast(r)
        })

    }

    const getForecastList = (items) => {
        if (searchCityForecast) {
            let list = [];
            for (let i = 0; i < items; i++) {
                list.push(<ForecastCard key={searchCityForecast?.list[i].dt} forecastData={searchCityForecast?.list[i]}
                                        timezone={searchCityForecast.city.timezone}/>)
            }
            return list
        }

    }

    const showCityData = (city) => {
        getCityWeather(city).then(r => {
            setCityWeather(r)
        }).catch(error =>{
            console.log(error)
        });

        getCityForecast(city).then(r =>{
            setSearchCityForecast(r)
        }).catch(error => {
            console.log(error)
        })

    }

    useEffect(() => {
        getCityWeather('Budapest').then(r => {
            setCityWeather(r)
        }).catch(error => {
            console.log(error)
        });
        getCityForecast('Budapest').then(r => {
            setSearchCityForecast(r)
        })
    }, [])


    return (
        <div className="App">
            <div className={"container mx-auto px-4"}>
                <h1 className={"font-bold text-lime-600 text-center text-3xl border-b-2 border-lime-600 pb-1 mb-4"}>Időjárás App</h1>
                <div className={"flex flex-col md:flex-row items-center justify-center gap-4 mb-4"}>
                    <InputText value={searchCity} label={"Keresett városnév: "} setValue={setSearchCity}/>
                    <Button label={"Keresés"} click={getNewCityWeather}/>
                </div>
            {cityWeather && <MainCard cityWeather={cityWeather} favorites={favoriteCities} setFavorites={setFavoriteCities}/>}


            <div className={"flex flex-col items-center mb-4"}>
                <div className={"flex flex-col md:flex-row gap-4 items-center mb-4"}>
                    <InputText value={cityForForecast} label={"Előrejelzés városhoz: "} setValue={setCityForForecast}/>
                    <Button label={"Keresés"} click={getNewCityForecast}/>
                </div>

                <div className={"flex items-center gap-4 mb-4"}>
                    <p className={"font-bold text-gray-600"}>Előrejelzett időtartam órában:</p>
                <select value={hourlyForecast} onChange={event => {
                    setHourlyForecast(event.target.value)
                }}>
                    <option value="0" hidden={true} disabled={true}>-- válassz egyet --</option>
                    <option value="1">3</option>
                    <option value="2">6</option>
                    <option value="3">9</option>
                    <option value="4">12</option>
                    <option value="5">15</option>
                </select>
                </div>
                <p className={"font-bold text-2xl text-lime-700 mb-4"}>{searchCityForecast?.city.name}</p>

                <div className={'container mx-auto flex flex-col md:flex-row justify-center gap-5'}>
                    {getForecastList(parseInt(hourlyForecast))}
                </div>
            </div>

            <div className={"flex justify-center"}>
                {favoriteCities &&
                    <div>
                        <h2 className={"text-xl font-bold text-lime-600 mb-4"}>Kedvenc városaim:</h2>
                        <div className={"flex flex-col justify-center items-center md:flex-row gap-2"}>
                        {favoriteCities?.map(city =>
                            <div key={city}>
                                <div className={"bg-lime-700 w-fit py-1 px-2.5 text-white font-semibold rounded-full hover:bg-lime-600 cursor-pointer"}
                                     onClick={ ()=> showCityData(city) }>
                                    {city}
                                </div>
                            </div>)}
                        </div>
                    </div> }
            </div>

            </div>
        </div>
    );
}

export default App;
