import React from 'react';
import propTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const strToComponents = cities => (
    cities.map(city => <WeatherLocation city={city}/>)
);


const Locationlist = ( {cities} ) => (
    <div>
       {strToComponents(cities)}
    </div>
);

Locationlist.propTypes = {
    cities: propTypes.array.isRequired,
};

export default Locationlist;