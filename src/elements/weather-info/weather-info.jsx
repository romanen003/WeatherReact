import React, { Component } from 'react';
import {object, func} from 'prop-types';
import {getPicWeather} from "../../services";
import './weather-info.css';

export class WeatherInfo extends Component {
    static propTypes = {
        weatherInfo: object,
        handleFavoritesCity: func
    };
    static defaultProps = {
        weatherInfo: {},
        handleFavoritesCity: () => {}
    };


    render () {
        const {
            weatherInfo,
            handleFavoritesCity,
            favorites
        } = this.props;
        const backgroundWeather = getPicWeather(weatherInfo.pic);
        const favoriteStatus = favorites.includes(weatherInfo.city)?
            'Info__favorites Info__favorites_active' :
            'Info__favorites';
        return (
            <div className='Info'>
                <h3 className="Info__cityName">
                    {weatherInfo.city}
                </h3>
                <p className="Info__temp">
                    Temperature:
                    <span className='Info__value'>
                        {weatherInfo.temp}
                    </span>
                </p>
                <p className="Info__temp">
                    Pressure:
                    <span className='Info__value'>
                        {weatherInfo.pressure}
                    </span>
                </p>
                <p className="Info__temp">
                    <span className='Info__value'>
                        {weatherInfo.time}
                    </span>
                </p>
                <p className='Info__temp'>
                    <span className='Info__value'>
                        {weatherInfo.description}
                    </span>
                </p>
                <div className='Info__pic' style={backgroundWeather}></div>
                <div
                    className={favoriteStatus}
                    onClick={()=>{handleFavoritesCity(weatherInfo.city)}}
                ></div>
            </div>
        );
    };
}