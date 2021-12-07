import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import User from './task_shanti';

// Components
// 1. function components
// 2. class components

// Rules for React Components
// 1. Name of the component should be always start with capital letter
// 2. per component return only 1 html element
// 3. replace class with className keyword
// 4. for inline style use object and property Name should be in camelCase

// const obj = {
//   backgroundColor: true ? 'green' : 'blue',
//   color: '#fff',
// };

// const App = ({ title, caption }) => {
//   return (
//     <>
//       <h1 className="xyz pqr">{title}</h1>
//       <h2 style={obj}>{caption}</h2>
//     </>
//   );
// };

// class App extends Component {
//   render() {
//     const { title, caption } = this.props;
//     return (
//       <>
//         <h1>{title}</h1>
//         <h2>{caption}</h2>
//       </>
//     );
//   }
// }

ReactDOM.render(
  <div>
    <h1>Hello from React</h1>
    <input type="checkbox" />
    <App title="Good Morning" />
    <User firstname="Shanti" lastname="M" />
  </div>,
  document.getElementById('root'),
);