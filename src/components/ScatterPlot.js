import React, { Component } from 'react';
import * as d3 from 'd3'

import { fake_jobs } from '../consts/data'

const margin = {top: 20, right: 20, bottom: 30, left: 40}
const width = 960 - margin.left - margin.right
const height = 500 - margin.top - margin.bottom

// Set up X axis
var xValue = function(d) { return d.confidence},
    xScale = d3.scaleLinear().range([0, width]),
    xMap = function(d) { return xScale(xValue(d))},
    xAxis = d3.axisBottom(xScale)

// Set up Y axis
var yValue = function(d) { return d.days}, 
    yScale = d3.scaleLinear().range([height, 0]), 
    yMap = function(d) { return yScale(yValue(d));},
    yAxis = d3.axisLeft(yScale)

// Set up color (work on this a bit later)
var cValue = "blue"

class ScatterPlot extends Component {
  constructor(props) {
    super(props)
    this.state = { }

    this.makeScatterPlot = this.makeScatterPlot.bind(this)
  }

  makeScatterPlot (data) {

    // add the graph canvas to the body of the webpage
    var svg = d3.select(".scatter-plot").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // add the tooltip area to the webpage
    var tooltip = d3.select(".scatter-plot-shell").append("div")
        .attr("class", "tooltip-sp")
        .style("opacity", 0);

    // change string (from CSV) into number format
    data.forEach(function(d) {
        d.confidence = +d.confidence
        d.days = +d.days
        console.log(d);
    })

    // don't want dots overlapping axis, so add in buffer to data domain
    xScale.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1])
    yScale.domain([d3.min(data, yValue)-1, d3.max(data, yValue)+1])

    // x-axis
    svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
    
    // x-axis label        
    svg.append("text")
            .attr("class", "label-sp")
            .attr("x", width)
            .attr("y", 445)
            .style("text-anchor", "end")
            .text("Confidence");

    // y-axis
    svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)

    // y-axis label        
    svg.append("text")
            .attr("class", "label-sp")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Days until first response");

    // draw dots
    svg.selectAll(".dot")
        .data(data)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 7)
        .attr("cx", xMap)
        .attr("cy", yMap)
        .style("fill", cValue) 
        .on("mouseover", function(d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(d.position + "<br/> <span class='sp-tp-label'>(Confidence: " + xValue(d) 
            + ", Days: " + yValue(d) + ")</span>")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", function(d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        })
  }

  componentDidMount () {
    fake_jobs["x"] = "Confidence"
    fake_jobs["y"] = "Days until first response"
    this.makeScatterPlot(fake_jobs)
  }

  render() {
    return (
      <div className="chart scatter-plot-shell">
        Scatter, scatter:
        <div className="my-chart scatter-plot" id="scatter-plot">
            
        </div>
      </div>
    )
  }
}

export default ScatterPlot