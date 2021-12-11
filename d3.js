const d3BaseRings = [
    [106.78120590542346, 10.884596302222606, 0],
    [106.78138091954051, 10.884741169698652, 0],
    [106.78152642936253, 10.884565353254597, 0],
    [106.78135208579455, 10.884422461161893, 0],
  ];
  
  const d3RoofRings = [
    [106.78120590542346, 10.884596302222606, 45],
    [106.78138091954051, 10.884741169698652, 45],
    [106.78152642936253, 10.884565353254597, 45],
    [106.78135208579455, 10.884422461161893, 45],
  ];
  
  const d3Base = {
    type: 'polygon',
    rings: d3BaseRings,
  };
  
  const d3Roof = {
    type: 'polygon',
    rings: d3RoofRings,
  };
  
  const d3Floor = [],
    d3Wall = [],
    d3Line = [];
  
  for (let i = 0; i <= d3BaseRings.length - 1; i++) {
    let r1, r2, r3, r4;
    if (i < d3BaseRings.length - 1) {
      r1 = d3Base.rings[i];
      r2 = d3Base.rings[i + 1];
      r3 = [
        d3Base.rings[i + 1][0],
        d3Base.rings[i + 1][1] + 0.00000000000001,
        10,
      ];
      r4 = [d3Base.rings[i][0], d3Base.rings[i][1] + 0.00000000000001, 10];
    } else {
      r1 = d3Base.rings[d3BaseRings.length - 1];
      r2 = d3Base.rings[0];
      r3 = [d3Base.rings[0][0], d3Base.rings[0][1] + 0.00000000000001, 10];
      r4 = [
        d3Base.rings[d3BaseRings.length - 1][0],
        d3Base.rings[d3BaseRings.length - 1][1] + 0.00000000000001,
        10,
      ];
    }
  
    let f = {
      type: 'polygon',
      rings: [r1, r2, r3, r4],
    };
  
    d3Floor.push(f);
  }
  
  for (let i = 0; i <= d3BaseRings.length - 1; i++) {
    let w1, w2, w3, w4;
  
    if (i < d3BaseRings.length - 1) {
      w1 = [d3BaseRings[i][0], d3BaseRings[i][1], 10];
      w2 = [d3BaseRings[i + 1][0], d3BaseRings[i + 1][1], 10];
      w3 = [d3BaseRings[i + 1][0], d3BaseRings[i + 1][1] + 0.00000000000001, 45];
      w4 = [d3BaseRings[i][0], d3BaseRings[i][1] + 0.00000000000001, 45];
    } else {
      w1 = [
        d3BaseRings[d3BaseRings.length - 1][0],
        d3BaseRings[d3BaseRings.length - 1][1],
        10,
      ];
      w2 = [d3BaseRings[0][0], d3BaseRings[0][1], 10];
      w3 = [d3BaseRings[0][0], d3BaseRings[0][1] + 0.00000000000001, 45];
      w4 = [
        d3BaseRings[d3BaseRings.length - 1][0],
        d3BaseRings[d3BaseRings.length - 1][1] + 0.00000000000001,
        45,
      ];
    }
  
    let w = {
      type: 'polygon',
      rings: [w1, w2, w3, w4],
    };
  
    d3Wall.push(w);
  }
  
  for (let i = 0; i <= 6; i++) {
    let l = [];
  
    if (i == 0) {
      for (let j = 0; j <= d3BaseRings.length; j++) {
        if (j < d3BaseRings.length) {
          l.push([d3BaseRings[j][0], d3BaseRings[j][1], 12.5]);
        } else {
          l.push([d3BaseRings[0][0], d3BaseRings[0][1], 12.5]);
        }
      }
    } else {
      for (let j = 0; j <= d3BaseRings.length; j++) {
        if (j < d3BaseRings.length) {
          l.push([d3BaseRings[j][0], d3BaseRings[j][1], 12.5 + i * 5]);
        } else {
          l.push([d3BaseRings[0][0], d3BaseRings[0][1], 12.5 + i * 5]);
        }
      }
    }
  
    let line = {
      type: 'polyline', // autocasts as new Polyline()
      paths: l,
    };
  
    d3Line.push(line);
  }
  
  export { d3Line, d3Wall, d3Roof, d3Base, d3Floor, d3BaseRings };