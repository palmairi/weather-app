const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const getCityWeather = async (city_name) => {
    const response = await fetch(BASE_URL + `weather?q=${city_name}&units=metric&appid=${API_KEY}`);
    return response.json();
}

export const getCityForecast = async (city_name) => {
    const response = await fetch(BASE_URL + `forecast?q=${city_name}&units=metric&appid=${API_KEY}`);
    return response.json();
}

