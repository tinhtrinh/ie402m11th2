const e1base = {
    type: "polygon", // autocasts as new Polygon()
    rings: [
        [106.77938230780805, 10.88452818796133, 0],
        [106.77954921183314, 10.884518220985015, 0],
        [106.77954357318364, 10.88438200560856, 0],
        [106.77954244545373, 10.884363179088203, 0],
        [106.77953342361457, 10.88434656745162, 0],
        [106.77954470091355, 10.884335493026727, 0],
        [106.77955033956303, 10.884342137681713, 0],
        [106.77966987893234, 10.884264616697582, 0],
        [106.77957627735073, 10.884121756545435, 0],
        [106.77945673798139, 10.884197062680682, 0],
        [106.77946237663089, 10.884209244553725, 0],
        [106.77944433295251, 10.884220318983317, 0],
        [106.77943756657312, 10.884199277566726, 0],
        [106.77942177835455, 10.884191525465512, 0],
        [106.77929321714605, 10.884132830978292, 0],
        [106.779215403783, 10.884277906010594, 0],
        [106.7793454916597, 10.88434124124426, 0],
        [106.77936426712158, 10.884309633758878, 0],
        [106.7794058413586, 10.884383384552903, 0],
        [106.77937499595693, 10.884391286422606, 0],
    ]
};

const e1roof = {
    type: "polygon", // autocasts as new Polygon()
    rings: [
        [106.77938230780805, 10.88452818796133, 45],
        [106.77954921183314, 10.884518220985015, 45],
        [106.77954357318364, 10.88438200560856, 45],
        [106.77954244545373, 10.884363179088203, 45],
        [106.77953342361457, 10.88434656745162, 45],
        [106.77954470091355, 10.884335493026727, 45],
        [106.77955033956303, 10.884342137681713, 45],
        [106.77966987893234, 10.884264616697582, 45],
        [106.77957627735073, 10.884121756545435, 45],
        [106.77945673798139, 10.884197062680682, 45],
        [106.77946237663089, 10.884209244553725, 45],
        [106.77944433295251, 10.884220318983317, 45],
        [106.77943756657312, 10.884199277566726, 45],
        [106.77942177835455, 10.884191525465512, 45],
        [106.77929321714605, 10.884132830978292, 45],
        [106.779215403783, 10.884277906010594, 45],
        [106.7793454916597, 10.88434124124426, 45],
        [106.77936426712158, 10.884309633758878, 45],
        [106.7794058413586, 10.884383384552903, 45],
        [106.77937499595693, 10.884391286422606, 45],
    ]
};

const e1wallSymbol = {
    type: "simple-fill", // autocasts as new SimpleFillSymbol()
    color: [153, 255, 255, 1],
    outline: {
        // autocasts as new SimpleLineSymbol()
        color: [0, 0, 0],
        width: 2
    }
};

const e1floorSymbol = {
    type: "simple-fill", // autocasts as new SimpleFillSymbol()
    color: [0, 51, 51, 1],
    outline: {
        // autocasts as new SimpleLineSymbol()
        color: [0, 51, 51],
        width: 2
    }
};

const e1floor = []

for(let i = 0; i <= 19; i ++) {
    let r1, r2, r3, r4;

    if(i < 19) {
        r1 = e1base.rings[i];
        r2 = e1base.rings[i + 1];
        r3 = [e1base.rings[i + 1][0], e1base.rings[i + 1][1] + 0.000000000000010, 10];
        r4 = [e1base.rings[i][0], e1base.rings[i][1] + 0.000000000000010, 10];
    } else {
        r1 = e1base.rings[19];
        r2 = e1base.rings[0];
        r3 = [e1base.rings[0][0], e1base.rings[0][1] + 0.000000000000010, 10];
        r4 = [e1base.rings[19][0], e1base.rings[19][1] + 0.000000000000010, 10];
    }

    let f = {
        type: "polygon",
        rings: [r1, r2, r3, r4]
    }

    e1floor.push(f)
}

const e1wall = []

for(let i = 0; i <= 19; i ++) {
    let w1, w2, w3, w4;

    if(i < 19) {
        w1 = [e1base.rings[i][0], e1base.rings[i][1], 10];
        w2 = [e1base.rings[i + 1][0], e1base.rings[i + 1][1], 10];
        w3 = [e1base.rings[i + 1][0], e1base.rings[i + 1][1] + 0.000000000000010, 45];
        w4 = [e1base.rings[i][0], e1base.rings[i][1] + 0.000000000000010, 45];
    } else {
        w1 = [e1base.rings[19][0], e1base.rings[19][1], 10];
        w2 = [e1base.rings[0][0], e1base.rings[0][1], 10];
        w3 = [e1base.rings[0][0], e1base.rings[0][1] + 0.000000000000010, 45];
        w4 = [e1base.rings[19][0], e1base.rings[19][1] + 0.000000000000010, 45];
    }

    let w = {
        type: "polygon",
        rings: [w1, w2, w3, w4]
    }

    e1wall.push(w)
}

