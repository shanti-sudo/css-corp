import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './configureStore';
import App from './App';
import './root.css';
import { configure } from 'mobx';

configure({ enforceActions: 'always' });

const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  root,
);

// class Counter {
//   count = 0;
//   test = 'hello';

//   constructor(count: number) {
//     makeObservable(this, {
//       count: observable,
//       increment: action,
//       decrement: action,
//       multyThree: computed,
//       loadData: flow,
//     });
//     this.count = count;
//   }

//   increment = () => {
//     console.log('increment');

//     this.count++;
//   };

//   decrement = () => {
//     console.log('decrement');
//     this.count--;
//   };

//   changeTest = () => {
//     this.test = 'how are you?';
//   };

//   get multyThree() {
//     return this.count * 3;
//   }

//   *loadData() {
//     const res = yield axios.get('http://localhost:3000/counter');
//     this.count = res.data.value;
//   }
// }

// const counter = new Counter(5);

// const counter = observable({
//   count: 0,
//   test: 'hello',
//   increment: () => {
//     counter.count++;
//   },
//   decrement: () => {
//     counter.count--;
//   },
//   changeTest: () => {
//     counter.test = 'how are you?';
//   },
// });

// state value or prop value change then only component rerender
// const Child1 = observer(() => {
//   const fetchServerData = async () => {
//     await counter.loadData();
//   };

//   return (
//     <div>
//       <h1>{counter.multyThree}</h1>
//       <button type="button" onClick={counter.changeTest}>
//         Change Test
//       </button>
//       <h2>{counter.count}</h2>
//       <button type="button" onClick={counter.increment}>
//         +
//       </button>
//       <button type="button" onClick={counter.decrement}>
//         -
//       </button>

//       <button type="button" onClick={fetchServerData}>
//         Fetch Server data
//       </button>
//     </div>
//   );
// });

// const Child2 = observer(() => {
//   return (
//     <div>
//       <h1>Child 2</h1>
//       <h2>{counter.count}</h2>
//       <button type="button" onClick={counter.increment}>
//         +
//       </button>
//       <button type="button" onClick={counter.decrement}>
//         -
//       </button>
//     </div>
//   );
// });

// const App = () => {
//   return (
//     <div>
//       <Child1 />
//       <Child2 />
//     </div>
//   );
// };

// ReactDOM.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>,
//   root,
// );
