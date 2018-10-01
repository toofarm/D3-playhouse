import React, { Component } from 'react';
import * as d3 from 'd3'


class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
        data: []
     }
  }


  componentDidMount () {

  }

  render() {
    return (
      <div className="chart">
        Soon to be a map:
        <div className="my-chart" id="map">
            
        </div>
      </div>
    );
  }
}

export default Map;