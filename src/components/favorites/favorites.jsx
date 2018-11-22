import React, { Component } from 'react';
import {WeatherInfo} from '../../elements';
import {getWeatherData} from "../../services";
import {array, bool, func} from 'prop-types';
import './favorites.css';


export class Favorites extends Component{
    static propTypes = {
        favorites: array,
        isOpen: bool,
        handleShowWidget: func,
        handleHiddenWIdget: func
    };
    static defaultProps = {
        favorites: [],
        isOpen: false,
        handleShowWidget: () => {},
        handleHiddenWIdget: () => {}
    };

    render () {
        const {
            favorites,
            isOpen,
            handleShowWidget,
            handleHiddenWIdget
        } = this.props;
        const favoritesIsOpen = isOpen ? 'Favorites Favorites__open' : 'Favorites';
        const isDataEmpty = Object.assign(favorites).length === 0;

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
                                    {favorites.map((item,i) => <p key={i}>{item}</p>)}
                                </div>
                            }
                            <div
                                className='Favorites__close'
                                onClick={handleHiddenWIdget}
                            >
                                X
                            </div>
                        </div>
                    </div>
                   :
                   <h2 className='Favorites__title' onClick={handleShowWidget}>Favorites City</h2>
               }
            </div>
        );
    }
}