import {
  e1base,
  e1wallSymbol,
  e1roof,
  e1floorSymbol,
  e1floor,
  e1wall,
  e1lineSymbol,
  e1line,
  e1sideWindow1,
  e1doorSymbol,
  e1sideWindow2,
  e1sideWindow3,
} from './e1.js';
import { g1base, g1roof, g1floor, g1wall, g1line } from './g1.js';
import { f1base, f1roof, f1floor, f1wall, f1line } from './f1.js';
import { f2base, f2roof, f2floor, f2wall, f2line } from './f2.js';
import { f1f2base, f1f2roof, f1f2floor, f1f2wall, f1f2line } from './f1f2.js';

import { c4base, c4roof, c4floor, c4wall, c4line } from './c4.js';

import { d6base, d6roof, d6floor, d6wall, d6line } from './d6.js';
import { c6base, c6roof, c6floor, c6wall, c6line } from './c6.js';
import { d5base, d5roof, d5floor, d5wall, d5line } from './d5.js';
import { c5base, c5roof, c5floor, c5wall, c5line } from './c5.js';

import { b1base, b1roof, b1floor, b1wall } from './b1.js';
import { ba1base, ba1roof, ba1floor, ba1wall, ba1line } from './ba1.js';
import { ba2base, ba2roof, ba2floor, ba2wall, ba2line } from './ba2.js';
import { b4base, b4roof, b4floor, b4wall, b4line } from './b4.js';
import { b3base, b3roof, b3floor, b3wall, b3line } from './b3.js';
import { d2Base, d2BaseRings, d2Floor, d2Line, d2Roof, d2Wall } from './d2.js';
import { d3Base, d3BaseRings, d3Floor, d3Line, d3Roof, d3Wall } from './d3.js';
import { d4Base, d4BaseRings, d4Floor, d4Line, d4Roof, d4Wall } from './d4.js';
import { c2base, c2floor, c2line, c2roof, c2wall } from './c2.js';
import { c1base, c1floor, c1line, c1roof, c1wall } from './c1.js';

