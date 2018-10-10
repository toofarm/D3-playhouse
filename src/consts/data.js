export const data = [30, 86, 17, 234, 303, 143, 45, 365]

export const dataset = [
    { label: 'Abulia', count: 10 },
    { label: 'Betelgeuse', count: 20 },
    { label: 'Cantaloupe', count: 30 },
    { label: 'Dijkstra', count: 40 }
  ]

export const gridData = () => {
  var data = [];
  var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
  var ypos = 1;
  var width = 50;
  var height = 50;
  var click = 0;

  // iterate for rows	
  for (var row = 0; row < 10; row++) {
    data.push( [] );
    
    // iterate for cells/columns inside rows
    for (var column = 0; column < 10; column++) {
      data[row].push({
        x: xpos,
        y: ypos,
        width: width,
        height: height,
        click: click
      })
      // increment the x position. I.e. move it over by 50 (width variable)
      xpos += width;
    }
    // reset the x position after a row is complete
    xpos = 1;
    // increment the y position for the next row. Move it down 50 (height variable)
    ypos += height;	
  }
  return data;
}

export const nodes_data = [
  {"name": "Lillian", "sex": "F"},
  {"name": "Gordon", "sex": "M"},
  {"name": "Sylvester", "sex": "M"},
  {"name": "Mary", "sex": "F"},
  {"name": "Helen", "sex": "F"},
  {"name": "Jamie", "sex": "M"},
  {"name": "Jessie", "sex": "F"},
  {"name": "Ashton", "sex": "M"},
  {"name": "Duncan", "sex": "M"},
  {"name": "Evette", "sex": "F"},
  {"name": "Mauer", "sex": "M"},
  {"name": "Fray", "sex": "F"},
  {"name": "Duke", "sex": "M"},
  {"name": "Baron", "sex": "M"},
  {"name": "Infante", "sex": "M"},
  {"name": "Percy", "sex": "M"},
  {"name": "Cynthia", "sex": "F"}
]

export const links_data = [
  {"source": "Sylvester", "target": "Gordon", "type":"A" },
  {"source": "Sylvester", "target": "Lillian", "type":"A" },
  {"source": "Sylvester", "target": "Mary", "type":"A"},
  {"source": "Sylvester", "target": "Jamie", "type":"A"},
  {"source": "Sylvester", "target": "Jessie", "type":"A"},
  {"source": "Sylvester", "target": "Helen", "type":"A"},
  {"source": "Helen", "target": "Gordon", "type":"A"},
  {"source": "Mary", "target": "Lillian", "type":"A"},
  {"source": "Ashton", "target": "Mary", "type":"A"},
  {"source": "Duncan", "target": "Jamie", "type":"A"},
  {"source": "Gordon", "target": "Jessie", "type":"A"},
  {"source": "Sylvester", "target": "Fray", "type":"E"},
  {"source": "Fray", "target": "Mauer", "type":"A"},
  {"source": "Fray", "target": "Cynthia", "type":"A"},
  {"source": "Fray", "target": "Percy", "type":"A"},
  {"source": "Percy", "target": "Cynthia", "type":"A"},
  {"source": "Infante", "target": "Duke", "type":"A"},
  {"source": "Duke", "target": "Gordon", "type":"A"},
  {"source": "Duke", "target": "Sylvester", "type":"A"},
  {"source": "Baron", "target": "Duke", "type":"A"},
  {"source": "Baron", "target": "Sylvester", "type":"E"},
  {"source": "Evette", "target": "Sylvester", "type":"E"},
  {"source": "Cynthia", "target": "Sylvester", "type":"E"},
  {"source": "Cynthia", "target": "Jamie", "type":"E"},
  {"source": "Mauer", "target": "Jessie", "type":"E"}
]

export const fake_jobs = [
  {"position": "Dog walker", "confidence": 2, "days": 12},
  {"position": "Stock broker", "confidence": 7, "days": 7},
  {"position": "Milk maid", "confidence": 4, "days": 22},
  {"position": "Haberdasher", "confidence": 1, "days": 3},
  {"position": "Window Washer", "confidence": 5, "days": 3},
  {"position": "Taxi driver", "confidence": 6, "days": 13},
  {"position": "Carnival Barker", "confidence": 3, "days": 9},
  {"position": "Granfaloon", "confidence": 5, "days": 21},
  {"position": "Jockey", "confidence": 3, "days": 2},
  {"position": "Horse Trainer", "confidence": 7, "days": 15},
  {"position": "Barista", "confidence": 1, "days": 8},
  {"position": "Court Jester", "confidence": 4, "days": 18}
]