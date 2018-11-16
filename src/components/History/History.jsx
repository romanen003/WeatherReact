import React, { Component } from 'react';
import {WeatherInfo} from "../../elements";
import './History.css';

export  class History extends Component {
    render () {
        const {history} = this.props;

        return (
            <div className='History'>
                <h3 className='History__title'>History</h3>
                {Object.keys(history).length !== 0 ?
                    history.map((item,i)=>(
                        <div
                            className='History__item'
                            key={i}
                        >
                            <WeatherInfo
                                weatherInfo={item}
                            />
                        </div>))
                    :
                    <p className='History__empty'>Empty</p>
                }
            </div>
        );
    };
}