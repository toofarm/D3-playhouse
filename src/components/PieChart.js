import React, { Component } from 'react';
import * as d3 from 'd3'

import { dataset } from '../consts/data'

//DIMENSIONS
const width = 360
const height = 360
const radius = Math.min(width, height) / 2
const donutWidth = 75
const legendRectSize = 18;
const legendSpacing = 4;

class PieChart extends Component {
  constructor(props) {
    super(props)
    this.state = { }

    this.makePie = this.makePie.bind(this)
  }

  makePie (data) {
    var color = d3.scaleOrdinal()
        .range(['#A60F2B', '#648C85', '#B3F2C9', '#528C18', '#C3F25C']);

    var svg = d3.select('#pie-chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')')
    
    const arc = d3.arc()
      .innerRadius(radius - donutWidth)
      .outerRadius(radius)
    
    const pie = d3.pie()
      .value(function(d) { return d.count; })
      .sort(null)
    
    var path = svg.selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', function(d, i) {
        return color(d.data.label);
      })                               

    //ADD LEGEND
    var legend = svg.selectAll('.legend')
        .data(color.domain())
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', function(d, i) {
            var height = legendRectSize + legendSpacing;
            var offset =  height * color.domain().length / 2;
            var horz = -2 * legendRectSize;
            var vert = i * height - offset;
            return 'translate(' + horz + ',' + vert + ')';
        })

    legend.append('rect')
        .attr('width', legendRectSize)
        .attr('height', legendRectSize)
        .style('fill', color)
        .style('stroke', color)

    legend.append('text')
        .attr('x', legendRectSize + legendSpacing)
        .attr('y', legendRectSize - legendSpacing)
        .text(function(d) { return d; });

    //ADD TOOLTIPS
    var tooltip = d3.select('#pie-chart')   
          .append('div')                                                
          .attr('class', 'tooltip');                                    
        tooltip.append('div')                                           
          .attr('class', 'label');                                      
        tooltip.append('div')                                           
          .attr('class', 'count');                                      
        tooltip.append('div')                                           
          .attr('class', 'percent');   


    path.on('mouseover', function(d) {                    
        var total = d3.sum(dataset.map(function(d) {                
          return d.count;                                           
        }))                                                       
        var percent = Math.round(1000 * d.data.count / total) / 10;  
        tooltip.select('.label').html(d.data.label);                
        tooltip.select('.count').html(d.data.count);                
        tooltip.select('.percent').html(percent + '%');             
        tooltip.style('display', 'block');                          
      })

    path.on('mouseout', function() {                              
        tooltip.style('display', 'none');                           
    })

    path.on('mousemove', function(d) {                       
        tooltip.style('top', (d3.event.layerY + 10) + 'px')         
          .style('left', (d3.event.layerX + 10) + 'px');            
      });  

    }

  componentDidMount () {
    this.makePie(dataset)
  }

  render() {
    return (
      <div className="chart">
        Hot pizza pie:
        <div className="my-chart" id="pie-chart">
            
        </div>
      </div>
    );
  }
}

export default PieChart;