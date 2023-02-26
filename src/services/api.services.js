const API_KEY = '91ce09b20bde8e33c9237ca8ca0a59b3';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const getCityWeather = async (city_name) => {
    const response = await fetch(BASE_URL + `weather?q=${city_name}&units=metric&appid=${API_KEY}`);
    return response.json();
}

export const getCityForecast = async (city_name) => {
    const response = await fetch(BASE_URL + `forecast?q=${city_name}&units=metric&appid=${API_KEY}`);
    return response.json();
}

