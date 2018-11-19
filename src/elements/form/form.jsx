import React, { Component } from 'react';
import {func, bool, string} from 'prop-types';
import {Button} from "..";
import './form.css';

export class Form extends Component {
    static propTypes = {
        onInputBlur: func,
        handleWeatherButton: func,
        isNullValue: bool,
        typeInput: string,
        handleKeyUPInput: func
    };
    static defaultProps = {
        typeInput: 'text',
        placeholder: 'Enter city'
    };

    state ={
        city: ''
    };

    onChangeInput = (event) => {
        this.setState({
            city: event.target.value
        },() => {
            this.props.onChange(this.state.city,event)
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        const {
            onInputBlur,
            handleWeatherButton,
            isNullValue,
            typeInput,
            handleKeyUPInput,
            placeholder,
            handleInputFocus
        } = this.props;

        return (
            <form
                className='Form'
                onSubmit={this.onSubmit}
            >
                <label className='Form__name'>
                    <input
                        className='Form__input'
                        type={typeInput}
                        placeholder={placeholder}
                        value={this.state.city}
                        onChange={this.onChangeInput}
                        onBlur={onInputBlur}
                        onKeyUp={handleKeyUPInput}
                        onFocus={handleInputFocus}
                    />
                    {this.props.isNullValue && <div className='Form__error'>Enter the name of the city</div>}
                </label>
                <Button
                    onClick={handleWeatherButton}
                    disabled={isNullValue}
                    label='Show Weather'
                />
            </form>
        );
    };
}