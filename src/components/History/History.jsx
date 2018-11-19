import React, { Component } from 'react';
import {Button, WeatherInfo} from "../../elements";
import './History.css';

export  class History extends Component {
    render () {
        const {history, onClearHistoryClick} = this.props;

        return (
            <div className='History'>
                <h3 className='History__title'>History</h3>
                {Object.keys(history).length !== 0 ?
                    <React.Fragment>
                        {history.map((item,i)=>(
                            <div
                                className='History__item'
                                key={i}
                            >
                                <WeatherInfo
                                    weatherInfo={item}
                                />
                            </div>))}
                            <div className='History__clearButton'>
                                <Button
                                    label='Clear history'
                                    onClick={onClearHistoryClick}
                                />
                            </div>
                    </React.Fragment>
                    :
                    <p className='History__empty'>Empty</p>
                }
            </div>
        );
    };
}