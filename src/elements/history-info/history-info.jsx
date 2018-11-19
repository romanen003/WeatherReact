import React, { Component } from 'react';
import {object} from 'prop-types';
import './history-info.css';

export class HistoryItem extends Component {
    static propTypes = {
        weatherInfo: object
    };

    render () {
        const {
            weatherInfo
        } = this.props;

        return (
            <div className='HistoryItem'>
                <h3 className="HistoryItem__cityName">
                    <span className='HistoryItem__cityName_span'>City:</span>
                    {weatherInfo.city}
                </h3>
                <p className="HistoryItem__temp">
                    <span className='HistoryItem__citytemp_span'>Temp:</span>
                    {weatherInfo.temp.temp}
                </p>
                <p className="HistoryItem__tempMax">
                    <span className='HistoryItem__citytemp_span'>Max Temp:</span>
                    {weatherInfo.temp.maxtemp}
                </p>
                <p className="HistoryItem__tempMin">
                    <span className='HistoryItem__citytemp_span'>Min Temp:</span>
                    {weatherInfo.temp.mintemp}
                </p>
            </div>
        );
    };
}