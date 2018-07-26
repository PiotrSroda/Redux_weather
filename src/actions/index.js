import axios from 'axios';

const API_KEY = 'e211e9a5700c045b1297474897c82234';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; //ES6 syntax appid=${API_KEY} ( instead ',,,,' + API_KEY


export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},pol`;
  const request = axios.get(url);

  
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
