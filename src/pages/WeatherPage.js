import React, { Component } from 'react';
import SearchBar from '../cmps/SearchBar'
import WeatherList from '../cmps/WeatherList'
import WeatherService from '../services/WeatherService'

class WeatherPage extends Component {

    state = {
        list: [],
        invalidInput: false
    }

    SearchWheaterByInput = (input) => {
        WeatherService.getWeatherByCity(input)
            .then(res => {
                console.log(res)
                this.setState({ ...this.state, 
                                list: res.list, 
                                invalidInput: false })
            })
            .catch(() => {
                this.setState({ ...this.state, 
                                list: [], 
                                invalidInput: true })
            })
    }

    render() {
        const ref = React.createRef();
        return (
            <div className="weather-page">
                <h1>World Weather</h1>
                <SearchBar SearchWheaterByInput={this.SearchWheaterByInput.bind(this)} ref={ref} />
                {
                    (this.state.list.length > 0) ?
                        <WeatherList list={this.state.list} /> :
                        (this.state.invalidInput) ? 
                        <p className="error">Invalid Input</p> : ''
                }
            </div>
        )
    }

}

export default WeatherPage