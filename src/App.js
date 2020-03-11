import React, { Component } from 'react';
import './App.css';
import WindowInfo from './WindowInfo'

class App extends Component {

  constructor(props) {
    super(props)
  }


  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <div>
          <WindowInfo />
        </div>
      </div>
    );
  }
}

export default App;
