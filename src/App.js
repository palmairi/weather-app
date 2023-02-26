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


    const getNewCityWeather = () => {
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
                list.push(<ForecastCard forecastData={searchCityForecast?.list[i]}
                                        timezone={searchCityForecast.city.timezone}/>)
            }
            return list
        }

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

            <InputText value={searchCity} label={"Keresett városnév"} setValue={setSearchCity}/>
            <Button label={"Keresés"} click={getNewCityWeather}/>
            {cityWeather && <MainCard cityWeather={cityWeather}/>}


            <div>

                <InputText value={cityForForecast} label={"Előrejelzés a városhoz:"} setValue={setCityForForecast}/>
                <p>{searchCityForecast.city.name}</p>
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
                <Button label={"Keresés"} click={getNewCityForecast}/>
                <div className={'container mx-auto flex justify-center gap-5'}>
                    {getForecastList(parseInt(hourlyForecast))}
                </div>
            </div>

        </div>
    );
}

export default App;
