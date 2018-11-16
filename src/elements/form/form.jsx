import React, { Component } from 'react';
import './form.css';

export class Form extends Component {
    state ={
        city: '',
        isTrueValue: true
    };

    onChangeInput = (event) => {
        this.setState({
            city: event.target.value
        });
    };

    onSubmitForm = (event) => {
        const {city} = this.state;

        event.preventDefault();
        if(!city.length) {
            this.setState({
                isTrueValue: false
            });
            return;
        };
        this.props.onGetWeather(city);
        this.setState({
            city: '',
            isTrueValue: true
        });
    };

    render() {
        const isTrueValue = this.state.isTrueValue ? '' : 'Form__input_error';
        return (
            <form
                className='Form'
                onSubmit={this.onSubmitForm}
            >
                <label className='Form__name'>
                    <span className='Form__name_position'>
                        city:
                    </span>
                    <input
                        className={isTrueValue}
                        type="text"
                        name="name"
                        value={this.state.city}
                        onChange={this.onChangeInput}
                    />
                </label>
                <input
                    type="submit"
                    value="Show Weather"
                />
            </form>
        );
    };
}