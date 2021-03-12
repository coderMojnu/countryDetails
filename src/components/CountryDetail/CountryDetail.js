import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    let {countryName} = useParams()
    const [countryDetail, setCountryDetail] = useState([]);
    useEffect(() =>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then (data => setCountryDetail(data[0]));
        
    }, [])
    
    return (
        <div>
            <p>Capital: {countryDetail.name}</p>
            <p>Region: {countryDetail.region}</p>
            <p>Population: {countryDetail.population}</p>
        </div>
    );
};

export default CountryDetail;