import React, { Component } from 'react';
import {Form,WeatherInfo,Error} from '../../elements';
import {History} from "../History/History";
import {FavoritesContainer} from '../favorites/favorites-container';
import {func, bool, object, array, number} from 'prop-types';
import './weather.css';

export class Weather extends Component {
    static propTypes = {
        handleWeatherButton: func,
        onInputBlur: func,
        onChangeInput: func,
        isNullValue: bool,
        weatherInfo: object,
        errorInfo: object,
        history: array,
        handleKeyUPInput: func,
        onClearHistoryClick: func,
        handleFavoritesCity: func,
        favorits: object
    };

    render() {
        const {
            handleWeatherButton,
            onInputBlur,
            onChangeInput,
            isNullValue,
            weatherInfo,
            errorInfo,
            history,
            handleKeyUPInput,
            handleInputFocus,
            onClearHistoryClick,
            handleFavoritesCity,
            favorites
        } = this.props;
        const showData = Object.keys(weatherInfo).length !== 0 &&
            <WeatherInfo
                weatherInfo={weatherInfo}
                handleFavoritesCity={handleFavoritesCity}
                favorites={favorites}
            />;
        const showError = Object.keys(errorInfo).length !== 0 && <Error errorInfo={errorInfo}/>;

        return (
            <div className='Weather'>
                <h2 className='Weather__header'>Weather</h2>
                <FavoritesContainer
                    favorites={favorites}
                    handleFavoritesCity={handleFavoritesCity}
                />
                <div className="Weather__wrapper Weather__wrapper_form">
                    <div className="Weather__form">
                        <Form
                            onChange={onChangeInput}
                            onInputBlur={onInputBlur}
                            isNullValue={isNullValue}
                            handleWeatherButton={handleWeatherButton}
                            handleKeyUPInput={handleKeyUPInput}
                            handleInputFocus={handleInputFocus}
                        />
                    </div>
                    <div className="Weather__data">
                        {showData}
                        {showError}
                    </div>
                </div>
                <div className="Weather__wrapper Weather__wrapper_history">
                    <div className='Weather__history'>
                        <History
                            history={history}
                            onClearHistoryClick={onClearHistoryClick}
                        />
                    </div>
                </div>
            </div>
        );
    };
}