require([
  'esri/Map',
  'esri/views/SceneView',
  'esri/layers/GraphicsLayer',
  'esri/Graphic',
], (Map, SceneView, GraphicsLayer, Graphic) => {
  const map = new Map({
    basemap: 'hybrid',
  });

  const view = new SceneView({
    container: 'viewDiv',
    map: map,

    camera: {
      // autocasts as new Camera()
      position: {
        // autocasts as new Point()
        x: 106.78050001,
        y: 10.889569999,
        z: 1000,
      },
      heading: 180,
      tilt: 0,
    },
  });

  /*********************
   * Add graphics layer
   *********************/

  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);

  /***************************
   * Add E1
   ***************************/
  const e1baseGraphic = new Graphic({
    geometry: e1base,
    symbol: e1wallSymbol,
  });

  const e1roofGraphic = new Graphic({
    geometry: e1roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([e1baseGraphic, e1roofGraphic]);

  for (let i = 0; i <= 19; i++) {
    let e1floorGraphic = new Graphic({
      geometry: e1floor[i],
      symbol: e1floorSymbol,
    });
    graphicsLayer.add(e1floorGraphic);
  }

  for (let i = 0; i <= 19; i++) {
    let e1wallGraphic = new Graphic({
      geometry: e1wall[i],
      symbol: e1wallSymbol,
    });
    graphicsLayer.add(e1wallGraphic);
  }

  for (let i = 0; i <= 8; i++) {
    let e1lineGraphic = new Graphic({
      geometry: e1line[i],
      symbol: e1lineSymbol,
    });
    graphicsLayer.add(e1lineGraphic);
  }

  for (let i = 0; i <= 14; i++) {
    let e1sw1Graphic = new Graphic({
      geometry: e1sideWindow1[i],
      symbol: e1doorSymbol,
    });
    graphicsLayer.add(e1sw1Graphic);
  }

  for (let i = 0; i <= 14; i++) {
    let e1sw2Graphic = new Graphic({
      geometry: e1sideWindow2[i],
      symbol: e1doorSymbol,
    });
    graphicsLayer.add(e1sw2Graphic);
  }

  for (let i = 0; i <= 14; i++) {
    let e1sw3Graphic = new Graphic({
      geometry: e1sideWindow3[i],
      symbol: e1doorSymbol,
    });
    graphicsLayer.add(e1sw3Graphic);
  }

  /***************************
   * Add G1
   ***************************/

  const g1baseGraphic = new Graphic({
    geometry: g1base,
    symbol: e1wallSymbol,
  });

  const g1roofGraphic = new Graphic({
    geometry: g1roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([g1baseGraphic, g1roofGraphic]);

  for (let i = 0; i <= 19; i++) {
    let g1floorGraphic = new Graphic({
      geometry: g1floor[i],
      symbol: e1floorSymbol,
    });
    graphicsLayer.add(g1floorGraphic);
  }

  for (let i = 0; i <= 19; i++) {
    let g1wallGraphic = new Graphic({
      geometry: g1wall[i],
      symbol: e1wallSymbol,
    });
    graphicsLayer.add(g1wallGraphic);
  }

  for (let i = 0; i <= 8; i++) {
    let g1lineGraphic = new Graphic({
      geometry: g1line[i],
      symbol: e1lineSymbol,
    });
    graphicsLayer.add(g1lineGraphic);
  }

  /***************************
   * Add F1
   ***************************/

  const f1baseGraphic = new Graphic({
    geometry: f1base,
    symbol: e1wallSymbol,
  });

  const f1roofGraphic = new Graphic({
    geometry: f1roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([f1baseGraphic, f1roofGraphic]);

  for (let i = 0; i <= 19; i++) {
    let f1floorGraphic = new Graphic({
      geometry: f1floor[i],
      symbol: e1floorSymbol,
    });
    graphicsLayer.add(f1floorGraphic);
  }

  for (let i = 0; i <= 19; i++) {
    let f1wallGraphic = new Graphic({
      geometry: f1wall[i],
      symbol: e1wallSymbol,
    });
    graphicsLayer.add(f1wallGraphic);
  }

  for (let i = 0; i <= 8; i++) {
    let f1lineGraphic = new Graphic({
      geometry: f1line[i],
      symbol: e1lineSymbol,
    });
    graphicsLayer.add(f1lineGraphic);
  }

  /***************************
   * Add F2
   ***************************/

  const f2baseGraphic = new Graphic({
    geometry: f2base,
    symbol: e1wallSymbol,
  });

  const f2roofGraphic = new Graphic({
    geometry: f2roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([f2baseGraphic, f2roofGraphic]);

  for (let i = 0; i <= 19; i++) {
    let f2floorGraphic = new Graphic({
      geometry: f2floor[i],
      symbol: e1floorSymbol,
    });
    graphicsLayer.add(f2floorGraphic);
  }

  for (let i = 0; i <= 19; i++) {
    let f2wallGraphic = new Graphic({
      geometry: f2wall[i],
      symbol: e1wallSymbol,
    });
    graphicsLayer.add(f2wallGraphic);
  }

  for (let i = 0; i <= 8; i++) {
    let f2lineGraphic = new Graphic({
      geometry: f2line[i],
      symbol: e1lineSymbol,
    });
    graphicsLayer.add(f2lineGraphic);
  }

  /***************************
   * Add f1f2
   ***************************/

  const f1f2baseGraphic = new Graphic({
    geometry: f1f2base,
    symbol: e1wallSymbol,
  });

  const f1f2roofGraphic = new Graphic({
    geometry: f1f2roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([f1f2baseGraphic, f1f2roofGraphic]);

  for (let i = 0; i <= 3; i++) {
    let f1f2floorGraphic = new Graphic({
      geometry: f1f2floor[i],
      symbol: e1floorSymbol,
    });
    graphicsLayer.add(f1f2floorGraphic);
  }

  for (let i = 0; i <= 3; i++) {
    let f1f2wallGraphic = new Graphic({
      geometry: f1f2wall[i],
      symbol: e1wallSymbol,
    });
    graphicsLayer.add(f1f2wallGraphic);
  }

  for (let i = 0; i <= 8; i++) {
    let f1f2lineGraphic = new Graphic({
      geometry: f1f2line[i],
      symbol: e1lineSymbol,
    });
    graphicsLayer.add(f1f2lineGraphic);
  }

  /***************************
   * Add C4
   ***************************/

  const c4baseGraphic = new Graphic({
    geometry: c4base,
    symbol: e1wallSymbol,
  });

  const c4roofGraphic = new Graphic({
    geometry: c4roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([c4baseGraphic, c4roofGraphic]);

  for (let i = 0; i <= 19; i++) {
    let c4floorGraphic = new Graphic({
      geometry: c4floor[i],
      symbol: e1floorSymbol,
    });
    graphicsLayer.add(c4floorGraphic);
  }

  for (let i = 0; i <= 19; i++) {
    let c4wallGraphic = new Graphic({
      geometry: c4wall[i],
      symbol: e1wallSymbol,
    });
    graphicsLayer.add(c4wallGraphic);
  }

  for (let i = 0; i <= 8; i++) {
    let c4lineGraphic = new Graphic({
      geometry: c4line[i],
      symbol: e1lineSymbol,
    });
    graphicsLayer.add(c4lineGraphic);
  }

  /***************************
   * Add B1
   ***************************/

  const b1baseGraphic = new Graphic({
    geometry: b1base,
    symbol: e1wallSymbol,
  });

  const b1roofGraphic = new Graphic({
    geometry: b1roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([b1baseGraphic, b1roofGraphic]);

  for (let i = 0; i <= 11; i++) {
    let b1floorGraphic = new Graphic({
      geometry: b1floor[i],
      symbol: e1floorSymbol,
    });
    graphicsLayer.add(b1floorGraphic);
  }

  for (let i = 0; i <= 11; i++) {
    let b1wallGraphic = new Graphic({
      geometry: b1wall[i],
      symbol: e1wallSymbol,
    });
    graphicsLayer.add(b1wallGraphic);
  }

  /***************************
   * Add BA1
   ***************************/

  const ba1baseGraphic = new Graphic({
    geometry: ba1base,
    symbol: e1wallSymbol,
  });

  const ba1roofGraphic = new Graphic({
    geometry: ba1roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([ba1baseGraphic, ba1roofGraphic]);

  for (let i = 0; i <= 19; i++) {
    let ba1floorGraphic = new Graphic({
      geometry: ba1floor[i],
      symbol: e1floorSymbol,
    });
    graphicsLayer.add(ba1floorGraphic);
  }

  for (let i = 0; i <= 19; i++) {
    let ba1wallGraphic = new Graphic({
      geometry: ba1wall[i],
      symbol: e1wallSymbol,
    });
    graphicsLayer.add(ba1wallGraphic);
  }

  for (let i = 0; i <= 8; i++) {
    let ba1lineGraphic = new Graphic({
      geometry: ba1line[i],
      symbol: e1lineSymbol,
    });
    graphicsLayer.add(ba1lineGraphic);
  }

  /***************************
   * Add BA2
   ***************************/

  const ba2baseGraphic = new Graphic({
    geometry: ba2base,
    symbol: e1wallSymbol,
  });

  const ba2roofGraphic = new Graphic({
    geometry: ba2roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([ba2baseGraphic, ba2roofGraphic]);

  for (let i = 0; i <= 19; i++) {
    let ba1floorGraphic = new Graphic({
      geometry: ba2floor[i],
      symbol: e1floorSymbol,
    });
    graphicsLayer.add(ba1floorGraphic);
  }

  for (let i = 0; i <= 19; i++) {
    let ba2wallGraphic = new Graphic({
      geometry: ba2wall[i],
      symbol: e1wallSymbol,
    });
    graphicsLayer.add(ba2wallGraphic);
  }

  for (let i = 0; i <= 8; i++) {
    let ba2lineGraphic = new Graphic({
      geometry: ba2line[i],
      symbol: e1lineSymbol,
    });
    graphicsLayer.add(ba2lineGraphic);
  }

  /***************************
   * Add B4
   ***************************/

  const b4baseGraphic = new Graphic({
    geometry: b4base,
    symbol: e1wallSymbol,
  });

  const b4roofGraphic = new Graphic({
    geometry: b4roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([b4baseGraphic, b4roofGraphic]);

  for (let i = 0; i <= 15; i++) {
    let b4floorGraphic = new Graphic({
      geometry: b4floor[i],
      symbol: e1floorSymbol,
    });
    graphicsLayer.add(b4floorGraphic);
  }

  for (let i = 0; i <= 15; i++) {
    let b4wallGraphic = new Graphic({
      geometry: b4wall[i],
      symbol: e1wallSymbol,
    });
    graphicsLayer.add(b4wallGraphic);
  }

  for (let i = 0; i <= 4; i++) {
    let b4lineGraphic = new Graphic({
      geometry: b4line[i],
      symbol: e1lineSymbol,
    });
    graphicsLayer.add(b4lineGraphic);
  }

  /***************************
   * Add B3
   ***************************/

  const b3baseGraphic = new Graphic({
    geometry: b3base,
    symbol: e1wallSymbol,
  });

  const b3roofGraphic = new Graphic({
    geometry: b3roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([b3baseGraphic, b3roofGraphic]);

  for (let i = 0; i <= 15; i++) {
    let b3floorGraphic = new Graphic({
      geometry: b3floor[i],
      symbol: e1floorSymbol,
    });
    graphicsLayer.add(b3floorGraphic);
  }

  for (let i = 0; i <= 15; i++) {
    let b3wallGraphic = new Graphic({
      geometry: b3wall[i],
      symbol: e1wallSymbol,
    });
    graphicsLayer.add(b3wallGraphic);
  }

  for (let i = 0; i <= 4; i++) {
    let b3lineGraphic = new Graphic({
      geometry: b3line[i],
      symbol: e1lineSymbol,
    });
    graphicsLayer.add(b3lineGraphic);
  }

  // let b3Graphic = new Graphic({
  //     geometry: b3base,
  //     symbol: e1wallSymbol
  // });
  // graphicsLayer.add(b3Graphic)

  /***************************
   * Add another building
   ***************************/

  /***************************
   * Add D6
   ***************************/
  const d6baseGraphic = new Graphic({
    geometry: d6base,
    symbol: e1wallSymbol,
  });

  const d6roofGraphic = new Graphic({
    geometry: d6roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([d6baseGraphic, d6roofGraphic]);

  for (let i = 0; i <= 23; i++) {
    let d6floorGraphic = new Graphic({
      geometry: d6floor[i],
      symbol: e1floorSymbol,
    });
    graphicsLayer.add(d6floorGraphic);
  }

  for (let i = 0; i <= 23; i++) {
    let d6wallGraphic = new Graphic({
      geometry: d6wall[i],
      symbol: e1wallSymbol,
    });
    graphicsLayer.add(d6wallGraphic);
  }

  for (let i = 0; i <= 8; i++) {
    let d6lineGraphic = new Graphic({
      geometry: d6line[i],
      symbol: e1lineSymbol,
    });
    graphicsLayer.add(d6lineGraphic);
  }

  /***************************
   * Add D5
   ***************************/
  const d5baseGraphic = new Graphic({
    geometry: d5base,
    symbol: e1wallSymbol,
  });

  const d5roofGraphic = new Graphic({
    geometry: d5roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([d5baseGraphic, d5roofGraphic]);

  for (let i = 0; i <= 23; i++) {
    let d5floorGraphic = new Graphic({
      geometry: d5floor[i],
      symbol: e1floorSymbol,
    });
    graphicsLayer.add(d5floorGraphic);
  }

  for (let i = 0; i <= 23; i++) {
    let d5wallGraphic = new Graphic({
      geometry: d5wall[i],
      symbol: e1wallSymbol,
    });
    graphicsLayer.add(d5wallGraphic);
  }

  for (let i = 0; i <= 8; i++) {
    let d5lineGraphic = new Graphic({
      geometry: d5line[i],
      symbol: e1lineSymbol,
    });
    graphicsLayer.add(d5lineGraphic);
  }

  /***************************
   * Add C6
   ***************************/
  const c6baseGraphic = new Graphic({
    geometry: c6base,
    symbol: e1wallSymbol,
  });

  const c6roofGraphic = new Graphic({
    geometry: c6roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([c6baseGraphic, c6roofGraphic]);

  for (let i = 0; i <= 23; i++) {
    let c6floorGraphic = new Graphic({
      geometry: c6floor[i],
      symbol: e1floorSymbol,
    });
    graphicsLayer.add(c6floorGraphic);
  }

  for (let i = 0; i <= 23; i++) {
    let c6wallGraphic = new Graphic({
      geometry: c6wall[i],
      symbol: e1wallSymbol,
    });
    graphicsLayer.add(c6wallGraphic);
  }

  for (let i = 0; i <= 8; i++) {
    let c6lineGraphic = new Graphic({
      geometry: c6line[i],
      symbol: e1lineSymbol,
    });
    graphicsLayer.add(c6lineGraphic);
  }

  /***************************
   * Add C5
   ***************************/
  const c5baseGraphic = new Graphic({
    geometry: c5base,
    symbol: e1wallSymbol,
  });

  const c5roofGraphic = new Graphic({
    geometry: c5roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([c5baseGraphic, c5roofGraphic]);

  for (let i = 0; i <= 23; i++) {
    let c5floorGraphic = new Graphic({
      geometry: c5floor[i],
      symbol: e1floorSymbol,
    });
    graphicsLayer.add(c5floorGraphic);
  }

  for (let i = 0; i <= 23; i++) {
    let c5wallGraphic = new Graphic({
      geometry: c5wall[i],
      symbol: e1wallSymbol,
    });
    graphicsLayer.add(c5wallGraphic);
  }

  for (let i = 0; i <= 8; i++) {
    let c5lineGraphic = new Graphic({
      geometry: c5line[i],
      symbol: e1lineSymbol,
    });
    graphicsLayer.add(c5lineGraphic);
  }
  // let c4Graphic = new Graphic({
  //     geometry: c4base,
  //     symbol: e1wallSymbol
  // });
  // graphicsLayer.add(c4Graphic)

  /***************************
   * Add another building
   ***************************/

  /***************************
   * Add D2
   ***************************/

  const d2BaseGraphic = new Graphic({
    geometry: d2Base,
    symbol: e1wallSymbol,
  });

  const d2RoofGraphic = new Graphic({
    geometry: d2Roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([d2BaseGraphic, d2RoofGraphic]);

  for (let i = 0; i <= d2BaseRings.length - 1; i++) {
    let d2FloorGraphic, d2WallGraphic;

    d2FloorGraphic = new Graphic({
      geometry: d2Floor[i],
      symbol: e1floorSymbol,
    });

    d2WallGraphic = new Graphic({
      geometry: d2Wall[i],
      symbol: e1wallSymbol,
    });

    graphicsLayer.add(d2FloorGraphic);
    graphicsLayer.add(d2WallGraphic);
  }

  for (let i = 0; i <= 8; i++) {
    let d2LineGraphic = new Graphic({
      geometry: d2Line[i],
      symbol: e1lineSymbol,
    });

    graphicsLayer.add(d2LineGraphic);
  }

  /***************************
   * Add D3
   ***************************/

  const d3BaseGraphic = new Graphic({
    geometry: d3Base,
    symbol: e1wallSymbol,
  });

  const d3RoofGraphic = new Graphic({
    geometry: d3Roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([d3BaseGraphic, d3RoofGraphic]);

  for (let i = 0; i <= d3BaseRings.length - 1; i++) {
    let d3FloorGraphic, d3WallGraphic;

    d3FloorGraphic = new Graphic({
      geometry: d3Floor[i],
      symbol: e1floorSymbol,
    });

    d3WallGraphic = new Graphic({
      geometry: d3Wall[i],
      symbol: e1wallSymbol,
    });

    graphicsLayer.add(d3FloorGraphic);
    graphicsLayer.add(d3WallGraphic);
  }

  for (let i = 0; i <= 8; i++) {
    let d3LineGraphic = new Graphic({
      geometry: d3Line[i],
      symbol: e1lineSymbol,
    });

    graphicsLayer.add(d3LineGraphic);
  }

  /***************************
   * Add D4
   ***************************/
  const d4BaseGraphic = new Graphic({
    geometry: d4Base,
    symbol: e1wallSymbol,
  });

  const d4RoofGraphic = new Graphic({
    geometry: d4Roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([d4BaseGraphic, d4RoofGraphic]);

  for (let i = 0; i <= d4BaseRings.length - 1; i++) {
    let d4FloorGraphic, d4WallGraphic;

    d4FloorGraphic = new Graphic({
      geometry: d4Floor[i],
      symbol: e1floorSymbol,
    });

    d4WallGraphic = new Graphic({
      geometry: d4Wall[i],
      symbol: e1wallSymbol,
    });

    graphicsLayer.add(d4FloorGraphic);
    graphicsLayer.add(d4WallGraphic);
  }

  for (let i = 0; i <= 8; i++) {
    let d4LineGraphic = new Graphic({
      geometry: d4Line[i],
      symbol: e1lineSymbol,
    });

    graphicsLayer.add(d4LineGraphic);
  }

  /***************************
   * Add C2
   ***************************/
  const c2BaseGraphic = new Graphic({
    geometry: c2base,
    symbol: e1wallSymbol,
  });

  const c2RoofGraphic = new Graphic({
    geometry: c2roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([c2BaseGraphic, c2RoofGraphic]);

  for (let i = 0; i <= d2BaseRings.length - 1; i++) {
    let c2FloorGraphic, c2WallGraphic;

    c2FloorGraphic = new Graphic({
      geometry: c2floor[i],
      symbol: e1floorSymbol,
    });

    c2WallGraphic = new Graphic({
      geometry: c2wall[i],
      symbol: e1wallSymbol,
    });

    graphicsLayer.add(c2FloorGraphic);
    graphicsLayer.add(c2WallGraphic);
  }

  for (let i = 0; i <= 8; i++) {
    let c2LineGraphic = new Graphic({
      geometry: c2line[i],
      symbol: e1lineSymbol,
    });

    graphicsLayer.add(c2LineGraphic);
  }

  /***************************
   * Add C1
   ***************************/
  const c1BaseGraphic = new Graphic({
    geometry: c1base,
    symbol: e1wallSymbol,
  });

  const c1RoofGraphic = new Graphic({
    geometry: c1roof,
    symbol: e1wallSymbol,
  });

  graphicsLayer.addMany([c1BaseGraphic, c1RoofGraphic]);

  for (let i = 0; i <= d2BaseRings.length - 1; i++) {
    let c1FloorGraphic, c1WallGraphic;

    c1FloorGraphic = new Graphic({
      geometry: c1floor[i],
      symbol: e1floorSymbol,
    });

    c1WallGraphic = new Graphic({
      geometry: c1wall[i],
      symbol: e1wallSymbol,
    });

    graphicsLayer.add(c1FloorGraphic);
    graphicsLayer.add(c1WallGraphic);
  }

  for (let i = 0; i <= 8; i++) {
    let c1LineGraphic = new Graphic({
      geometry: c1line[i],
      symbol: e1lineSymbol,
    });

    graphicsLayer.add(c1LineGraphic);
  }
});
