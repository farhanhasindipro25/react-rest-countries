import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area, region, population,name} = props.country;
    return (
        <div className='country'>
            <h2 className='country-title'>Country Name: {name.common}</h2>
            <h4>Population: {population}</h4>
            <p><small>Area: {area}</small></p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;