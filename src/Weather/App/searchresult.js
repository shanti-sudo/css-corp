import debounce from 'lodash.debounce'
import React, { memo, useCallback, useEffect, useState } from 'react'

const ListItems = (props) => {
  const unit = props.unit
  const [sel, setSel] = useState('')
  const [result, setResult] = useState([])

  const getdetails = async () => {
    if (sel !== '') {
      const url = `https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/cities/${sel}/report?_embed=${unit}`
      const response = await fetch(url);
      const data = await response.json();
      const json = data[0];
      for (let key in json) {
        console.log(`${key} check here`)

      }
      setResult(json)
    } else { setResult([]) }
  }

  const debouncedDetails = useCallback(debounce(getdetails, 1000), [sel, unit]);
  useEffect(() => {
    console.log("RUN ON INITIAL RENDER")
    debouncedDetails();
    return debouncedDetails.cancel;
  }, [sel, debouncedDetails]);

  return (
    <div>
      <section className='bg-white'>
        <div className='flex flex-row'>
          {props.items.map((city) => (
            <button
              className='bg-rose-500 px-2 m-2 border-4 border-rose-400 rounded-full'
              onClick={(e) => setSel(city.id)}
              key={city.id}>
              {city.name}
            </button>
          ))}
        </div>
      </section>
      <div>
        <h1 className='text-4xl font-normal leading-normal text-black-800"'>
          {result.location}
        </h1>
      </div>
      {(() => {
        for (let key in result) {
          if (key == unit) {
            const unit_sym = (unit == 'celsius' ? "C" : "F")
            return (
              <div>
                <div className='grid grid-cols-3'>
                  <div className='display-parent-temp'>
                    <span className='display-child-temp'> Current Temperature </span>
                    <span className='display-child-temp'>{result[unit][0].temp} &deg;{unit_sym}</span>
                  </div>
                  <div className='display-parent-temp'>
                    <span className='display-child-temp'> Maximum Temperature </span>
                    <span className='display-child-temp'>{result[unit][0].temp_max} &deg;{unit_sym}</span>
                  </div>
                  <div className='display-parent-temp'>
                    <span className='display-child-temp'> Minimum Temperature </span>
                    <span className='display-child-temp'>{result[unit][0].temp_min} &deg;{unit_sym}</span>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div className='display-parent-temp'>
                    <span className='display-child-temp'> Wind Speed </span>
                    <span className='display-child-temp'>{result.wind_speed} meter/sec</span>
                  </div>
                  <div className='display-parent-temp'>
                    <span className='display-child-temp'> Wind direction </span>
                    <span className='display-child-temp'>{result.wind_direction} degrees</span>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div className='display-parent-temp'>
                    <span className='display-child-temp'> Pressure </span>
                    <span className='display-child-temp'>{result.pressure} hpa</span>
                  </div>
                  <div className='display-parent-temp'>
                    <span className='display-child-temp'> humidity </span>
                    <span className='display-child-temp'>{result.humidity}&#37;</span>
                  </div>
                </div>


              </div>
            )
          }
        }

      })()}


    </div>
  )
}

export default memo(ListItems)