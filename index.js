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
} from "./e1.js";
import { g1base, g1roof, g1floor, g1wall, g1line } from "./g1.js";
import { f1base, f1roof, f1floor, f1wall, f1line } from "./f1.js";
import { f2base, f2roof, f2floor, f2wall, f2line } from "./f2.js";
import { f1f2base, f1f2roof, f1f2floor, f1f2wall, f1f2line } from "./f1f2.js";

import { c4base, c4roof, c4floor, c4wall, c4line } from "./c4.js";
import { d6base, d6roof, d6floor, d6wall, d6line } from "./d6.js";
import { d5base, d5roof, d5floor, d5wall, d5line } from "./d5.js";
require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GraphicsLayer",
  "esri/Graphic",
], (Map, SceneView, GraphicsLayer, Graphic) => {
  const map = new Map({
    basemap: "hybrid",
  });

  const view = new SceneView({
    container: "viewDiv",
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
   * Add another building
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

  for (let i = 0; i <= 19; i++) {
    let d5floorGraphic = new Graphic({
      geometry: d5floor[i],
      symbol: e1floorSymbol,
    });
    graphicsLayer.add(d5floorGraphic);
  }

  for (let i = 0; i <= 19; i++) {
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
  // let c4Graphic = new Graphic({
  //     geometry: c4base,
  //     symbol: e1wallSymbol
  // });
  // graphicsLayer.add(c4Graphic)

  /***************************
   * Add another building
   ***************************/
});
