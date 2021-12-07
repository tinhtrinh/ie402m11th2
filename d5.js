const d5base = {
  type: "polygon",
  rings: [
    [106.78234398538766, 10.88469539775251, 0],
    [106.78225413138786, 10.884802731353705, 0],
    [106.78220311187708, 10.884760016161113, 0],
    [106.78219506524911, 10.884767918021593, 0],
    [106.78220713518925, 10.884779112322498, 0],
    [106.78218835972643, 10.884804793365001, 0],
    [106.78229430697509, 10.884891055310366, 0],
    [106.78217885152763, 10.885028131522978, 0],
    [106.78207491593511, 10.884940552642547, 0],
    [106.78207156317407, 10.884945820545854, 0],
    [106.7820601637865, 10.884934626251209, 0],
    [106.78205441535923, 10.884941898623977, 0],
    [106.7820047944957, 10.884899755394336, 0],
    [106.78200719015366, 10.884891824531206, 0],
    [106.78199914352714, 10.884887215114968, 0],
    [106.7820031668404, 10.884883264186712, 0],
    [106.78189587848688, 10.88479766072849, 0],
    [106.78201588481124, 10.884654667483675, 0],
    [106.78211476506215, 10.884737108806025, 0],
    [106.78213152887012, 10.884716695666803, 0],
    [106.78215298654628, 10.884732499388642, 0],
    [106.78215969206293, 10.884722622062469, 0],
    [106.78211007119975, 10.884683771243218, 0],
    [106.78220193685249, 10.884574462134307, 0],
  ],
};

const d5roof = {
  type: "polygon",
  rings: [
    [106.78234398538766, 10.88469539775251, 45],
    [106.78225413138786, 10.884802731353705, 45],
    [106.78220311187708, 10.884760016161113, 45],
    [106.78219506524911, 10.884767918021593, 45],
    [106.78220713518925, 10.884779112322498, 45],
    [106.78218835972643, 10.884804793365001, 45],
    [106.78229430697509, 10.884891055310366, 45],
    [106.78217885152763, 10.885028131522978, 45],
    [106.78207491593511, 10.884940552642547, 45],
    [106.78207156317407, 10.884945820545854, 45],
    [106.7820601637865, 10.884934626251209, 45],
    [106.78205441535923, 10.884941898623977, 45],
    [106.7820047944957, 10.884899755394336, 45],
    [106.78200719015366, 10.884891824531206, 45],
    [106.78199914352714, 10.884887215114968, 45],
    [106.7820031668404, 10.884883264186712, 45],
    [106.78189587848688, 10.88479766072849, 45],
    [106.78201588481124, 10.884654667483675, 45],
    [106.78211476506215, 10.884737108806025, 45],
    [106.78213152887012, 10.884716695666803, 45],
    [106.78215298654628, 10.884732499388642, 45],
    [106.78215969206293, 10.884722622062469, 45],
    [106.78211007119975, 10.884683771243218, 45],
    [106.78220193685249, 10.884574462134307, 45],
  ],
};

const d5floor = [];

for (let i = 0; i <= 23; i++) {
  let r1, r2, r3, r4;

  if (i < 23) {
    r1 = d5base.rings[i];
    r2 = d5base.rings[i + 1];
    r3 = [
      d5base.rings[i + 1][0],
      d5base.rings[i + 1][1] + 0.00000000000001,
      10,
    ];
    r4 = [d5base.rings[i][0], d5base.rings[i][1] + 0.00000000000001, 10];
  } else {
    r1 = d5base.rings[23];
    r2 = d5base.rings[0];
    r3 = [d5base.rings[0][0], d5base.rings[0][1] + 0.00000000000001, 10];
    r4 = [d5base.rings[23][0], d5base.rings[23][1] + 0.00000000000001, 10];
  }

  let f = {
    type: "polygon",
    rings: [r1, r2, r3, r4],
  };

  d5floor.push(f);
}

const d5wall = [];

for (let i = 0; i <= 23; i++) {
  let w1, w2, w3, w4;

  if (i < 23) {
    w1 = [d5base.rings[i][0], d5base.rings[i][1], 10];
    w2 = [d5base.rings[i + 1][0], d5base.rings[i + 1][1], 10];
    w3 = [
      d5base.rings[i + 1][0],
      d5base.rings[i + 1][1] + 0.00000000000001,
      45,
    ];
    w4 = [d5base.rings[i][0], d5base.rings[i][1] + 0.00000000000001, 45];
  } else {
    w1 = [d5base.rings[23][0], d5base.rings[23][1], 10];
    w2 = [d5base.rings[0][0], d5base.rings[0][1], 10];
    w3 = [d5base.rings[0][0], d5base.rings[0][1] + 0.00000000000001, 45];
    w4 = [d5base.rings[23][0], d5base.rings[23][1] + 0.00000000000001, 45];
  }

  let w = {
    type: "polygon",
    rings: [w1, w2, w3, w4],
  };

  d5wall.push(w);
}

const d5line = [];

for (let i = 0; i <= 6; i++) {
  let l = [];

  if (i == 0) {
    for (let j = 0; j <= 24; j++) {
      if (j < 24) {
        l.push([d5base.rings[j][0], d5base.rings[j][1], 12.5]);
      } else {
        l.push([d5base.rings[0][0], d5base.rings[0][1], 12.5]);
      }
    }
  } else {
    for (let j = 0; j <= 24; j++) {
      if (j < 24) {
        l.push([d5base.rings[j][0], d5base.rings[j][1], 12.5 + i * 5]);
      } else {
        l.push([d5base.rings[0][0], d5base.rings[0][1], 12.5 + i * 5]);
      }
    }
  }

  let line = {
    type: "polyline", // autocasts as new Polyline()
    paths: l,
  };

  d5line.push(line);
}

export { d5base, d5roof, d5floor, d5wall, d5line };
