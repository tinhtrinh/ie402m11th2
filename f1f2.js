const f1f2base = {
    type: "polygon",
    rings: [
        [106.77965417110432, 10.885440203060194, 0],
        [106.779684346014, 10.885404644773041, 0],
        [106.7797024509238, 10.885420448458074, 0],
        [106.77967428773077, 10.885454031285997, 0]
    ]
}

const f1f2roof = {
    type: "polygon",
    rings: [
        [106.77965417110432, 10.885440203060194, 45],
        [106.779684346014, 10.885404644773041, 45],
        [106.7797024509238, 10.885420448458074, 45],
        [106.77967428773077, 10.885454031285997, 45]
    ]
}

const f1f2floor = []

for(let i = 0; i <= 3; i ++) {
    let r1, r2, r3, r4;

    if(i < 3) {
        r1 = f1f2base.rings[i];
        r2 = f1f2base.rings[i + 1];
        r3 = [f1f2base.rings[i + 1][0], f1f2base.rings[i + 1][1] + 0.000000000000010, 10];
        r4 = [f1f2base.rings[i][0], f1f2base.rings[i][1] + 0.000000000000010, 10];
    } else {
        r1 = f1f2base.rings[3];
        r2 = f1f2base.rings[0];
        r3 = [f1f2base.rings[0][0], f1f2base.rings[0][1] + 0.000000000000010, 10];
        r4 = [f1f2base.rings[3][0], f1f2base.rings[3][1] + 0.000000000000010, 10];
    }

    let f = {
        type: "polygon",
        rings: [r1, r2, r3, r4]
    }

    f1f2floor.push(f)
}

const f1f2wall = []

for(let i = 0; i <= 3; i ++) {
    let w1, w2, w3, w4;

    if(i < 3) {
        w1 = [f1f2base.rings[i][0], f1f2base.rings[i][1], 10];
        w2 = [f1f2base.rings[i + 1][0], f1f2base.rings[i + 1][1], 10];
        w3 = [f1f2base.rings[i + 1][0], f1f2base.rings[i + 1][1] + 0.000000000000010, 45];
        w4 = [f1f2base.rings[i][0], f1f2base.rings[i][1] + 0.000000000000010, 45];
    } else {
        w1 = [f1f2base.rings[3][0], f1f2base.rings[3][1], 10];
        w2 = [f1f2base.rings[0][0], f1f2base.rings[0][1], 10];
        w3 = [f1f2base.rings[0][0], f1f2base.rings[0][1] + 0.000000000000010, 45];
        w4 = [f1f2base.rings[3][0], f1f2base.rings[3][1] + 0.000000000000010, 45];
    }

    let w = {
        type: "polygon",
        rings: [w1, w2, w3, w4]
    }

    f1f2wall.push(w)
}

const f1f2line = [];

for(let i = 0; i <= 6; i++) {
    let l = [];

    if(i == 0) {
        for(let j = 0; j <= 4; j++) {
            if(j < 4) {
                l.push([f1f2base.rings[j][0], f1f2base.rings[j][1], 12.5])
            } else {
                l.push([f1f2base.rings[0][0], f1f2base.rings[0][1], 12.5])
            }
        }
    } else {
        for(let j = 0; j <= 4; j++) {
            if(j < 4) {
                l.push([f1f2base.rings[j][0], f1f2base.rings[j][1], 12.5 + i * 5])
            } else {
                l.push([f1f2base.rings[0][0], f1f2base.rings[0][1], 12.5 + i * 5])
            }
        }
    }

    let line = {
        type: "polyline", // autocasts as new Polyline()
        paths: l
    };

    f1f2line.push(line);
}

export { f1f2base, f1f2roof, f1f2floor, f1f2wall, f1f2line }