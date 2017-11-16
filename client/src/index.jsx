import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
      <h1>MovieList</h1>
        <ul>
          <li> Mean Girld </li>
          <li> Hackers </li>
          <li> The Grey </li>
          <li> Sunshine </li>
          <li> Ex Machina </li>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));