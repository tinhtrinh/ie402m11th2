const g1base = {
    type: "polygon",
    rings: [
        [106.78089974130954, 10.88566628082739, 0],
        [106.78103653396138, 10.88556158148481, 0],
        [106.78095465332974, 10.885451346607843, 0],
        [106.78094191283768, 10.885433567463947, 0],
        [106.78092713263267, 10.885429051788796, 0],
        [106.78092914428933, 10.885412589617356, 0],
        [106.78093853202034, 10.885414565077975, 0],
        [106.78099418785682, 10.885284843132963, 0],
        [106.78083660808632, 10.885217677435211, 0],
        [106.78078028170026, 10.885347399406482, 0],
        [106.7807910105357, 10.885351350328579, 0],
        [106.78078095225247, 10.885367812503414, 0],
        [106.78076687065595, 10.885361886120574, 0],
        [106.78075010685058, 10.885361886120574, 0],
        [106.78060593812437, 10.88537900678179, 0],
        [106.78062297310159, 10.885548542330197, 0],
        [106.78076781238, 10.885531421678738, 0],
        [106.78076244796229, 10.885486644585637, 0],
        [106.7808429142281, 10.88552483681253, 0],
        [106.78081475103507, 10.885551176276495, 0]
    ]
}

const g1roof = {
    type: "polygon",
    rings: [
        [106.78089974130954, 10.88566628082739, 45],
        [106.78103653396138, 10.88556158148481, 45],
        [106.78095465332974, 10.885451346607843, 45],
        [106.78094191283768, 10.885433567463947, 45],
        [106.78092713263267, 10.885429051788796, 45],
        [106.78092914428933, 10.885412589617356, 45],
        [106.78093853202034, 10.885414565077975, 45],
        [106.78099418785682, 10.885284843132963, 45],
        [106.78083660808632, 10.885217677435211, 45],
        [106.78078028170026, 10.885347399406482, 45],
        [106.7807910105357, 10.885351350328579, 45],
        [106.78078095225247, 10.885367812503414, 45],
        [106.78076687065595, 10.885361886120574, 45],
        [106.78075010685058, 10.885361886120574, 45],
        [106.78060593812437, 10.88537900678179, 45],
        [106.78062297310159, 10.885548542330197, 45],
        [106.78076781238, 10.885531421678738, 45],
        [106.78076244796229, 10.885486644585637, 45],
        [106.7808429142281, 10.88552483681253, 45],
        [106.78081475103507, 10.885551176276495, 45]
    ]
}

const g1floor = []

for(let i = 0; i <= 19; i ++) {
    let r1, r2, r3, r4;

    if(i < 19) {
        r1 = g1base.rings[i];
        r2 = g1base.rings[i + 1];
        r3 = [g1base.rings[i + 1][0], g1base.rings[i + 1][1] + 0.000000000000010, 10];
        r4 = [g1base.rings[i][0], g1base.rings[i][1] + 0.000000000000010, 10];
    } else {
        r1 = g1base.rings[19];
        r2 = g1base.rings[0];
        r3 = [g1base.rings[0][0], g1base.rings[0][1] + 0.000000000000010, 10];
        r4 = [g1base.rings[19][0], g1base.rings[19][1] + 0.000000000000010, 10];
    }

    let f = {
        type: "polygon",
        rings: [r1, r2, r3, r4]
    }

    g1floor.push(f)
}

const g1wall = []

for(let i = 0; i <= 19; i ++) {
    let w1, w2, w3, w4;

    if(i < 19) {
        w1 = [g1base.rings[i][0], g1base.rings[i][1], 10];
        w2 = [g1base.rings[i + 1][0], g1base.rings[i + 1][1], 10];
        w3 = [g1base.rings[i + 1][0], g1base.rings[i + 1][1] + 0.000000000000010, 45];
        w4 = [g1base.rings[i][0], g1base.rings[i][1] + 0.000000000000010, 45];
    } else {
        w1 = [g1base.rings[19][0], g1base.rings[19][1], 10];
        w2 = [g1base.rings[0][0], g1base.rings[0][1], 10];
        w3 = [g1base.rings[0][0], g1base.rings[0][1] + 0.000000000000010, 45];
        w4 = [g1base.rings[19][0], g1base.rings[19][1] + 0.000000000000010, 45];
    }

    let w = {
        type: "polygon",
        rings: [w1, w2, w3, w4]
    }

    g1wall.push(w)
}

const g1line = [];

for(let i = 0; i <= 6; i++) {
    let l = [];

    if(i == 0) {
        for(let j = 0; j <= 20; j++) {
            if(j < 20) {
                l.push([g1base.rings[j][0], g1base.rings[j][1], 12.5])
            } else {
                l.push([g1base.rings[0][0], g1base.rings[0][1], 12.5])
            }
        }
    } else {
        for(let j = 0; j <= 20; j++) {
            if(j < 20) {
                l.push([g1base.rings[j][0], g1base.rings[j][1], 12.5 + i * 5])
            } else {
                l.push([g1base.rings[0][0], g1base.rings[0][1], 12.5 + i * 5])
            }
        }
    }

    let line = {
        type: "polyline", // autocasts as new Polyline()
        paths: l
    };

    g1line.push(line);
}

export { g1base, g1roof, g1floor, g1wall, g1line }