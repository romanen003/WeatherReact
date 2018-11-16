import React, { Component } from 'react';
import {Form,WeatherInfo,Error} from '../../elements';
import {History} from "../History/History";
import './weather.css';

export class Weather extends Component {
    render() {
        const {
            onGetWeather,
            weatherInfo,
            errorInfo,
            history
        } = this.props;
        const showData = Object.keys(weatherInfo).length !== 0 ? <WeatherInfo weatherInfo={weatherInfo}/> : null;
        const showError = Object.keys(errorInfo).length !== 0 ? <Error errorInfo={errorInfo}/> : null;

        return (
            <div className='Weather'>
                <h2 className='Weather__header'>Weather</h2>
                <div className="Weather__wrapper">
                    <div className="Weather__form">
                        <Form
                            onGetWeather={onGetWeather}
                        />
                    </div>
                    <div className="Weather__data">
                        {showData}
                        {showError}
                    </div>
                </div>
                <div className="Weather__wrapper">
                    <div className='Weather__history'>
                        <History
                            history={history}
                        />
                    </div>
                </div>
            </div>
        );
    };
}