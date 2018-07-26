import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Chart2 from '../components/chart2';
import GoogleMap from'../components/google_map';


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => (weather.main.temp - 273.15).toFixed(2))
    const pressures = cityData.list.map (weather => weather.main.pressure);
    const humidities = cityData.list.map (weather => weather.main.humidity);
    //const lon = cityData.city.coord.lon;without ES6
    //const lat = cityData.city.coord.lat;without ES6
    const { lon, lat } = cityData.city.coord // WITH ES6

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} data3={humidities}/></td>
        <td><Chart2 data2={pressures} /></td>          
      </tr>
    )
  }
  render () {
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Miasto</th>
              <th>Temp/Wilg</th>
              <th>Cisnienie</th>                 
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      )
  }
}

// function mapStateToProps(state){ THIS IS WITHOUT ES6
//  return {weather: state.weather} THIS IS WITHOUT ES6
//}                                 THIS IS WITHOUT ES6

function mapStateToProps({weather}){
return { weather }; // { weather } ==== return {weather: state.weather}
}

export default connect (mapStateToProps)(WeatherList);
