import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar'
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Sidebar cardNames={[]}/>
          <div className="main-panel">
            <Navbar/>
          </div>
        </div>
    );
  }
}

export default App;
