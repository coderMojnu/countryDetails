import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'
const Country = (props) => {
    const { name, flag } = props.country;
    return (
        <div className="country-box-style">
            <img src={flag} className="flag-image" />
            <Link to={`/country/${name}`}>
                <button>More About {name}</button>
            </Link>
        </div>
    );
};

export default Country;