const e1lineSymbol = {
    type: "simple-line", // autocasts as SimpleLineSymbol()
    color: [0, 51, 51],
    width: 5
};

const e1line = [];

for(let i = 0; i <= 6; i++) {
    let l = [];

    if(i == 0) {
        for(let j = 0; j <= 20; j++) {
            if(j < 20) {
                l.push([e1base.rings[j][0], e1base.rings[j][1], 12.5])
            } else {
                l.push([e1base.rings[0][0], e1base.rings[0][1], 12.5])
            }
        }
    } else {
        for(let j = 0; j <= 20; j++) {
            if(j < 20) {
                l.push([e1base.rings[j][0], e1base.rings[j][1], 12.5 + i * 5])
            } else {
                l.push([e1base.rings[0][0], e1base.rings[0][1], 12.5 + i * 5])
            }
        }
    }

    let line = {
        type: "polyline", // autocasts as new Polyline()
        paths: l
    };

    e1line.push(line);
}

const e1doorSymbol = {
    type: "simple-fill", // autocasts as new SimpleFillSymbol()
    color: [255, 255, 255, 1],
    outline: {
        // autocasts as new SimpleLineSymbol()
        color: [255, 255, 255],
        width: 2
    }
};

const e1sideWin1 = {
    type: "polygon",
    rings: [
        [106.77945626600045, 10.884523819163455, 0],
        [106.77947594629364, 10.884522670433181, 0],
    ]
}

const e1sideWindow1 = [] 

for(let i = 0; i <= 13; i++) {
    let w1 = [e1sideWin1.rings[0][0], e1sideWin1.rings[0][1], 11 + i * 2.5]
    let w2 = [e1sideWin1.rings[1][0], e1sideWin1.rings[1][1], 11 + i * 2.5 ]
    let w3 = [e1sideWin1.rings[1][0], e1sideWin1.rings[1][1] + 0.000000000000010, 12 + i * 2.5 ]
    let w4 = [e1sideWin1.rings[0][0], e1sideWin1.rings[0][1] + 0.000000000000010, 12 + i * 2.5 ]
    
    let w = {
        type: "polygon",
        rings: [w1, w2, w3, w4]
    }

    e1sideWindow1.push(w)
}

const e1sideWin2 = {
    type: "polygon",
    rings: [
        [106.77925177702026, 10.88420999991657, 0],
        [106.77926113530341, 10.88419198910902, 0],
    ]
}

const e1sideWindow2 = [] 

for(let i = 0; i <= 13; i++) {
    let w1 = [e1sideWin2.rings[0][0], e1sideWin2.rings[0][1], 11 + i * 2.5]
    let w2 = [e1sideWin2.rings[1][0], e1sideWin2.rings[1][1], 11 + i * 2.5 ]
    let w3 = [e1sideWin2.rings[1][0], e1sideWin2.rings[1][1] + 0.000000000000010, 12 + i * 2.5 ]
    let w4 = [e1sideWin2.rings[0][0], e1sideWin2.rings[0][1] + 0.000000000000010, 12 + i * 2.5 ]
    
    let w = {
        type: "polygon",
        rings: [w1, w2, w3, w4]
    }

    e1sideWindow2.push(w)
}

const e1sideWin3 = {
    type: "polygon",
    rings: [
        [106.77963309569033, 10.884205478624775, 0],
        [106.77961700243718, 10.884182431489842, 0],
    ]
}

const e1sideWindow3 = [] 

for(let i = 0; i <= 13; i++) {
    let w1 = [e1sideWin3.rings[0][0], e1sideWin3.rings[0][1], 11 + i * 2.5]
    let w2 = [e1sideWin3.rings[1][0], e1sideWin3.rings[1][1], 11 + i * 2.5 ]
    let w3 = [e1sideWin3.rings[1][0], e1sideWin3.rings[1][1] + 0.000000000000010, 12 + i * 2.5 ]
    let w4 = [e1sideWin3.rings[0][0], e1sideWin3.rings[0][1] + 0.000000000000010, 12 + i * 2.5 ]
    
    let w = {
        type: "polygon",
        rings: [w1, w2, w3, w4]
    }

    e1sideWindow3.push(w)
}

export { e1base, e1wallSymbol, e1roof, e1floorSymbol, e1floor, e1wall, e1lineSymbol, e1line, e1sideWindow1, e1doorSymbol, e1sideWindow2, e1sideWindow3 }