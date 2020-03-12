import React, { Component } from 'react';
import './App.css';
import WindowInfo from './WindowInfo'
import Animation from './Animation'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <div style={{ ...styles.container }}>
          <div>
            <WindowInfo />
            <Animation width={400} height={400}/>

          </div>
        </div>

      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: '50px'
  },
  item: {
    margin: "50px",
    border: '1px solid'
  }
}

export default App;
