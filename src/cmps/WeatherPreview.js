import React from 'react';
import PropTypes from 'prop-types';

const WeatherPreview = (props) => {
    return (
        <div className="weather-preview">
            <h4>{props.dailyWeather.date}</h4>
            <h1>{props.dailyWeather.temp}</h1>
            <img src={props.dailyWeather.icon} alt="Weather Icon"/>
            <h2>{props.dailyWeather.weatherMain}</h2>
            <h5>{props.dailyWeather.weatherDesc}</h5>
        </div>
    )
}

WeatherPreview.propTypes = {
    dailyWeather : PropTypes.object
}

export default WeatherPreview