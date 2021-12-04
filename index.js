import { e1base, e1wallSymbol, e1roof, e1floorSymbol, e1floor, e1wall } from "./e1.js";

require([
    "esri/Map",
    "esri/views/SceneView",
    "esri/layers/GraphicsLayer",
    "esri/Graphic"
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
     * Add E1
     ***************************/
    const e1baseGraphic = new Graphic({
        geometry: e1base,
        symbol: e1wallSymbol
    });

    const e1roofGraphic = new Graphic({
        geometry: e1roof,
        symbol: e1wallSymbol
    });

    graphicsLayer.addMany([e1baseGraphic, e1roofGraphic]);

    for(let i = 0; i <= 19; i ++) {
        let e1floorGraphic = new Graphic({
            geometry: e1floor[i],
            symbol: e1floorSymbol
        });
        graphicsLayer.add(e1floorGraphic);
    }

    for(let i = 0; i <= 19; i ++) {
        let e1wallGraphic = new Graphic({
            geometry: e1wall[i],
            symbol: e1wallSymbol
        });
        graphicsLayer.add(e1wallGraphic);
    }

    
    /***************************
     * Add another building
     ***************************/
});