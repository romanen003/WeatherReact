import React, { Component } from 'react';
import './weather-info.css';

export class WeatherInfo extends Component {
    render () {
        const {
            weatherInfo
        } = this.props;

        return (

            <div className='Info'>
                <h3 className="Info__cityName">
                    <span className='Info__cityName_span'>City:</span>
                              {weatherInfo.city}
                </h3>
                <p className="Info__temp">
                    <span className='Info__citytemp_span'>Temp:</span>
                    {weatherInfo.temp.temp}
                </p>
                <p className="Info__tempMax">
                    <span className='Info__citytemp_span'>Max Temp:</span>
                    {weatherInfo.temp.maxtemp}
                </p>
                <p className="Info__tempMin">
                    <span className='Info__citytemp_span'>Min Temp:</span>
                    {weatherInfo.temp.mintemp}
                </p>
            </div>
        );
    };
}