import React from 'react';
import PropTypes from 'prop-types';
import WeatherPreview from './WeatherPreview'

const WeatherList = (props) => {
    var dailyWeaterList = []

    for (let i = 0; i < 5; i++) {

        let dailySumTemp = null
        let dailyIcon = null
        let formatedDate = null

        for (let j = 0; j < 8; j++) {
            let idx = (i * 8) + j
            let hour = new Date(props.list[idx].dt * 1000).getHours()
            dailySumTemp += props.list[idx].main.temp
            if (hour === 15) {
                dailyIcon = `http://openweathermap.org/img/w/${props.list[idx].weather[0].icon}.png`
                let date = new Date(props.list[idx].dt * 1000)
                formatedDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
            }
        }

        let dailyAvgTemp = dailySumTemp / 8 - 273.15
        let dailyWeather = {
            date : formatedDate,
            temp: parseInt(dailyAvgTemp),
            weatherMain: props.list[i].weather[0].main,
            weatherDesc: props.list[i].weather[0].description,
            icon: dailyIcon
        }

        dailyWeaterList.push(<WeatherPreview dailyWeather={dailyWeather} key={i} />)
    }

    return (
        <div className="weather-list">
            {dailyWeaterList}
        </div>
    )
}

WeatherList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object)
}

export default WeatherList