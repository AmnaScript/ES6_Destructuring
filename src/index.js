// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

// const [tesla, honda] = cars;
const [
  {
    model: hondaModel,
    coloursByPopularity: [hondaTopColour],
    speedStats: { topSpeed: hondaTopSpeed, zeroToSixty: hondaZero },
  },
  {
    model: teslaModel,
    coloursByPopularity: [teslaTopColour],
    speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: teslaZero },
  },
] = cars;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{teslaModel}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{hondaModel}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
