import React, { Component } from 'react';
import {Button} from "..";
import {object, func, bool} from 'prop-types';
import './history-info.css';
import {getPicWeather} from "../../services";

export class HistoryItem extends Component {
    static propTypes = {
        weatherInfo: object,
        handleShowButton: func
    };

    render () {
        const {
            weatherInfo,
            showMore,
            handleShowButton
        } = this.props;
        const backgroundWeather = getPicWeather(weatherInfo.pic);

        return (
            <div className='HistoryItem'>
                <div className='HistoryItem__button'>
                    <Button
                        className='button button_history'
                        label={showMore ? 'hide more' : 'show more'}
                        onClick={handleShowButton}
                    />
                </div>
                <div className="HistoryItem__cityName">
                    <span className='HistoryItem__cityName_span'>
                        {weatherInfo.city}
                        </span>
                </div>
                {showMore &&
                    <div className='History__more'>
                        <div className='History__arrow'></div>
                        <p className="History__param History__param_temp">
                            <span className='History__paramName'>Temperature:</span>
                            <span className='Info__value'>
                                {weatherInfo.temp}
                            </span>
                        </p>
                        <p className="History__param History__param_pressure">
                            <span className='History__paramName'>Pressure:</span>
                            <span className='Info__value'>
                                {weatherInfo.pressure}
                            </span>
                        </p>
                        <div
                            style={backgroundWeather}
                            className='History__param History__param_pic'
                        >
                        </div>
                        <p className='History__param'>
                            <span className='Info__value'>
                                {weatherInfo.description}
                            </span>
                        </p>
                        <p className="History__param">
                            <span className='Info__value'>
                                {weatherInfo.time}
                            </span>
                        </p>
                    </div>
                }
            </div>
        );
    };
}