const d4BaseRings = [
    [106.78096718880866, 10.884880110716093, 0],
    [106.78113885016553, 10.885025636540293, 0],
    [106.78128570109192, 10.884851137240343, 0],
    [106.78111001642199, 10.884707586796203, 0],
  ];
  
  const roofRings = [
    [106.78096718880866, 10.884880110716093, 45],
    [106.78113885016553, 10.885025636540293, 45],
    [106.78128570109192, 10.884851137240343, 45],
    [106.78111001642199, 10.884707586796203, 45],
  ];
  
  const d4Base = {
    type: 'polygon',
    rings: d4BaseRings,
  };
  
  const d4Roof = {
    type: 'polygon',
    rings: roofRings,
  };
  
  const d4Floor = [],
    d4Wall = [],
    d4Line = [];
  
  for (let i = 0; i <= d4BaseRings.length - 1; i++) {
    let r1, r2, r3, r4;
    if (i < d4BaseRings.length - 1) {
      r1 = d4Base.rings[i];
      r2 = d4Base.rings[i + 1];
      r3 = [
        d4Base.rings[i + 1][0],
        d4Base.rings[i + 1][1] + 0.00000000000001,
        10,
      ];
      r4 = [d4Base.rings[i][0], d4Base.rings[i][1] + 0.00000000000001, 10];
    } else {
      r1 = d4Base.rings[d4BaseRings.length - 1];
      r2 = d4Base.rings[0];
      r3 = [d4Base.rings[0][0], d4Base.rings[0][1] + 0.00000000000001, 10];
      r4 = [
        d4Base.rings[d4BaseRings.length - 1][0],
        d4Base.rings[d4BaseRings.length - 1][1] + 0.00000000000001,
        10,
      ];
    }
  
    let f = {
      type: 'polygon',
      rings: [r1, r2, r3, r4],
    };
  
    d4Floor.push(f);
  }
  
  for (let i = 0; i <= d4BaseRings.length - 1; i++) {
    let w1, w2, w3, w4;
  
    if (i < d4BaseRings.length - 1) {
      w1 = [d4BaseRings[i][0], d4BaseRings[i][1], 10];
      w2 = [d4BaseRings[i + 1][0], d4BaseRings[i + 1][1], 10];
      w3 = [d4BaseRings[i + 1][0], d4BaseRings[i + 1][1] + 0.00000000000001, 45];
      w4 = [d4BaseRings[i][0], d4BaseRings[i][1] + 0.00000000000001, 45];
    } else {
      w1 = [
        d4BaseRings[d4BaseRings.length - 1][0],
        d4BaseRings[d4BaseRings.length - 1][1],
        10,
      ];
      w2 = [d4BaseRings[0][0], d4BaseRings[0][1], 10];
      w3 = [d4BaseRings[0][0], d4BaseRings[0][1] + 0.00000000000001, 45];
      w4 = [
        d4BaseRings[d4BaseRings.length - 1][0],
        d4BaseRings[d4BaseRings.length - 1][1] + 0.00000000000001,
        45,
      ];
    }
  
    let w = {
      type: 'polygon',
      rings: [w1, w2, w3, w4],
    };
  
    d4Wall.push(w);
  }
  
  for (let i = 0; i <= 6; i++) {
    let l = [];
  
    if (i == 0) {
      for (let j = 0; j <= d4BaseRings.length; j++) {
        if (j < d4BaseRings.length) {
          l.push([d4BaseRings[j][0], d4BaseRings[j][1], 12.5]);
        } else {
          l.push([d4BaseRings[0][0], d4BaseRings[0][1], 12.5]);
        }
      }
    } else {
      for (let j = 0; j <= d4BaseRings.length; j++) {
        if (j < d4BaseRings.length) {
          l.push([d4BaseRings[j][0], d4BaseRings[j][1], 12.5 + i * 5]);
        } else {
          l.push([d4BaseRings[0][0], d4BaseRings[0][1], 12.5 + i * 5]);
        }
      }
    }
  
    let line = {
      type: 'polyline', // autocasts as new Polyline()
      paths: l,
    };
  
    d4Line.push(line);
  }
  
  export { d4Line, d4Wall, d4Roof, d4Base, d4Floor, d4BaseRings };