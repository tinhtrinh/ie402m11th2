const d2BaseRings = [
  [106.78152173552753, 10.884309201010103, 0],
  [106.7815438637493, 10.884328955688899, 0],
  [106.78153447601886, 10.884347393387921, 0],
  [106.7816605398278, 10.88444616675612, 0],
  [106.7816605398278, 10.884444191289067, 0],
  [106.78167193921477, 10.884436289420762, 0],
  [106.78169674964526, 10.884453410135169, 0],
  [106.78181744903682, 10.884313810435273, 0],
  [106.78179666191937, 10.884290104819353, 0],
  [106.78180537909765, 10.884274959563756, 0],
  [106.78168132694523, 10.884170259732272, 0],
  [106.78166724534955, 10.88418277103482, 0],
  [106.78164243491906, 10.884166308794502, 0],
];

const roofRings = [
  [106.78152173552753, 10.884309201010103, 45],
  [106.7815438637493, 10.884328955688899, 45],
  [106.78153447601886, 10.884347393387921, 45],
  [106.7816605398278, 10.88444616675612, 45],
  [106.7816605398278, 10.884444191289067, 45],
  [106.78167193921477, 10.884436289420762, 45],
  [106.78169674964526, 10.884453410135169, 45],
  [106.78181744903682, 10.884313810435273, 45],
  [106.78179666191937, 10.884290104819353, 45],
  [106.78180537909765, 10.884274959563756, 45],
  [106.78168132694523, 10.884170259732272, 45],
  [106.78166724534955, 10.88418277103482, 45],
  [106.78164243491906, 10.884166308794502, 45],
];

const d2Base = {
  type: 'polygon',
  rings: d2BaseRings,
};

const d2Roof = {
  type: 'polygon',
  rings: roofRings,
};

const d2Floor = [],
  d2Wall = [],
  d2Line = [];

for (let i = 0; i <= d2BaseRings.length - 1; i++) {
  let r1, r2, r3, r4;
  if (i < d2BaseRings.length - 1) {
    r1 = d2Base.rings[i];
    r2 = d2Base.rings[i + 1];
    r3 = [
      d2Base.rings[i + 1][0],
      d2Base.rings[i + 1][1] + 0.00000000000001,
      10,
    ];
    r4 = [d2Base.rings[i][0], d2Base.rings[i][1] + 0.00000000000001, 10];
  } else {
    r1 = d2Base.rings[d2BaseRings.length - 1];
    r2 = d2Base.rings[0];
    r3 = [d2Base.rings[0][0], d2Base.rings[0][1] + 0.00000000000001, 10];
    r4 = [
      d2Base.rings[d2BaseRings.length - 1][0],
      d2Base.rings[d2BaseRings.length - 1][1] + 0.00000000000001,
      10,
    ];
  }

  let f = {
    type: 'polygon',
    rings: [r1, r2, r3, r4],
  };

  d2Floor.push(f);
}

for (let i = 0; i <= d2BaseRings.length - 1; i++) {
  let w1, w2, w3, w4;

  if (i < d2BaseRings.length - 1) {
    w1 = [d2BaseRings[i][0], d2BaseRings[i][1], 10];
    w2 = [d2BaseRings[i + 1][0], d2BaseRings[i + 1][1], 10];
    w3 = [d2BaseRings[i + 1][0], d2BaseRings[i + 1][1] + 0.00000000000001, 45];
    w4 = [d2BaseRings[i][0], d2BaseRings[i][1] + 0.00000000000001, 45];
  } else {
    w1 = [
      d2BaseRings[d2BaseRings.length - 1][0],
      d2BaseRings[d2BaseRings.length - 1][1],
      10,
    ];
    w2 = [d2BaseRings[0][0], d2BaseRings[0][1], 10];
    w3 = [d2BaseRings[0][0], d2BaseRings[0][1] + 0.00000000000001, 45];
    w4 = [
      d2BaseRings[d2BaseRings.length - 1][0],
      d2BaseRings[d2BaseRings.length - 1][1] + 0.00000000000001,
      45,
    ];
  }

  let w = {
    type: 'polygon',
    rings: [w1, w2, w3, w4],
  };

  d2Wall.push(w);
}

for (let i = 0; i <= 6; i++) {
  let l = [];

  if (i == 0) {
    for (let j = 0; j <= d2BaseRings.length; j++) {
      if (j < d2BaseRings.length) {
        l.push([d2BaseRings[j][0], d2BaseRings[j][1], 12.5]);
      } else {
        l.push([d2BaseRings[0][0], d2BaseRings[0][1], 12.5]);
      }
    }
  } else {
    for (let j = 0; j <= d2BaseRings.length; j++) {
      if (j < d2BaseRings.length) {
        l.push([d2BaseRings[j][0], d2BaseRings[j][1], 12.5 + i * 5]);
      } else {
        l.push([d2BaseRings[0][0], d2BaseRings[0][1], 12.5 + i * 5]);
      }
    }
  }

  let line = {
    type: 'polyline', // autocasts as new Polyline()
    paths: l,
  };

  d2Line.push(line);
}

export { d2Line, d2Wall, d2Roof, d2Base, d2Floor, d2BaseRings };
