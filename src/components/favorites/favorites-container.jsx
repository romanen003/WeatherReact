import React, { Component } from 'react';
import {object} from 'prop-types';
import {Favorites} from "./favorites";
import {getPicWeather, getWeatherData} from "../../services";

export class FavoritesContainer extends Component{
    static propTypes = {};
    static defaultProps = {};

    state = {
        isOpen: false
    };

    handleShowWidget = () => {
      this.setState({
          isOpen: true
      });
    };

    handleHiddenWIdget = () => {
        this.setState({
            isOpen: false
        });
    };


    render () {
        const {isOpen} = this.state;

        return (
            <Favorites
                favorites={this.props.favorites}
                isOpen={isOpen}
                handleShowWidget={this.handleShowWidget}
                handleHiddenWIdget={this.handleHiddenWIdget}
            />
        );
    }
}