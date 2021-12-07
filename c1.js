const c1base = {
  type: 'polygon',
  rings: [
    [106.78057387494717, 10.883013396445534, 0],
    [106.78074151299097, 10.883159581673258, 0],
    [106.7808836700521, 10.882984422788274, 0],
    [106.78071200869526, 10.88283955445974, 0],
  ],
};

const c1roof = {
  type: 'polygon',
  rings: [
    [106.78057387494717, 10.883013396445534, 45],
    [106.78074151299097, 10.883159581673258, 45],
    [106.7808836700521, 10.882984422788274, 45],
    [106.78071200869526, 10.88283955445974, 45],
  ],
};

const c1floor = [];

for (let i = 0; i <= c1base.rings.length - 1; i++) {
  let r1, r2, r3, r4;

  if (i < c1base.rings.length - 1) {
    r1 = c1base.rings[i];
    r2 = c1base.rings[i + 1];
    r3 = [
      c1base.rings[i + 1][0],
      c1base.rings[i + 1][1] + 0.00000000000001,
      10,
    ];
    r4 = [c1base.rings[i][0], c1base.rings[i][1] + 0.00000000000001, 10];
  } else {
    r1 = c1base.rings[c1base.rings.length - 1];
    r2 = c1base.rings[0];
    r3 = [c1base.rings[0][0], c1base.rings[0][1] + 0.00000000000001, 10];
    r4 = [
      c1base.rings[c1base.rings.length - 1][0],
      c1base.rings[c1base.rings.length - 1][1] + 0.00000000000001,
      10,
    ];
  }

  let f = {
    type: 'polygon',
    rings: [r1, r2, r3, r4],
  };

  c1floor.push(f);
}

const c1wall = [];

for (let i = 0; i <= c1base.rings.length - 1; i++) {
  let w1, w2, w3, w4;

  if (i < c1base.rings.length - 1) {
    w1 = [c1base.rings[i][0], c1base.rings[i][1], 10];
    w2 = [c1base.rings[i + 1][0], c1base.rings[i + 1][1], 10];
    w3 = [
      c1base.rings[i + 1][0],
      c1base.rings[i + 1][1] + 0.00000000000001,
      45,
    ];
    w4 = [c1base.rings[i][0], c1base.rings[i][1] + 0.00000000000001, 45];
  } else {
    w1 = [
      c1base.rings[c1base.rings.length - 1][0],
      c1base.rings[c1base.rings.length - 1][1],
      10,
    ];
    w2 = [c1base.rings[0][0], c1base.rings[0][1], 10];
    w3 = [c1base.rings[0][0], c1base.rings[0][1] + 0.00000000000001, 45];
    w4 = [
      c1base.rings[c1base.rings.length - 1][0],
      c1base.rings[c1base.rings.length - 1][1] + 0.00000000000001,
      45,
    ];
  }

  let w = {
    type: 'polygon',
    rings: [w1, w2, w3, w4],
  };

  c1wall.push(w);
}

const c1line = [];

for (let i = 0; i <= 6; i++) {
  let l = [];

  if (i == 0) {
    for (let j = 0; j <= c1base.rings.length; j++) {
      if (j < c1base.rings.length) {
        l.push([c1base.rings[j][0], c1base.rings[j][1], 12.5]);
      } else {
        l.push([c1base.rings[0][0], c1base.rings[0][1], 12.5]);
      }
    }
  } else {
    for (let j = 0; j <= c1base.rings.length; j++) {
      if (j < c1base.rings.length) {
        l.push([c1base.rings[j][0], c1base.rings[j][1], 12.5 + i * 5]);
      } else {
        l.push([c1base.rings[0][0], c1base.rings[0][1], 12.5 + i * 5]);
      }
    }
  }

  let line = {
    type: 'polyline', // autocasts as new Polyline()
    paths: l,
  };

  c1line.push(line);
}

export { c1base, c1roof, c1floor, c1wall, c1line };
