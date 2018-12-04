import React, { Component } from 'react';
import './loading.css';

export class Loading extends Component {
    render () {
        return (
            <div className='Loading'>
                <div className='Loading__indicator'/>
            </div>
        );
    };
};

