import React, { Component } from 'react';
import {Loading, WeatherInfo} from '../../elements';
import {bool, func} from 'prop-types';
import './favorites.css';


export class Favorites extends Component{
    static propTypes = {
        isOpen: bool,
        handleShowWidget: func,
        handleHiddenWIdget: func,
        loading: bool
    };
    static defaultProps = {
        isOpen: false,
        handleShowWidget: () => {},
        handleHiddenWIdget: () => {},
        loading: bool
    };

    render () {
        const {
            isOpen,
            handleShowWidget,
            handleHiddenWIdget,
            favorites,
            loading,
            actualWeather,
            handleFavoritesCity
        } = this.props;
        const favoritesIsOpen = isOpen ? 'Favorites Favorites__open' : 'Favorites';
        const isDataEmpty = favorites.length === 0 ;
        const actualWeatherView = !isDataEmpty && actualWeather.map((item,i)=>
            <WeatherInfo key={i}
                         weatherInfo={item}
                         handleFavoritesCity={handleFavoritesCity}
                         favorites={favorites}/>);

        return (
            <div className={favoritesIsOpen}>
               {isOpen ?
                    <div className='Favorites__wrapper'>
                        <div className='Favorites__wrapper_relative'>
                            {isDataEmpty ?
                                <div>
                                    <p className='Favorites__empty'>
                                        the list of selected cities is empty
                                    </p>

                                </div>
                                :
                                <div>
                                    {actualWeatherView}
                                </div>
                            }
                            <div
                                className='Favorites__close'
                                onClick={handleHiddenWIdget}
                            >
                                X
                            </div>
                        </div>
                        {loading && !isDataEmpty && <div className='Favorites__loading'><Loading/></div>}
                    </div>
                   :
                   <h2 className='Favorites__title' onClick={handleShowWidget}>Favorites City</h2>
               }
            </div>
        );
    }
}