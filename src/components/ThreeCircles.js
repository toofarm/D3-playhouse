import React, { Component } from 'react';
import * as d3 from 'd3';

class ThreeCircles extends Component {
  constructor(props) {
    super(props)
    this.state = {
        data: [32, 57, 124]
    }

    this.drawCircles = this.drawCircles.bind(this)
    this.addCircle = this.addCircle.bind(this)
    this.removeCircle = this.removeCircle.bind(this)
  }

  drawCircles (order) {
    let data = this.state.data

    if (order === "add") {
        let newCircle = Math.random() * 250
        data = data.concat(newCircle)
    } else if (order === "remove") {
        data.pop()
    }
    
    console.log(data)

    var svg = d3.select(".circles-corral")
    var circles = svg.selectAll("circle").data(data)
        .style("fill", "steelblue")
        .attr("cx", () => Math.random() * 700)
        .attr("r", (d) => d/2.5)

    circles.enter().append("circle")
            .style("fill", "steelblue")
            .attr("cx", () => Math.random() * 700)
            .attr("r", 0)
            .transition()
            .attr("r", (d) => d/2)

    circles.exit().transition()
        .attr("r", 0)
        .remove()

    this.setState({
        data: data
    })

  }
  
  addCircle () {
      this.drawCircles("add")
  }

  removeCircle () {
    this.drawCircles("remove")
  }

  componentDidMount () {
    let ourData = [19, 78]
    this.drawCircles(ourData)
  }

  render() {
    return (
      <div className="chart">
        Some circles:
        <div className="my-chart">
            <svg width="820" height="200" className="circles-corral">
                <circle cx="40" cy="90" r="10"></circle>
                <circle cx="80" cy="90" r="10"></circle>
                <circle cx="120" cy="90" r="10"></circle>
            </svg>
        </div>
        <div className="controls">
            <button onClick={this.addCircle}>
                Add circle
            </button>
            <button onClick={this.removeCircle}>
                Remove circle
            </button>
        </div>
      </div>
    );
  }
}

export default ThreeCircles;