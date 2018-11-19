import React, { Component } from 'react';
import {object} from 'prop-types';
import './error.css';

export class Error extends Component {
    static propTypes = {
        errorInfo: object
    };

    render () {
        const {code, text} = this.props.errorInfo;

        return (
            <div className='Error'>
                <h2 className='Error__status'>
                    {code}
                </h2>
                <p className='Error__text'>
                    City not found
                </p>
            </div>
        );
    };
}