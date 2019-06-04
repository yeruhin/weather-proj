import React from 'react';
import './App.css';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WeatherPage from './pages/WeatherPage'

configure({ adapter: new Adapter() });

function App() {
  return (
    <div className="App">
      <WeatherPage/>
    </div>
  );
}

export default App;
