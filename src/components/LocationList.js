import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import'./styles.css';

const Locationlist = ( {cities, onSelectedLocation} ) => {
    const handleWeatherLocation= city => {
        console.log("handleWeatherLocation");
        onSelectedLocation(city);
    };

    const strToComponents = cities => (
        cities.map(city => 
            (
                <WeatherLocation 
                    key={city} 
                    city={city}
                    onWeatherLocationClick={() => handleWeatherLocation(city) }/>))
    );

    return (<div className="locationlist">
       {strToComponents(cities)}
    </div>
    )};

Locationlist.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default Locationlist;