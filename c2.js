const c2BaseRings = [
  [106.78033247614586, 10.883297206446121, 0],
  [106.78050212584617, 10.883443391534625, 0],
  [106.7806476356682, 10.883268891308077, 0],
  [106.78047463320699, 10.88312994954519, 0],
];

const c2RoofRings = [
  [106.78033247614586, 10.883297206446121, 45],
  [106.78050212584617, 10.883443391534625, 45],
  [106.7806476356682, 10.883268891308077, 45],
  [106.78047463320699, 10.88312994954519, 45],
];

const c2base = {
  type: 'polygon',
  rings: c2BaseRings,
};

const c2roof = {
  type: 'polygon',
  rings: c2RoofRings,
};

const c2floor = [];

for (let i = 0; i <= c2BaseRings.length - 1; i++) {
  let r1, r2, r3, r4;

  if (i < c2BaseRings.length - 1) {
    r1 = c2base.rings[i];
    r2 = c2base.rings[i + 1];
    r3 = [
      c2base.rings[i + 1][0],
      c2base.rings[i + 1][1] + 0.00000000000001,
      10,
    ];
    r4 = [c2base.rings[i][0], c2base.rings[i][1] + 0.00000000000001, 10];
  } else {
    r1 = c2base.rings[c2BaseRings.length - 1];
    r2 = c2base.rings[0];
    r3 = [c2base.rings[0][0], c2base.rings[0][1] + 0.00000000000001, 10];
    r4 = [
      c2base.rings[c2BaseRings.length - 1][0],
      c2base.rings[c2BaseRings.length - 1][1] + 0.00000000000001,
      10,
    ];
  }

  let f = {
    type: 'polygon',
    rings: [r1, r2, r3, r4],
  };

  c2floor.push(f);
}

const c2wall = [];

for (let i = 0; i <= c2BaseRings.length - 1; i++) {
  let w1, w2, w3, w4;

  if (i < c2BaseRings.length - 1) {
    w1 = [c2base.rings[i][0], c2base.rings[i][1], 10];
    w2 = [c2base.rings[i + 1][0], c2base.rings[i + 1][1], 10];
    w3 = [
      c2base.rings[i + 1][0],
      c2base.rings[i + 1][1] + 0.00000000000001,
      45,
    ];
    w4 = [c2base.rings[i][0], c2base.rings[i][1] + 0.00000000000001, 45];
  } else {
    w1 = [
      c2base.rings[c2BaseRings.length - 1][0],
      c2base.rings[c2BaseRings.length - 1][1],
      10,
    ];
    w2 = [c2base.rings[0][0], c2base.rings[0][1], 10];
    w3 = [c2base.rings[0][0], c2base.rings[0][1] + 0.00000000000001, 45];
    w4 = [
      c2base.rings[c2BaseRings.length - 1][0],
      c2base.rings[c2BaseRings.length - 1][1] + 0.00000000000001,
      45,
    ];
  }

  let w = {
    type: 'polygon',
    rings: [w1, w2, w3, w4],
  };

  c2wall.push(w);
}

const c2line = [];

for (let i = 0; i <= 6; i++) {
  let l = [];

  if (i == 0) {
    for (let j = 0; j <= c2BaseRings.length; j++) {
      if (j < c2BaseRings.length) {
        l.push([c2base.rings[j][0], c2base.rings[j][1], 12.5]);
      } else {
        l.push([c2base.rings[0][0], c2base.rings[0][1], 12.5]);
      }
    }
  } else {
    for (let j = 0; j <= c2BaseRings.length; j++) {
      if (j < c2BaseRings.length) {
        l.push([c2base.rings[j][0], c2base.rings[j][1], 12.5 + i * 5]);
      } else {
        l.push([c2base.rings[0][0], c2base.rings[0][1], 12.5 + i * 5]);
      }
    }
  }

  let line = {
    type: 'polyline', // autocasts as new Polyline()
    paths: l,
  };

  c2line.push(line);
}

export { c2base, c2roof, c2floor, c2wall, c2line };
