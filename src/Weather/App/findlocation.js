import React, { memo, useState, useRef, useEffect, useCallback } from 'react'
import debounce from 'lodash.debounce';
import ListItems from './searchresult';


const Location = () => {
  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])
  const [unit, setUnit] = useState('celsius')
  const didMount = useRef(false);

  const getcity = async () => {
    if (search !== '') {
      const url = `https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/cities?name_like=${search}`
      const response = await fetch(url);
      const json = await response.json();
      setResult(json)
    } else { setResult([]) }
  }

  const debouncedFetch = useCallback(debounce(getcity, 500), [search]);
  useEffect(() => {
    if (didMount.current) {
      debouncedFetch();
      return debouncedFetch.cancel;
    }
    else didMount.current = true;

  }, [search, debouncedFetch]);
  console.log("RUN ON EVERY RENDER")

  return (
    <div>
      <section>
        <div className='mb-3 pt-0 flex flex-wrap mx-2'>
          <input
            className='input-primary'
            type="search"
            placeholder="Location"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select className='input-primary'
            onChange={e => setUnit(e.target.value)}
          >
            <option value='celsius'>Celsius</option>
            <option value='fahrenheit'>Fahrenheit</option>
          </select>
        </div>
      </section>
      <section>
        <div>
          <ListItems items={result} unit={unit} />
        </div>
      </section>
    </div>
  )
}
export default memo(Location)