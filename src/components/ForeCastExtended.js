import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class ForecastExteded extends Component {
    render(){
        const city = this.props.city;
        return(
            <div>
               <h2 className='forecast-title'>
                    Pronóstico extendido para {city}
                </h2> 
            </div>
        );
    }
}

ForecastExteded.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExteded;