import React, { Component } from 'react';
import {Form,WeatherInfo} from '../../elements';
import './weather.css';

export class Weather extends Component {
    render() {
        const {
            onGetWeather,
            weatherInfo
        } = this.props;
        console.log(weatherInfo);
        
        return (
            <React.Fragment>
                <h2 className='Weather__header'>Weather</h2>
                <div className="Weather__wrapper">
                    <Form
                        onGetWeather={onGetWeather}
                    />
                    {weatherInfo ? <WeatherInfo weatherInfo={weatherInfo}/> : null}
                </div>
                <div className="Weather__wrapper">

                </div>

            </React.Fragment>
        );
    };
}