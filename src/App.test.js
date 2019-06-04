import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

import WeatherService from './services/WeatherService';
import WeatherPage from './pages/WeatherPage'
import WeatherList from './cmps/WeatherList'

describe("Weather List Component", () => {

  it("Show the weather list if you have list of objects in weather page state", () => {
    const weatherPage = shallow(<WeatherPage />);
    weatherPage.setState({ list: [{}, {}, {}], invalidInput: false });
    expect(weatherPage.find(WeatherList)).toHaveLength(1);
  });
  
  it("Show invalid input if the api reject and invalidInput in state is equal to true", () => {
    const weatherPage = mount(<WeatherPage />);
    weatherPage.setState({ list: [], invalidInput: true });
    expect(weatherPage.find('.error')).toHaveLength(1)
  });
});

describe("Weather Service", () => {
  it('Send request find weather with real place', async () => {
    const apiRes = await WeatherService.getWeatherByCity('netanya')
    expect(apiRes).toEqual(
      expect.objectContaining({
        cnt: 40,
        cod: '200',
        list: expect.arrayContaining([
          expect.objectContaining({

            dt: expect.any(Number),

            main: expect.objectContaining({
              temp: expect.any(Number)
            }),

            weather: expect.arrayContaining([
              expect.objectContaining({
                description: expect.any(String),
                icon: expect.any(String),
                main: expect.any(String),
              })
            ])

          })
        ])
      }))
  });

  it('Send request find weather with wrong palce name (numbers)', async () => {
    expect(WeatherService.getWeatherByCity(42342)).toEqual(Promise.reject())
  })
})
