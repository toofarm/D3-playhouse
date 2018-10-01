import React, { Component } from 'react';
import * as d3 from 'd3';
import {data} from '../consts/data'

class BarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    data.sort( (a,b) => a - b)
    console.log(data)
    d3.select(".my-chart")
      .selectAll("div")
      .data(data)
        .enter()
        .append("div")
          .style("width", (d) => d + "px")
          .text( (d) => d)

  }

  render() {
    return (
      <div className="chart">
        Behold, a bar chart:
        <div className="my-chart">

        </div>
      </div>
    );
  }
}

export default BarChart;