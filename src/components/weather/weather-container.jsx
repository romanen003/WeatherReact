import React, { Component } from 'react';
import {Weather} from "./weather";

const API_KEY = '1ccb4c4ad6f36ab9aa776590f12471bf';

export class WeatherContainer extends Component {
    state = {
        history: [],
        currentCity: {}
    };

    getWeather  = (city) => {
        const promise =  new Promise(function(resolve, reject) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
                .then(r => r.json())
                .then(data => resolve(data))
                .catch(e => reject(e));
        });
        promise.then((data)=> {
            console.log(data);
            const dataWeather = {
                city: data.name,
                temp: {
                    temp: data.main.temp,
                    mintemp: data.main.temp_min,
                    maxtemp: data.main.temp_max
                }

            };
            console.log(dataWeather);
           this.setState({
               history: [...this.state.history].concat(dataWeather)
           });
        });
    };

    render() {
        const {
            history
        } = this.state;

        return (
            <Weather
                onGetWeather={this.getWeather}
                weatherInfo={history[history.length - 1]}
            />
        );
    };
}