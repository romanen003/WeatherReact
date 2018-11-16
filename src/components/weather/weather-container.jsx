import React, { Component } from 'react';
import {Weather} from "./weather";

const API_KEY = '1ccb4c4ad6f36ab9aa776590f12471bf';

export class WeatherContainer extends Component {
    state = {
        history: [],
        currentCity: {},
        error: {}
    };

    getWeather  = (city) => {
        const {history} = this.state;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then((response) => {
                    if (response.status !== 200) {
                        this.showError(response);
                        return;
                    }
                    response.json()
            .then((data) => {
                const dataWeather = {
                    city: data.name,
                    temp: {
                        temp: data.main.temp,
                        mintemp: data.main.temp_min,
                        maxtemp: data.main.temp_max
                    }
                };

                this.setState(() => ({
                        currentCity: dataWeather,
                        history: [...history].concat(dataWeather),
                        error: {}
                    }));
                });
            })
            .catch((err) => {
                this.showError(err);
            });
    };

    showError = (response) => {
        const dataError = {
            code: response.status,
            text: response.statusText
        };

        this.setState(() => ({
            error: dataError,
            currentCity: {}
        }));
    };

    render() {
        const {
            history,
            currentCity,
            error
        } = this.state;

        return (
            <Weather
                onGetWeather={this.getWeather}
                weatherInfo={currentCity}
                history={history}
                errorInfo={error}
            />
        );
    };
}