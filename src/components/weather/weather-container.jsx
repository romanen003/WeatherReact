import React, { Component } from 'react';
import {Weather} from "./weather";
import {} from 'prop-types';
import {getWeatherData} from "../../services";

const API_KEY = '1ccb4c4ad6f36ab9aa776590f12471bf';

export class WeatherContainer extends Component {
    static propTypes = {};
    static defaultProps = {};

    state = {
        inputsValue: '',
        isNullValue: false,
        history: [],
        currentCity: {},
        error: {},
        showMore: -1
    };

    onChangeInput = (value,event) => {
        this.setState({
            inputsValue: value,
            isNullValue: value.length === 0
        });

    };

    handleKeyUPInput = (event) => {
        if (event.keyCode === 13) {
            this.handleWeatherButton()
        }
    };

    onInputBlur = () => {
        this.setState({
            isNullValue: this.state.inputsValue.length === 0
        });
    };

    handleInputFocus = () => {
        this.setState({
            isNullValue: false
        });
    };

    handleWeatherButton  = () => {
        const {history,inputsValue} = this.state;

        if (inputsValue.length === 0 ) {
            this.setState({
                isNullValue: true
            });
            return;
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputsValue}&appid=${API_KEY}&units=metric`)
            .then((response) => {
                    if (response.status !== 200) {
                        this.showError(response);
                        return;
                    }
                    response.json()
            .then((data) => {
                console.log(data);
                const dataWeather = {
                    city: data.name,
                    pressure: data.main.pressure,
                    description:data.weather[0].description ,
                    temp: data.main.temp,
                    time: new Date().toLocaleString(),
                    pic: data.weather[0].icon
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

    onClearHistoryClick = () => {
        this.setState({
            history: []
        });
    };

    handleShowButton = (i) => {
        this.setState({
            showMore: i === this.state.showMore ? -1 : i
        });
    };

    render() {
        const {
            history,
            currentCity,
            error,
            isNullValue,
            showMore
        } = this.state;

        return (
            <Weather
                onChangeInput={this.onChangeInput}
                onInputBlur={this.onInputBlur}
                handleWeatherButton={this.handleWeatherButton}
                isNullValue={isNullValue}
                weatherInfo={currentCity}
                showError={error}
                history={history}
                errorInfo={error}
                handleKeyUPInput={this.handleKeyUPInput}
                handleInputFocus={this.handleInputFocus}
                onClearHistoryClick={this.onClearHistoryClick}
                showMore={showMore}
                handleShowButton={this.handleShowButton}
            />
        );
    };
}