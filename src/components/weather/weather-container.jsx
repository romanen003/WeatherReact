import React, { Component } from 'react';
import {Weather} from "./weather";
import {} from 'prop-types';
import {getWeatherData} from "../../services";

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

    handleWeatherButton  = async () => {
        const {history,inputsValue} = this.state;

        if (inputsValue.length === 0 ) {
            this.setState({
                isNullValue: true
            });
            return;
        }
        const result = await getWeatherData(inputsValue);
        console.log (result);
        if (result.city) {
            this.setState(() => ({
                currentCity: result,
                history: [...history].concat(result),
                error: {}
            }));
        }else{
            this.setState(() => ({
                error: result,
                currentCity: {}
            }));
        }
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