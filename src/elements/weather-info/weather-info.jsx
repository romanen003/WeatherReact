import React, { Component } from 'react';
import {object} from 'prop-types';
import './weather-info.css';

export class WeatherInfo extends Component {
    static propTypes = {
        weatherInfo: object
    };

    render () {
        const {
            weatherInfo
        } = this.props;

        return (
            <div className='Info'>
                <h3 className="Info__cityName">
                    {weatherInfo.city}
                </h3>
                <p className="Info__temp">
                    <span className='Info__citytemp_span'>Temperature:</span>
                    {weatherInfo.temp.temp}
                </p>
                <p className="Info__tempMax">
                    <span className='Info__citytemp_span'>Max:</span>
                    {weatherInfo.temp.maxtemp}
                </p>
                <p className="Info__tempMin">
                    <span className='Info__citytemp_span'>Min:</span>
                    {weatherInfo.temp.mintemp}
                </p>
            </div>
        );
    };
}