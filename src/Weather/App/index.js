import React, { Component, createRef } from 'react';
import Location from './findlocation';

export default class App extends Component {
  render() {
    console.log('render');
    return (
      <div>
        <div className='body-primary'>
          <div className='m-5'>
            <div className='pt-5 border-b-2 border-red-500'>
              <h1 className='font-bold'>WeatherWatch</h1>
            </div>
            <Location />
          </div>
        </div>
      </div>

    );
  }
}

