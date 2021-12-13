import React, { Component, createRef } from 'react';
import './weatherStyle.css';
export default class Todo extends Component {
    state = {
        filterType: '',
        details: [{
            id: 1,
            city: 'Mumbai',
            temp: 30
        },
        {
            id: 2,
            city: 'Hyderabad',
            temp: 27
        },
        {
            id: 3,
            city: 'Kolkata',
            temp: 36
        }
        ]
    }

    handleFilter = (temperature) => {
        console.log(temperature);
        this.setState({
            filterType: temperature,
        });
    };

    render() {
        console.log('render');
        const { filterType, details } = this.state;
        return (
            <div className="container">
                <h1>Weather Condition</h1>
                <div className="todo-list">
                    {details
                        .map((item) => (
                            <div className="todo-item" key={item.temp}>
                                <button
                                    type="button"
                                    onClick={() => this.handleFilter(item.temp)}
                                >
                                    {item.city}
                                </button>

                            </div>
                        ))}
                    <p id="temp">
                        Click above City to know Temperature of City - {filterType}
                    </p>
                </div>

            </div>
        );
    }
}