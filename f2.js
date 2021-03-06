const f2base = {
    type: "polygon",
    rings: [
        [106.77963306492705, 10.885500630334363, 0],
        [106.77974035328145, 10.885594793914976, 0],
        [106.77974907046023, 10.885584916617708, 0],
        [106.77976114040011, 10.885595452401445, 0],
        [106.77975041156468, 10.885609280617047, 0],
        [106.7797470588036, 10.88562245034558, 0],
        [106.77972454924823, 10.885768123011381, 0],
        [106.77988950509311, 10.885795120939866, 0],
        [106.77991364497284, 10.88565815581394, 0],
        [106.77988145846653, 10.885648278518783, 0],
        [106.77993174988265, 10.88558177138946, 0],
        [106.7799471725836, 10.885617988144887, 0],
        [106.78008061247571, 10.885569260143898, 0],
        [106.78002428608966, 10.885409247874122, 0],
        [106.7798962106166, 10.885454024978854, 0],
        [106.77987140018465, 10.885464560767224, 0],
        [106.77985933024478, 10.88547509655522, 0],
        [106.77984658975271, 10.885466536227495, 0],
        [106.77985195416991, 10.885458634384978, 0],
        [106.7797433247111, 10.885370397144104, 0]
    ]
}

const f2roof = {
    type: "polygon",
    rings: [
        [106.77963306492705, 10.885500630334363, 45],
        [106.77974035328145, 10.885594793914976, 45],
        [106.77974907046023, 10.885584916617708, 45],
        [106.77976114040011, 10.885595452401445, 45],
        [106.77975041156468, 10.885609280617047, 45],
        [106.7797470588036, 10.88562245034558, 45],
        [106.77972454924823, 10.885768123011381, 45],
        [106.77988950509311, 10.885795120939866, 45],
        [106.77991364497284, 10.88565815581394, 45],
        [106.77988145846653, 10.885648278518783, 45],
        [106.77993174988265, 10.88558177138946, 45],
        [106.7799471725836, 10.885617988144887, 45],
        [106.78008061247571, 10.885569260143898, 45],
        [106.78002428608966, 10.885409247874122, 45],
        [106.7798962106166, 10.885454024978854, 45],
        [106.77987140018465, 10.885464560767224, 45],
        [106.77985933024478, 10.88547509655522, 45],
        [106.77984658975271, 10.885466536227495, 45],
        [106.77985195416991, 10.885458634384978, 45],
        [106.7797433247111, 10.885370397144104, 45]
    ]
}

const f2floor = []

for(let i = 0; i <= 19; i ++) {
    let r1, r2, r3, r4;

    if(i < 19) {
        r1 = f2base.rings[i];
        r2 = f2base.rings[i + 1];
        r3 = [f2base.rings[i + 1][0], f2base.rings[i + 1][1] + 0.000000000000010, 10];
        r4 = [f2base.rings[i][0], f2base.rings[i][1] + 0.000000000000010, 10];
    } else {
        r1 = f2base.rings[19];
        r2 = f2base.rings[0];
        r3 = [f2base.rings[0][0], f2base.rings[0][1] + 0.000000000000010, 10];
        r4 = [f2base.rings[19][0], f2base.rings[19][1] + 0.000000000000010, 10];
    }

    let f = {
        type: "polygon",
        rings: [r1, r2, r3, r4]
    }

    f2floor.push(f)
}

const f2wall = []

for(let i = 0; i <= 19; i ++) {
    let w1, w2, w3, w4;

    if(i < 19) {
        w1 = [f2base.rings[i][0], f2base.rings[i][1], 10];
        w2 = [f2base.rings[i + 1][0], f2base.rings[i + 1][1], 10];
        w3 = [f2base.rings[i + 1][0], f2base.rings[i + 1][1] + 0.000000000000010, 45];
        w4 = [f2base.rings[i][0], f2base.rings[i][1] + 0.000000000000010, 45];
    } else {
        w1 = [f2base.rings[19][0], f2base.rings[19][1], 10];
        w2 = [f2base.rings[0][0], f2base.rings[0][1], 10];
        w3 = [f2base.rings[0][0], f2base.rings[0][1] + 0.000000000000010, 45];
        w4 = [f2base.rings[19][0], f2base.rings[19][1] + 0.000000000000010, 45];
    }

    let w = {
        type: "polygon",
        rings: [w1, w2, w3, w4]
    }

    f2wall.push(w)
}

const f2line = [];

for(let i = 0; i <= 6; i++) {
    let l = [];

    if(i == 0) {
        for(let j = 0; j <= 20; j++) {
            if(j < 20) {
                l.push([f2base.rings[j][0], f2base.rings[j][1], 12.5])
            } else {
                l.push([f2base.rings[0][0], f2base.rings[0][1], 12.5])
            }
        }
    } else {
        for(let j = 0; j <= 20; j++) {
            if(j < 20) {
                l.push([f2base.rings[j][0], f2base.rings[j][1], 12.5 + i * 5])
            } else {
                l.push([f2base.rings[0][0], f2base.rings[0][1], 12.5 + i * 5])
            }
        }
    }

    let line = {
        type: "polyline", // autocasts as new Polyline()
        paths: l
    };

    f2line.push(line);
}

export { f2base, f2roof, f2floor, f2wall, f2line }