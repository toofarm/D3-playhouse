import React, { Component } from 'react';
import logo from '../logo.svg';

import BarChart from './BarChart'
import ThreeCircles from './ThreeCircles'
import PieChart from './PieChart'
import Grid from './Grid'
import ForceDirected from './ForceDirected'
import ScatterPlot from './ScatterPlot'

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">It's the charts!</h1>
        </header>
        <BarChart />
        <ThreeCircles />
        <PieChart />
        <Grid />
        <ForceDirected />
        <ScatterPlot />
      </div>
    );
  }
}

export default App;
