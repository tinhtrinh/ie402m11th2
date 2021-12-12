import { wallSymbol, floorSymbol, lineSymbol, doorSymbol } from "./util.js"

import { e1 } from "./e1.js"
import { g1 } from "./g1.js";
import { f1 } from "./f1.js";
import { f2 } from "./f2.js";
import { f1f2 } from "./f1f2.js";

import { c4 } from "./c4.js";
import { c3 } from "./c3.js";

import { d6 } from "./d6.js";
import { c6 } from "./c6.js";
import { d5 } from "./d5.js";
import { c5 } from "./c5.js";

import { b1 } from "./b1.js"
import { ba1 } from "./ba1.js"
import { ba2 } from "./ba2.js"
import { b4 } from "./b4.js"
import { b3 } from "./b3.js"
import { b5 } from "./b5.js"
import { ba4 } from "./ba4.js"
import { ba3 } from "./ba3.js"
import { ba5 } from "./ba5.js"

import { d2 } from './d2.js';
import { d3 } from './d3.js';
import { d4 } from './d4.js';

import { c2 } from './c2.js';
import { c1 } from './c1.js';

const buildings = [e1, g1, f1, f2, f1f2, c4, c3, d6, c6, d5, c5, b1, ba1, ba2, b4, b3, b5, ba4, ba3, ba5, d2, d3, d4, c2, c1]

require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GraphicsLayer",
  "esri/Graphic",
], (Map, SceneView, GraphicsLayer, Graphic) => {
    const map = new Map({
        basemap: "hybrid"
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
                z: 1000
            },
            heading: 180,
            tilt: 0
        }
    });

    /*********************
     * Add graphics layer
     *********************/

    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);


    /***************************
     * Add Buildings
     ***************************/  
    buildings.forEach(building => {
      building.baseGraphic = new Graphic({
        geometry: building.base,
        symbol: wallSymbol
      });

      building.roofGraphic = new Graphic({
        geometry: building.roof,
        symbol: wallSymbol
      });

      graphicsLayer.addMany([building.baseGraphic, building.roofGraphic]);

      for(let i = 0; i <= building.ringNumber; i ++) {
        building.floorGraphic = new Graphic({
            geometry: building.floor[i],
            symbol: floorSymbol
        });
        graphicsLayer.add(building.floorGraphic);
      }

      for(let i = 0; i <= building.ringNumber; i ++) {
            building.wallGraphic = new Graphic({
                geometry: building.wall[i],
                symbol: wallSymbol
            });
            graphicsLayer.add(building.wallGraphic);
      }

      for(let i = 0; i <= building.lineNumber; i++) {
        building.lineGraphic = new Graphic({
            geometry: building.line[i],
            symbol: lineSymbol
        });
        graphicsLayer.add(building.lineGraphic)
      }
    })

    // for(let i = 0; i <= 14; i++) {
    //     let e1sw1Graphic = new Graphic({
    //         geometry: e1sideWindow1[i],
    //         symbol: e1doorSymbol
    //     });
    //     graphicsLayer.add(e1sw1Graphic)
    // }

    // for(let i = 0; i <= 14; i++) {
    //     let e1sw2Graphic = new Graphic({
    //         geometry: e1sideWindow2[i],
    //         symbol: e1doorSymbol
    //     });
    //     graphicsLayer.add(e1sw2Graphic)
    // }

    // for(let i = 0; i <= 14; i++) {
    //     let e1sw3Graphic = new Graphic({
    //         geometry: e1sideWindow3[i],
    //         symbol: e1doorSymbol
    //     });
    //     graphicsLayer.add(e1sw3Graphic)
    // }
    
  /***************************
   * Add another building
   ***************************/
});
