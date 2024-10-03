import { onMount } from "solid-js";
import * as d3 from "d3";
import worldData from "../lib/world.json";

const GlobeComponent = () => {
  let mapContainer: HTMLDivElement | undefined;
  const visitedCountries = [
    // "France",
    // "China",
    // "Italy",
    // "Sri Lanka",
    // "Turkey",
    // "Greece",
    // "Malta",
    // "Hungary",
    // "Portugal",
    // "Marocco",
    "Peru",
    "Colombia"
  ];

  onMount(() => {
    if (!mapContainer) return;

    const width = mapContainer.clientWidth;
    const height = 500;
    const sensitivity = 75;

    let projection = d3
      .geoOrthographic()
      .scale(250)
      .center([0, 0])
      .rotate([60, 0])
      .translate([width / 2, height / 2]);

    const initialScale = projection.scale();
    let pathGenerator = d3.geoPath().projection(projection);

    let svg = d3
      .select(mapContainer)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    svg
      .append("circle")
      .attr("fill", "#EEE")
      .attr("stroke", "#000")
      .attr("stroke-width", "0.2")
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", initialScale);

    let map = svg.append("g");

    map
      .append("g")
      .attr("class", "countries")
      .selectAll("path")
      .data(worldData.features)
      .enter()
      .append("path")
      .attr("d", (d: any) => pathGenerator(d as any))
      
      
      .attr("fill", function(d) {
        // Colores de la bandera de Perú (rojo-blanco-rojo)
        if (d.properties.name === "Peru") {
          const peruGradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "peruGradient")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");
            
          peruGradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#d91023");
          peruGradient.append("stop")
            .attr("offset", "33%")
            .attr("stop-color", "#ffffff");
          peruGradient.append("stop")
            .attr("offset", "66%")
            .attr("stop-color", "#d91023");

          return "url(#peruGradient)";

        // Colores de la bandera de Colombia (amarillo-azul-rojo)
        } else if (d.properties.name === "Colombia") {
          const colombiaGradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "colombiaGradient")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "0%")
            .attr("y2", "100%");
            
          colombiaGradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#fde100");  // Amarillo
          colombiaGradient.append("stop")
            .attr("offset", "50%")
            .attr("stop-color", "#003893");  // Azul
          colombiaGradient.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", "#ce1126");  // Rojo

          return "url(#colombiaGradient)";

        } else {
          return "white";  // Color genérico para otros países
        }
      })
      .style("stroke", "black")
      .style("stroke-width", 0.3)
      .style("opacity", 0.8);



//      .attr("fill", (d: { properties: { name: string } }) =>
//        visitedCountries.includes(d.properties.name) ? "#E63946" : "white"
//      )
//      .style("stroke", "black")
//      .style("stroke-width", 0.3)
//      .style("opacity", 0.8);

    d3.timer(() => {
      const rotate = projection.rotate();
      const k = sensitivity / projection.scale();
      projection.rotate([rotate[0] - 1 * k, rotate[1]]);
      svg.selectAll("path").attr("d", (d: any) => pathGenerator(d as any));
    }, 100);
  });

  return (
    <div class="flex flex-col text-white justify-center items-center w-full h-full">
      <div class="w-full" ref={mapContainer}></div>
    </div>
  );
};

export default GlobeComponent;
