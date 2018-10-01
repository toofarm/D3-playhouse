import React, { Component } from "react";
import * as d3 from "d3";

import { nodes_data, links_data } from "../consts/data";

class ForceDirected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {

    function circleColor (d) {
        if ( d.sex === "M" ) {
            return "blue"
        } else {
            return "pink"
        }
    }

    function linkColor (d) {
        if ( d.type === "A" ) {
            return "green"
        } else {
            return "red"
        }
    }

    function tickActions () {
        node
          .attr("cx", function(d) {
            return d.x;
          })
          .attr("cy", function(d) {
            return d.y;
          });
    
        link
          .attr("x1", function(d) {
            return d.source.x;
          })
          .attr("y1", function(d) {
            return d.source.y;
          })
          .attr("x2", function(d) {
            return d.target.x;
          })
          .attr("y2", function(d) {
            return d.target.y;
          });
      }

    var svg = d3.select("#force-svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height");

    var link_force = d3.forceLink(links_data).id(function(d) {
            return d.name;
        })
        .strength(0)
        
    var charge_force = d3.forceManyBody()
            .strength(-5)    

    var simulation = d3.forceSimulation().nodes(nodes_data);

    simulation
      .force("charge_force", charge_force)
      .force("center_force", d3.forceCenter(width / 2, height / 2))
      .force("links", link_force)

    simulation.on("tick", tickActions)

    var node = svg 
      .append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(nodes_data)
      .enter()
      .append("circle")
      .attr("r", 12)
      .attr("fill", circleColor)

    var link = svg
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links_data)
      .enter()
      .append("line")
      .attr("stroke-width", 2)
      .style("stroke", linkColor)

    var drag_handler = d3.drag()
        .on("start", drag_start)
        .on("drag", drag_drag)
        .on("end", drag_end)
    
    drag_handler(node)

    //drag handler
    //d is the node 
    function drag_start(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
       d.fx = d.x;
       d.fy = d.y;
   }
   
   function drag_drag(d) {
     d.fx = d3.event.x;
     d.fy = d3.event.y;
   }
   
   function drag_end(d) {
     if (!d3.event.active) simulation.alphaTarget(0);
     d.fx = null;
     d.fy = null;
   }

  }

  render() {
    return (
      <div className="chart">
        A show of force:
        <div className="my-chart" id="force-directed">
          <svg width="960" height="600" id="force-svg" />
        </div>
      </div>
    );
  }
}

export default ForceDirected;
