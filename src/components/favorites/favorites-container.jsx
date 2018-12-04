import React, { Component } from 'react';
import {array} from 'prop-types';
import {Favorites} from "./favorites";
import {getWeatherData} from "../../services";

export class FavoritesContainer extends Component{
    static propTypes = {
        favorites: array
    };
    static defaultProps = {
        favorites: []
    };

    state = {
        isOpen: false,
        actualWeather: [],
        loading: false
    };

    handleShowWidget = async () => {
        await this.setState({
            actualWeather: [],
            isOpen: true,
            loading: true
        });
        const data = await this.getActualWeather();
        await this.setState({
            actualWeather: [...data],
            loading: false
        });
    };

    handleHiddenWIdget = () => {
        this.setState({
            isOpen: false
        });
    };

    getActualWeather = () => {
        const {favorites} = this.props;

        return Promise.all(favorites.map((city)=>getWeatherData(city)))
            .then(result => result);
    };


    render () {
        const {isOpen, loading,actualWeather} = this.state;
        const {favorites, handleFavoritesCity} = this.props;

        return (
            <Favorites
                isOpen={isOpen}
                loading={loading}
                handleShowWidget={this.handleShowWidget}
                handleHiddenWIdget={this.handleHiddenWIdget}
                handleFavoritesCity={handleFavoritesCity}
                favorites={favorites}
                actualWeather={actualWeather}
            />
        );
    }
}