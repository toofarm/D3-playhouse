import React, { Component } from 'react';
import * as d3 from 'd3'

import { gridData } from '../consts/data'


class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {
        data: []
     }
    this.makeGrid = this.makeGrid.bind(this)
  }

  makeGrid (data) {
    var grid = d3.select("#grid")
        .append("svg")
        .attr("width","510px")
        .attr("height","510px")

    var row = grid.selectAll(".row")
        .data(data)
        .enter().append("g")
        .attr("class", "row");

    var column = row.selectAll(".square")
        .data(function(d) { return d; })
        .enter().append("rect")
        .attr("class","square")
        .attr("x", function(d) { return d.x; })
        .attr("y", function(d) { return d.y; })
        .attr("width", function(d) { return d.width; })
        .attr("height", function(d) { return d.height; })
        .style("fill", "#fff")
        .style("stroke", "#222")
        .on('click', function(d) {
            d.click ++;
            if ((d.click)%4 === 0 ) { d3.select(this).style("fill","#fff"); }
            if ((d.click)%4 === 1 ) { d3.select(this).style("fill","#2C93E8"); }
            if ((d.click)%4 === 2 ) { d3.select(this).style("fill","#F56C4E"); }
            if ((d.click)%4 === 3 ) { d3.select(this).style("fill","#838690"); }
         })
  }

  componentDidMount () {
    let data = gridData()
    this.setState({
        data: data
    })
    this.makeGrid(data)
  }

  render() {
    return (
      <div className="chart">
        A Grid (click it!):
        <div className="my-chart" id="grid">
            
        </div>
      </div>
    );
  }
}

export default Grid;